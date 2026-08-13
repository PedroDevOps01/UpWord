#!/usr/bin/env node
// Validador de conteúdo do UpWord. Carrega js/data/*.js num contexto Node
// simulando window/APP_DATA (mesma ordem de <script> do index.html) e checa
// tudo que é verificável automaticamente: índice de resposta fora do range,
// explicação de quiz ausente, seções obrigatórias faltando, modelo de writing
// abaixo do mínimo de palavras, ids de vocabulário ausentes/duplicados e
// rotas mal formadas. Roda sem dependências novas: `node scripts/validate-content.js`.
// Saída: 0 se não houver erros (avisos não bloqueiam); 1 caso contrário.
'use strict';
var fs = require('fs');
var path = require('path');
var vm = require('vm');

var ROOT = path.join(__dirname, '..');
var DATA_FILES = [
  'js/data/levels.js',
  'js/data/placementQuiz.js',
  'js/data/a1.js',
  'js/data/a2.js',
  'js/data/b1.js',
  'js/data/b2.js',
  'js/data/c1.js',
  'js/data/c2.js',
  'js/data/electives.js'
];

var sandbox = {};
sandbox.window = sandbox;
sandbox.console = console;
vm.createContext(sandbox);
DATA_FILES.forEach(function (rel) {
  var code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  vm.runInContext(code, sandbox, { filename: rel });
});
var APP_DATA = sandbox.APP_DATA;

var errors = [];
var warnings = [];

function err(msg) { errors.push(msg); }
function warn(msg) { warnings.push(msg); }

function words(text) {
  return (text || '').trim().split(/\s+/).filter(Boolean).length;
}

var SLUG_RE = /^[a-z0-9-]+$/;

function checkQuizQuestion(refLabel, q, index) {
  var where = refLabel + ' pergunta #' + (index + 1);
  if (!q.explanation || !String(q.explanation).trim()) {
    err(where + ': sem "explanation".');
  }
  if (q.type === 'tf') {
    if (typeof q.answer !== 'boolean') err(where + ': tipo "tf" com "answer" que não é booleano.');
  } else if (q.type === 'short') {
    var accepted = Array.isArray(q.answer) ? q.answer : [q.answer];
    if (!accepted.length || accepted.some(function (a) { return !a || !String(a).trim(); })) {
      err(where + ': tipo "short" com "answer" vazio.');
    }
  } else {
    if (!Array.isArray(q.options) || q.options.length === 0) {
      err(where + ': sem "options".');
    } else if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) {
      err(where + ': "answer" (' + q.answer + ') fora do intervalo de "options" (0-' + (q.options.length - 1) + ').');
    }
  }
}

function checkWritingItem(refLabel, item, index) {
  var where = refLabel + ' writing #' + (index + 1);
  if (!item.prompt || !String(item.prompt).trim()) err(where + ': sem "prompt".');
  if (item.modelAnswer && item.minWords) {
    var wc = words(item.modelAnswer);
    if (wc < item.minWords) {
      err(where + ': modelAnswer tem ' + wc + ' palavras, abaixo do minWords (' + item.minWords + ').');
    }
  } else if (item.modelAnswer && !item.minWords) {
    warn(where + ': tem modelAnswer mas não define minWords.');
  }
}

var seenModuleIds = {};
var vocabWordToModules = {};
var vocabMissingId = 0;
var vocabDuplicateIds = {};

function checkModule(levelId, module, moduleIndex) {
  var refLabel = levelId.toUpperCase() + '/' + module.id;

  if (!SLUG_RE.test(module.id)) err(refLabel + ': id de módulo mal formado.');
  if (seenModuleIds[module.id]) err(refLabel + ': id de módulo duplicado em todo o app.');
  seenModuleIds[module.id] = true;

  var REQUIRED_SECTIONS = ['lesson', 'vocabulary', 'grammar', 'listening', 'reading', 'writing', 'speaking', 'exercises', 'quiz'];
  REQUIRED_SECTIONS.forEach(function (key) {
    var val = module[key];
    var empty = !val || (Array.isArray(val) && val.length === 0) || (key === 'lesson' && !(val.sections && val.sections.length));
    if (empty) err(refLabel + ': seção obrigatória "' + key + '" ausente ou vazia.');
  });

  (module.vocabulary || []).forEach(function (v, i) {
    if (!v.id) {
      vocabMissingId++;
    } else {
      if (vocabDuplicateIds[v.id]) err(refLabel + ': vocabulary id duplicado "' + v.id + '".');
      vocabDuplicateIds[v.id] = true;
    }
    if (!vocabWordToModules[v.word]) vocabWordToModules[v.word] = [];
    vocabWordToModules[v.word].push(refLabel);
  });

  (module.listening || []).forEach(function (item, i) {
    var where = refLabel + ' listening #' + (i + 1);
    if (!item.transcript) err(where + ': sem transcript.');
    if (!item.questions || !item.questions.length) err(where + ': sem perguntas.');
    (item.questions || []).forEach(function (q, qi) {
      if (typeof q.answer !== 'number' || !q.options || q.answer < 0 || q.answer >= q.options.length) {
        err(where + ' pergunta #' + (qi + 1) + ': "answer" fora do intervalo de "options".');
      }
    });
  });

  (module.reading || []).forEach(function (item, i) {
    var where = refLabel + ' reading #' + (i + 1);
    if (!item.text) err(where + ': sem texto.');
    if (!item.questions || !item.questions.length) err(where + ': sem perguntas.');
    (item.questions || []).forEach(function (q, qi) {
      if (typeof q.answer !== 'number' || !q.options || q.answer < 0 || q.answer >= q.options.length) {
        err(where + ' pergunta #' + (qi + 1) + ': "answer" fora do intervalo de "options".');
      }
    });
  });

  (module.writing || []).forEach(function (item, i) { checkWritingItem(refLabel, item, i); });

  (module.speaking || []).forEach(function (item, i) {
    var where = refLabel + ' speaking #' + (i + 1);
    if (!item.phrase) err(where + ': sem "phrase".');
    if (!item.tip) warn(where + ': sem "tip".');
  });

  (module.quiz || []).forEach(function (q, i) { checkQuizQuestion(refLabel + ' quiz', q, i); });
}

(APP_DATA.levels.concat(APP_DATA.electives || [])).forEach(function (level) {
  if (!SLUG_RE.test(level.id)) err('Nível "' + level.id + '": id mal formado.');
  var modules = APP_DATA.getModules(level.id);
  modules.forEach(function (module, i) { checkModule(level.id, module, i); });

  var finalTest = APP_DATA.getFinalTest(level.id);
  if (finalTest) {
    (finalTest.questions || []).forEach(function (q, i) {
      checkQuizQuestion(level.id.toUpperCase() + ' prova final', q, i);
    });
  } else if (modules.length > 0 && APP_DATA.levels.indexOf(level) !== -1) {
    warn('Nível ' + level.id.toUpperCase() + ': sem prova final definida.');
  }
});

if (vocabMissingId > 0) {
  err(vocabMissingId + ' entrada(s) de vocabulário sem "id" estável (necessário para flashcards/migração).');
}

var repeatedWords = Object.keys(vocabWordToModules).filter(function (w) { return vocabWordToModules[w].length > 1; });
if (repeatedWords.length) {
  warn(repeatedWords.length + ' palavra(s) de vocabulário repetida(s) em múltiplos módulos (permitido, apenas informativo): ' +
    repeatedWords.slice(0, 20).map(function (w) { return w + ' [' + vocabWordToModules[w].join(', ') + ']'; }).join(' | ') +
    (repeatedWords.length > 20 ? ' …' : ''));
}

// Nivelamento
(APP_DATA.placementQuiz.questions || []).forEach(function (q, i) {
  var where = 'Nivelamento pergunta #' + (i + 1);
  if (typeof q.answer !== 'number' || !q.options || q.answer < 0 || q.answer >= q.options.length) {
    err(where + ': "answer" fora do intervalo de "options".');
  }
});

console.log('=== UpWord — validação de conteúdo ===\n');
if (warnings.length) {
  console.log('Avisos (' + warnings.length + '):');
  warnings.forEach(function (w) { console.log('  ⚠ ' + w); });
  console.log('');
}
if (errors.length) {
  console.log('Erros (' + errors.length + '):');
  errors.forEach(function (e) { console.log('  ✘ ' + e); });
  console.log('\nFALHOU: ' + errors.length + ' erro(s) encontrado(s).');
  process.exit(1);
} else {
  console.log('OK: nenhum erro encontrado (' + warnings.length + ' aviso(s)).');
  process.exit(0);
}
