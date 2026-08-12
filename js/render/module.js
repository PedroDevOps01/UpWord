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

  function tabNav(levelId, moduleId, activeTab) {
    return '<nav class="module-tabs">' + TABS.map(function (t, i) {
      var active = t.key === activeTab ? ' is-active' : '';
      var tick = '<span class="module-tab-tick" style="--i:' + i + '"></span>';
      return '<a class="module-tab' + active + '" href="#/level/' + levelId + '/module/' + moduleId + '/' + t.key + '">' + tick + t.label + '</a>';
    }).join('') + '</nav>';
  }

  function accentButtons(text) {
    var esc = text.replace(/'/g, "\\'");
    return (
      '<span class="accent-buttons">' +
        '<button type="button" class="btn-accent" data-speak="' + text.replace(/"/g, '&quot;') + '" data-accent="american" title="Sotaque americano">🇺🇸</button>' +
        '<button type="button" class="btn-accent" data-speak="' + text.replace(/"/g, '&quot;') + '" data-accent="british" title="Sotaque britânico">🇬🇧</button>' +
        '<button type="button" class="btn-accent" data-speak="' + text.replace(/"/g, '&quot;') + '" data-accent="australian" title="Sotaque australiano">🇦🇺</button>' +
      '</span>'
    );
  }

  function bindAccentButtons(root) {
    root.querySelectorAll('.btn-accent').forEach(function (btn) {
      btn.addEventListener('click', function () {
        Speech.speak(btn.getAttribute('data-speak'), btn.getAttribute('data-accent'));
      });
    });
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
          (examples ? '<ul class="example-list">' + examples + '</ul>' : '') +
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

  function renderVocabulary(module) {
    var cards = module.vocabulary.map(function (v) {
      return (
        '<div class="vocab-card">' +
          '<div class="vocab-word">' + v.word + ' <span class="vocab-phonetic">' + v.phonetic + '</span> ' + accentButtons(v.word) + '</div>' +
          '<div class="vocab-translation">' + v.translation + '</div>' +
          '<div class="vocab-example">"' + v.example + '" <span class="muted">— ' + v.exampleTranslation + '</span></div>' +
        '</div>'
      );
    }).join('');
    return '<div class="tab-content"><div class="vocab-grid">' + cards + '</div></div>';
  }

  function renderGrammar(module) {
    var g = module.grammar;
    var tableHtml = '';
    if (g.table) {
      tableHtml =
        '<table class="grammar-table"><thead><tr>' +
          g.table.headers.map(function (h) { return '<th>' + h + '</th>'; }).join('') +
        '</tr></thead><tbody>' +
        g.table.rows.map(function (row) {
          return '<tr>' + row.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
        }).join('') +
        '</tbody></table>';
    }
    var correct = (g.correct || []).map(function (s) { return '<li class="fb-ok">✔ ' + s + '</li>'; }).join('');
    var incorrect = (g.incorrect || []).map(function (s) { return '<li class="fb-bad">✘ ' + s + '</li>'; }).join('');
    return (
      '<div class="tab-content">' +
        '<h3>' + g.title + '</h3>' +
        '<p>' + g.explanation + '</p>' +
        tableHtml +
        '<div class="grammar-compare">' +
          '<div><h4>Certo</h4><ul class="plain-list">' + correct + '</ul></div>' +
          '<div><h4>Errado</h4><ul class="plain-list">' + incorrect + '</ul></div>' +
        '</div>' +
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
          '<button type="button" class="btn btn-secondary btn-play-audio" data-text="' + item.transcript.replace(/"/g, '&quot;') + '" data-accent="' + item.accent + '">▶ Ouvir</button>' +
          '<details class="transcript-toggle"><summary>Ver transcrição</summary><p>' + item.transcript + '</p></details>' +
          questions +
        '</div>'
      );
    }).join('');
    return '<div class="tab-content">' + items + '</div>';
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
          '<div class="reading-text">' + item.text + '</div>' +
          questions +
        '</div>'
      );
    }).join('');
    return '<div class="tab-content">' + items + '</div>';
  }

  function renderWriting(module, moduleId) {
    var items = module.writing.map(function (item, i) {
      var draftKey = 'draft:' + moduleId + ':' + i;
      var saved = '';
      try { saved = localStorage.getItem(draftKey) || ''; } catch (e) {}
      return (
        '<div class="writing-card">' +
          '<p><strong>Exercício ' + (i + 1) + ':</strong> ' + item.prompt + '</p>' +
          (item.minWords ? '<p class="muted">Mínimo sugerido: ' + item.minWords + ' palavras</p>' : '') +
          '<textarea class="writing-area" rows="6" data-draft-key="' + draftKey + '" placeholder="Escreva sua resposta em inglês...">' + saved + '</textarea>' +
          '<div class="word-count muted" data-count-for="' + draftKey + '"></div>' +
          (item.modelAnswer ? '<details class="transcript-toggle"><summary>Ver um modelo de resposta</summary><p>' + item.modelAnswer + '</p></details>' : '') +
        '</div>'
      );
    }).join('');
    return '<div class="tab-content">' + items + '</div>';
  }

  function renderSpeaking(module) {
    var recSupported = Speech.isRecognitionSupported();
    var items = module.speaking.map(function (item, i) {
      var id = 'speak-' + i;
      return (
        '<div class="speaking-card">' +
          '<p class="speaking-phrase">"' + item.phrase + '"</p>' +
          '<p class="muted">💡 ' + item.tip + '</p>' +
          '<div class="speaking-actions">' +
            accentButtons(item.phrase) +
            (recSupported
              ? '<button type="button" class="btn btn-secondary btn-record" data-phrase="' + item.phrase.replace(/"/g, '&quot;') + '" data-id="' + id + '">🎙 Praticar pronúncia</button>'
              : '') +
          '</div>' +
          '<span class="ex-feedback" id="' + id + '-fb"></span>' +
        '</div>'
      );
    }).join('');
    var note = recSupported ? '' : '<p class="muted">Seu navegador não suporta reconhecimento de voz. Ouça o áudio e repita a frase em voz alta.</p>';
    return '<div class="tab-content">' + note + items + '</div>';
  }

  function bindTabExtras(root, tab) {
    bindAccentButtons(root);

    if (tab === 'listening') {
      root.querySelectorAll('.btn-play-audio').forEach(function (btn) {
        btn.addEventListener('click', function () {
          Speech.speak(btn.getAttribute('data-text'), btn.getAttribute('data-accent'));
        });
      });
    }

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
        });
      });
    }

    if (tab === 'writing') {
      root.querySelectorAll('.writing-area').forEach(function (area) {
        function updateCount() {
          var words = area.value.trim().split(/\s+/).filter(Boolean).length;
          var counter = root.querySelector('[data-count-for="' + area.getAttribute('data-draft-key') + '"]');
          if (counter) counter.textContent = words + ' palavras';
        }
        updateCount();
        area.addEventListener('input', function () {
          updateCount();
          try { localStorage.setItem(area.getAttribute('data-draft-key'), area.value); } catch (e) {}
        });
      });
    }

    if (tab === 'speaking') {
      root.querySelectorAll('.btn-record').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var phrase = btn.getAttribute('data-phrase');
          var fb = document.getElementById(btn.getAttribute('data-id') + '-fb');
          fb.innerHTML = '<span class="muted">🎙 Ouvindo...</span>';
          Speech.listen(phrase, {
            onResult: function (res) {
              if (res.score >= 0.8) {
                fb.innerHTML = '<span class="fb-ok">✔ Ótima pronúncia! ("' + res.transcript + '")</span>';
              } else {
                fb.innerHTML = '<span class="fb-bad">Quase lá. Você disse: "' + res.transcript + '". Tente novamente.</span>';
              }
            },
            onError: function () {
              fb.innerHTML = '<span class="fb-bad">Não foi possível captar o áudio. Tente novamente.</span>';
            },
            onUnsupported: function () {
              fb.innerHTML = '<span class="muted">Reconhecimento de voz não suportado.</span>';
            }
          });
        });
      });
    }
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
    else if (tab === 'writing') contentHtml = renderWriting(module, moduleId);
    else if (tab === 'speaking') contentHtml = renderSpeaking(module);
    else contentHtml = '<div id="exercises-root" class="tab-content"></div>';

    container.innerHTML =
      '<section class="module-page" style="--level-color:' + level.color + '">' +
        '<a class="back-link" href="#/level/' + levelId + '">' + Icon('chevronLeft', { size: 16 }) + ' ' + level.code + ' — ' + level.name + '</a>' +
        '<h1>' + module.title + '</h1>' +
        '<p class="muted">' + module.subtitle + '</p>' +
        tabNav(levelId, moduleId, tab) +
        contentHtml +
        '<div class="module-footer-actions">' +
          '<a class="btn btn-primary" href="#/level/' + levelId + '/module/' + moduleId + '/quiz">' + Icon('trophy', { size: 16 }) + ' Fazer quiz do módulo</a>' +
        '</div>' +
      '</section>';

    if (tab === 'exercises') {
      Views.exercises.renderAll(document.getElementById('exercises-root'), module.exercises, moduleId);
    }

    bindTabExtras(container, tab);
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
      subtitle: 'Acerte pelo menos 60% para concluir o módulo.',
      questions: module.quiz,
      refId: moduleId,
      type: 'module',
      backHash: '/level/' + levelId + '/module/' + moduleId + '/exercises',
      backLabel: 'Voltar ao módulo',
      nextHash: nextHash,
      nextLabel: nextLabel,
      onComplete: function (score, total) {
        return Storage.completeModule(moduleId, score, total);
      }
    });
  }

  return { render: render, renderQuiz: renderQuiz };
})();

window.Views = Views;
