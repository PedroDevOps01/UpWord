var Views = window.Views || {};

Views.module = (function () {
  var TABS = [
    { key: 'lesson', label: '📖 Aula' },
    { key: 'vocabulary', label: '🗣 Vocabulário' },
    { key: 'grammar', label: '📐 Gramática' },
    { key: 'listening', label: '🎧 Listening' },
    { key: 'reading', label: '📰 Reading' },
    { key: 'writing', label: '✍️ Writing' },
    { key: 'speaking', label: '🎤 Speaking' },
    { key: 'exercises', label: '✅ Exercícios' }
  ];

  var SESSION_LABELS = {
    lesson: 'Aula', vocabulary: 'Vocabulário', grammar: 'Gramática', listening: 'Listening',
    reading: 'Reading', writing: 'Writing', speaking: 'Speaking', exercises: 'Exercícios', quiz: 'Quiz'
  };

  // Progresso visual das 9 sessões do módulo (8 abas + quiz), com contador,
  // pontos por sessão e indicação explícita do próximo passo.
  function sessionProgressHtml(moduleId, activeTab) {
    var summary = Storage.getModuleSessionSummary(moduleId);
    var dots = summary.sessions.map(function (s) {
      var cls = 'session-dot' + (s.done ? ' is-done' : '') + (s.key === activeTab ? ' is-current' : '');
      return '<span class="' + cls + '" title="' + SESSION_LABELS[s.key] + (s.done ? ' — concluída' : ' — pendente') + '"></span>';
    }).join('');
    var nextText = summary.next ? ('Próximo passo: ' + SESSION_LABELS[summary.next.key]) : 'Todas as sessões concluídas! 🎉';
    return (
      '<div class="module-session-progress" aria-label="Progresso das sessões deste módulo">' +
        '<span class="module-session-count">' + summary.done + '/' + summary.total + ' sessões</span>' +
        '<span class="module-session-dots">' + dots + '</span>' +
        '<span class="module-session-next muted">' + nextText + '</span>' +
      '</div>'
    );
  }

  function tabNav(levelId, moduleId, activeTab) {
    return '<nav class="module-tabs" aria-label="Abas do módulo">' + TABS.map(function (t, i) {
      var active = t.key === activeTab ? ' is-active' : '';
      var tick = '<span class="module-tab-tick" style="--i:' + i + '"></span>';
      return '<a class="module-tab' + active + '" href="#/level/' + levelId + '/module/' + moduleId + '/' + t.key + '"' + (t.key === activeTab ? ' aria-current="page"' : '') + '>' + tick + t.label + '</a>';
    }).join('') + '</nav>';
  }

  var accentGroupCounter = 0;

  function accentButtons(text) {
    var safe = text.replace(/"/g, '&quot;');
    var groupId = 'accent-fb-' + (++accentGroupCounter);
    return (
      '<span class="accent-buttons">' +
        '<button type="button" class="btn-accent" data-speak="' + safe + '" data-accent="american" data-fb="' + groupId + '" title="Sotaque americano" aria-label="Ouvir com sotaque americano">🇺🇸</button>' +
        '<button type="button" class="btn-accent" data-speak="' + safe + '" data-accent="british" data-fb="' + groupId + '" title="Sotaque britânico" aria-label="Ouvir com sotaque britânico">🇬🇧</button>' +
        '<button type="button" class="btn-accent" data-speak="' + safe + '" data-accent="australian" data-fb="' + groupId + '" title="Sotaque australiano" aria-label="Ouvir com sotaque australiano">🇦🇺</button>' +
        '<span class="accent-fallback-note" id="' + groupId + '" aria-live="polite"></span>' +
      '</span>'
    );
  }

  function bindAccentButtons(root) {
    root.querySelectorAll('.btn-accent').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var fbEl = document.getElementById(btn.getAttribute('data-fb'));
        Speech.speakInto(btn.getAttribute('data-speak'), btn.getAttribute('data-accent'), fbEl);
      });
    });
  }

  // Um section pode opcionalmente trazer table/correct/incorrect (mesmo
  // formato usado em module.grammar) quando o próprio texto da aula precisa
  // de uma tabela formal além da prosa — ex.: "There is / There are" em
  // A1-M3, que convive no mesmo módulo com a tabela de This/That/These/Those
  // em module.grammar.
  function renderSectionTable(s) {
    if (!s.table) return '';
    return (
      '<table class="grammar-table"><thead><tr>' +
        s.table.headers.map(function (h) { return '<th>' + h + '</th>'; }).join('') +
      '</tr></thead><tbody>' +
      s.table.rows.map(function (row) {
        return '<tr>' + row.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
      }).join('') +
      '</tbody></table>'
    );
  }

  function renderSectionCompare(s) {
    if (!s.correct && !s.incorrect) return '';
    var correct = (s.correct || []).map(function (c) { return '<li class="fb-ok">✔ ' + c + '</li>'; }).join('');
    var incorrect = (s.incorrect || []).map(function (c) { return '<li class="fb-bad">✘ ' + c + '</li>'; }).join('');
    return (
      '<div class="grammar-compare">' +
        '<div><h4>Certo</h4><ul class="plain-list">' + correct + '</ul></div>' +
        '<div><h4>Errado</h4><ul class="plain-list">' + incorrect + '</ul></div>' +
      '</div>'
    );
  }

  function renderLesson(module) {
    var lesson = module.lesson;
    var sections = (lesson.sections || []).map(function (s) {
      var examples = (s.examples || []).map(function (ex) {
        return '<li><strong>' + ex.en + '</strong> — ' + ex.pt + '</li>';
      }).join('');
      return (
        '<div class="lesson-section">' +
          '<h3>' + s.heading + '</h3>' +
          '<p>' + s.text + '</p>' +
          renderSectionTable(s) +
          (examples ? '<ul class="example-list">' + examples + '</ul>' : '') +
          renderSectionCompare(s) +
        '</div>'
      );
    }).join('');
    return (
      '<div class="tab-content">' +
        '<p class="lesson-intro">' + lesson.intro + '</p>' +
        sections +
      '</div>'
    );
  }

  // Campos opcionais mais ricos (collocations, word family, sinônimos,
  // antônimos, erro comum) só aparecem quando o item de vocabulário os
  // define — itens simples continuam com o card enxuto de sempre.
  function renderVocabExtra(v) {
    var lines = '';
    if (v.collocations && v.collocations.length) lines += '<div class="vocab-extra-line"><strong>Collocations:</strong> ' + v.collocations.join(', ') + '</div>';
    if (v.wordFamily && v.wordFamily.length) lines += '<div class="vocab-extra-line"><strong>Word family:</strong> ' + v.wordFamily.join(', ') + '</div>';
    if (v.synonyms && v.synonyms.length) lines += '<div class="vocab-extra-line"><strong>Sinônimos:</strong> ' + v.synonyms.join(', ') + '</div>';
    if (v.antonyms && v.antonyms.length) lines += '<div class="vocab-extra-line"><strong>Antônimos:</strong> ' + v.antonyms.join(', ') + '</div>';
    if (v.commonError) lines += '<div class="vocab-extra-line vocab-common-error"><strong>Erro comum:</strong> ' + v.commonError + '</div>';
    return lines;
  }

  function renderVocabulary(module) {
    var cards = module.vocabulary.map(function (v) {
      return (
        '<div class="vocab-card">' +
          '<div class="vocab-word">' + v.word + (v.partOfSpeech ? ' <span class="vocab-pos">' + v.partOfSpeech + '</span>' : '') + ' <span class="vocab-phonetic">' + v.phonetic + '</span> ' + accentButtons(v.word) + '</div>' +
          '<div class="vocab-translation">' + v.translation + (v.register ? ' <span class="vocab-register">' + v.register + '</span>' : '') + '</div>' +
          '<div class="vocab-example">"' + v.example + '" <span class="muted">— ' + v.exampleTranslation + '</span></div>' +
          renderVocabExtra(v) +
        '</div>'
      );
    }).join('');
    return '<div class="tab-content"><div class="vocab-grid">' + cards + '</div></div>';
  }

  // Além do tópico principal de gramática (module.grammar), qualquer seção
  // da Aula que já traga uma tabela formal (ex.: "There is / There are" em
  // A1-M3, que convive com "This/That/These/Those" no mesmo módulo) aparece
  // aqui também — mesma fonte de dados, sem duplicar conteúdo, encontrável
  // tanto em Aula quanto em Gramática.
  function renderGrammarExtrasFromLesson(module) {
    var sections = (module.lesson && module.lesson.sections) || [];
    var extras = sections.filter(function (s) { return s.table; });
    if (!extras.length) return '';
    return extras.map(function (s) {
      return (
        '<div class="lesson-section grammar-extra-topic">' +
          '<h3>' + s.heading + '</h3>' +
          renderSectionTable(s) +
          renderSectionCompare(s) +
        '</div>'
      );
    }).join('');
  }

  function renderGrammar(module) {
    var g = module.grammar;
    var correct = (g.correct || []).map(function (s) { return '<li class="fb-ok">✔ ' + s + '</li>'; }).join('');
    var incorrect = (g.incorrect || []).map(function (s) { return '<li class="fb-bad">✘ ' + s + '</li>'; }).join('');
    return (
      '<div class="tab-content">' +
        '<h3>' + g.title + '</h3>' +
        '<p>' + g.explanation + '</p>' +
        renderSectionTable(g) +
        '<div class="grammar-compare">' +
          '<div><h4>Certo</h4><ul class="plain-list">' + correct + '</ul></div>' +
          '<div><h4>Errado</h4><ul class="plain-list">' + incorrect + '</ul></div>' +
        '</div>' +
        renderGrammarExtrasFromLesson(module) +
        '<a class="btn-text-link" href="#/grammar">Ver referência gramatical de todos os níveis</a>' +
      '</div>'
    );
  }

  function renderListening(module) {
    var items = module.listening.map(function (item, i) {
      var flag = { american: '🇺🇸', british: '🇬🇧', australian: '🇦🇺' }[item.accent] || '🌍';
      var qId = 'listen-' + i;
      var questions = (item.questions || []).map(function (q, qi) {
        var opts = q.options.map(function (o, oi) {
          return '<label class="quiz-option"><input type="radio" name="' + qId + '-' + qi + '" value="' + oi + '"> <span>' + o + '</span></label>';
        }).join('');
        return (
          '<div class="ex-item mini-question" data-answer="' + q.answer + '">' +
            '<p>' + q.q + '</p>' +
            '<div class="quiz-options">' + opts + '</div>' +
            '<button type="button" class="btn-check-mini" data-name="' + qId + '-' + qi + '">Verificar</button>' +
            '<span class="ex-feedback" data-fb="' + qId + '-' + qi + '"></span>' +
          '</div>'
        );
      }).join('');
      return (
        '<div class="listening-card">' +
          '<h3>' + flag + ' ' + item.title + '</h3>' +
          '<div class="audio-player-slot" id="audio-slot-listen-' + i + '"></div>' +
          '<details class="transcript-toggle"><summary>Mostrar transcrição</summary><p>' + item.transcript + '</p></details>' +
          questions +
        '</div>'
      );
    }).join('');
    var toggleAll = module.listening.length > 1
      ? '<button type="button" class="btn-text-link" id="listening-toggle-all">Mostrar todas as transcrições</button>'
      : '';
    return '<div class="tab-content">' + toggleAll + items + '</div>';
  }

  function mountListeningPlayers(container, module) {
    module.listening.forEach(function (item, i) {
      var slot = container.querySelector('#audio-slot-listen-' + i);
      if (!slot) return;
      Player.mount(slot, {
        audioSrc: item.audioSrc || null,
        audioSource: item.audioSource || null,
        transcript: item.transcript,
        accent: item.accent,
        speedLevels: item.speedLevels
      });
    });
    var toggleBtn = container.querySelector('#listening-toggle-all');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        var details = container.querySelectorAll('.listening-card .transcript-toggle');
        var allOpen = Array.prototype.every.call(details, function (d) { return d.open; });
        details.forEach(function (d) { d.open = !allOpen; });
        toggleBtn.textContent = allOpen ? 'Mostrar todas as transcrições' : 'Esconder todas as transcrições';
      });
    }
  }

  function renderReading(module) {
    var items = module.reading.map(function (item, i) {
      var qId = 'read-' + i;
      var questions = (item.questions || []).map(function (q, qi) {
        var opts = q.options.map(function (o, oi) {
          return '<label class="quiz-option"><input type="radio" name="' + qId + '-' + qi + '" value="' + oi + '"> <span>' + o + '</span></label>';
        }).join('');
        return (
          '<div class="ex-item mini-question" data-answer="' + q.answer + '">' +
            '<p>' + q.q + '</p>' +
            '<div class="quiz-options">' + opts + '</div>' +
            '<button type="button" class="btn-check-mini" data-name="' + qId + '-' + qi + '">Verificar</button>' +
            '<span class="ex-feedback" data-fb="' + qId + '-' + qi + '"></span>' +
          '</div>'
        );
      }).join('');
      return (
        '<div class="reading-card">' +
          '<h3>' + item.title + '</h3>' +
          '<div class="audio-player-slot" id="audio-slot-read-' + i + '"></div>' +
          '<div class="reading-text">' + item.text + '</div>' +
          questions +
        '</div>'
      );
    }).join('');
    return '<div class="tab-content">' + items + '</div>';
  }

  function mountReadingPlayers(container, module) {
    module.reading.forEach(function (item, i) {
      var slot = container.querySelector('#audio-slot-read-' + i);
      if (!slot) return;
      Player.mount(slot, {
        audioSrc: item.audioSrc || null,
        audioSource: item.audioSource || null,
        text: item.text,
        accent: 'american',
        speedLevels: item.speedLevels,
        fallbackLabel: 'Ouvir texto completo (voz do navegador — TTS)'
      });
    });
  }

  function renderSpeaking(module) {
    var items = module.speaking.map(function (item, i) {
      return (
        '<div class="speaking-card" data-speaking-index="' + i + '">' +
          '<p class="speaking-phrase">"' + item.phrase + '"</p>' +
          '<p class="muted">💡 ' + item.tip + '</p>' +
          '<div class="speaking-actions">' + accentButtons(item.phrase) + '</div>' +
          '<div class="speaking-slot" id="speaking-slot-' + i + '"></div>' +
        '</div>'
      );
    }).join('');
    return '<div class="tab-content">' + items + '</div>';
  }

  function mountSpeakingWidgets(container, module, moduleId) {
    module.speaking.forEach(function (item, i) {
      var slot = container.querySelector('#speaking-slot-' + i);
      if (slot) Speaking.mount(slot, item, moduleId);
    });
  }

  function bindTabExtras(root, tab, moduleId) {
    bindAccentButtons(root);

    if (tab === 'listening' || tab === 'reading') {
      root.querySelectorAll('.btn-check-mini').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var name = btn.getAttribute('data-name');
          var selected = document.querySelector('input[name="' + name + '"]:checked');
          var item = btn.closest('.ex-item');
          var answer = parseInt(item.getAttribute('data-answer'), 10);
          var fb = document.querySelector('[data-fb="' + name + '"]');
          if (!selected) { fb.innerHTML = '<span class="fb-bad">Selecione uma opção.</span>'; return; }
          var ok = parseInt(selected.value, 10) === answer;
          var correctInput = item.querySelector('input[value="' + answer + '"]');
          var correctLabel = correctInput ? correctInput.closest('label').querySelector('span').textContent : '';
          fb.innerHTML = ok ? '<span class="fb-ok">✔ Correto!</span>' : '<span class="fb-bad">✘ Resposta correta: ' + correctLabel + '</span>';
          if (ok) Storage.markSessionCompleted(moduleId, tab);
        });
      });
    }
  }

  // Abas sem sinal próprio de conclusão (lesson/vocabulary/grammar não têm
  // pergunta para responder) ganham um botão explícito — não marcamos a
  // sessão como concluída só por a aba ter sido aberta.
  var SESSION_SIMPLE_TABS = { lesson: true, vocabulary: true, grammar: true };

  function sessionCompleteButtonHtml(moduleId, tab) {
    var done = Storage.isSessionCompleted(moduleId, tab);
    return (
      '<div class="session-complete-row">' +
        '<button type="button" class="btn ' + (done ? 'btn-secondary is-done' : 'btn-primary') + '" id="session-complete-btn" aria-pressed="' + done + '">' +
          (done ? Icon('check', { size: 15 }) + ' Sessão concluída' : 'Marcar sessão como concluída') +
        '</button>' +
      '</div>'
    );
  }

  function render(container, levelId, moduleId, tab) {
    var level = APP_DATA.getLevel(levelId);
    var module = APP_DATA.getModule(levelId, moduleId);
    if (!level || !module) { Views.home(container); return; }
    if (TABS.every(function (t) { return t.key !== tab; })) tab = 'lesson';

    var contentHtml;
    if (tab === 'lesson') contentHtml = renderLesson(module);
    else if (tab === 'vocabulary') contentHtml = renderVocabulary(module);
    else if (tab === 'grammar') contentHtml = renderGrammar(module);
    else if (tab === 'listening') contentHtml = renderListening(module);
    else if (tab === 'reading') contentHtml = renderReading(module);
    else if (tab === 'writing') contentHtml = Views.writing.render(module, moduleId);
    else if (tab === 'speaking') contentHtml = renderSpeaking(module);
    else contentHtml = '<div id="exercises-root" class="tab-content"></div>';

    if (SESSION_SIMPLE_TABS[tab]) contentHtml += sessionCompleteButtonHtml(moduleId, tab);

    container.innerHTML =
      '<section class="module-page" data-module-id="' + moduleId + '" style="--level-color:' + level.color + '">' +
        '<a class="back-link" href="#/level/' + levelId + '">' + Icon('chevronLeft', { size: 16 }) + ' ' + level.code + ' — ' + level.name + '</a>' +
        '<h1>' + module.title + '</h1>' +
        '<p class="muted">' + module.subtitle + '</p>' +
        (module.objective ? '<p class="module-objective">' + Icon('flag', { size: 14 }) + ' ' + module.objective + '</p>' : '') +
        sessionProgressHtml(moduleId, tab) +
        tabNav(levelId, moduleId, tab) +
        contentHtml +
        '<div class="module-footer-actions">' +
          '<a class="btn btn-primary" href="#/level/' + levelId + '/module/' + moduleId + '/quiz">' + Icon('trophy', { size: 16 }) + ' Fazer quiz do módulo</a>' +
        '</div>' +
      '</section>';

    if (tab === 'exercises') {
      Views.exercises.renderAll(document.getElementById('exercises-root'), module.exercises, moduleId);
    }
    if (tab === 'listening') mountListeningPlayers(container, module);
    if (tab === 'reading') mountReadingPlayers(container, module);
    if (tab === 'writing') Views.writing.bind(container, module, moduleId);
    if (tab === 'speaking') mountSpeakingWidgets(container, module, moduleId);
    if (SESSION_SIMPLE_TABS[tab]) {
      var sessionBtn = document.getElementById('session-complete-btn');
      if (sessionBtn) {
        sessionBtn.addEventListener('click', function () {
          Storage.markSessionCompleted(moduleId, tab);
          sessionBtn.innerHTML = Icon('check', { size: 15 }) + ' Sessão concluída';
          sessionBtn.classList.remove('btn-primary');
          sessionBtn.classList.add('btn-secondary', 'is-done');
          sessionBtn.setAttribute('aria-pressed', 'true');
        });
      }
    }

    bindTabExtras(container, tab, moduleId);
  }

  function renderQuiz(container, levelId, moduleId) {
    var level = APP_DATA.getLevel(levelId);
    var module = APP_DATA.getModule(levelId, moduleId);
    if (!level || !module) { Views.home(container); return; }
    var modules = APP_DATA.getModules(levelId);
    var idx = modules.findIndex(function (m) { return m.id === moduleId; });
    var next = modules[idx + 1];
    var nextHash, nextLabel;
    if (next) {
      nextHash = '/level/' + levelId + '/module/' + next.id;
      nextLabel = 'Próximo módulo →';
    } else {
      nextHash = '/level/' + levelId;
      nextLabel = 'Ver prova final do nível';
    }

    Views.quiz.render(container, {
      title: 'Quiz — ' + module.title,
      subtitle: 'Acerte pelo menos ' + Math.round(APP_DATA.PASS_THRESHOLD * 100) + '% para concluir o módulo.',
      questions: module.quiz,
      refId: moduleId,
      type: 'module',
      backHash: '/level/' + levelId + '/module/' + moduleId + '/exercises',
      backLabel: 'Voltar ao módulo',
      nextHash: nextHash,
      nextLabel: nextLabel,
      onComplete: function (score, total) {
        return Storage.completeModule(levelId, moduleId, score, total);
      }
    });
  }

  return { render: render, renderQuiz: renderQuiz };
})();

window.Views = Views;
