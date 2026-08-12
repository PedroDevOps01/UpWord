var Views = window.Views || {};

Views.exercises = (function () {

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function renderFillBlanks(list, uid) {
    if (!list || !list.length) return '';
    var items = list.map(function (item, i) {
      var id = uid + '-fb-' + i;
      var parts = item.text.split('___');
      var inputHtml = item.options
        ? '<select id="' + id + '" class="ex-input">' +
            '<option value="">— escolha —</option>' +
            item.options.map(function (o) { return '<option value="' + o + '">' + o + '</option>'; }).join('') +
          '</select>'
        : '<input id="' + id + '" class="ex-input" type="text" autocomplete="off">';
      return (
        '<div class="ex-item" data-answer="' + item.answer + '">' +
          '<p>' + (i + 1) + '. ' + parts[0] + inputHtml + (parts[1] || '') + '</p>' +
          '<button type="button" class="btn-check" data-target="' + id + '">Verificar</button>' +
          '<span class="ex-feedback" id="' + id + '-fb"></span>' +
        '</div>'
      );
    }).join('');
    return '<div class="ex-block" data-kind="fillblanks">' + items + '</div>';
  }

  function renderMatching(list, uid) {
    if (!list || !list.length) return '';
    var rightOptions = shuffle(list.map(function (p) { return p.right; }));
    var rows = list.map(function (pair, i) {
      var id = uid + '-match-' + i;
      var opts = rightOptions.map(function (r) { return '<option value="' + r + '">' + r + '</option>'; }).join('');
      return (
        '<div class="ex-match-row" data-answer="' + pair.right + '">' +
          '<span class="ex-match-left">' + pair.left + '</span>' +
          '<select id="' + id + '" class="ex-input">' +
            '<option value="">— escolha —</option>' + opts +
          '</select>' +
          '<span class="ex-feedback" id="' + id + '-fb"></span>' +
        '</div>'
      );
    }).join('');
    return (
      '<div class="ex-block" data-kind="matching" id="matching-' + uid + '">' +
        rows +
        '<button type="button" class="btn-check btn-check-all">Verificar tudo</button>' +
      '</div>'
    );
  }

  function renderOrdering(list, uid) {
    if (!list || !list.length) return '';
    var items = list.map(function (item, i) {
      var words = shuffle(item.words);
      var wid = uid + '-order-' + i;
      var pool = words.map(function (w, wi) {
        return '<button type="button" class="word-chip" data-word="' + w + '" data-wid="' + wid + '">' + w + '</button>';
      }).join('');
      return (
        '<div class="ex-item ex-ordering" data-answer="' + item.answer + '" data-wid="' + wid + '">' +
          '<p>' + (i + 1) + '. Organize as palavras na ordem correta:</p>' +
          '<div class="order-answer-box" id="' + wid + '-answer"></div>' +
          '<div class="order-pool" id="' + wid + '-pool">' + pool + '</div>' +
          '<button type="button" class="btn-secondary-sm" data-reset="' + wid + '">Recomeçar</button>' +
          '<button type="button" class="btn-check" data-target="' + wid + '" data-kind="order">Verificar</button>' +
          '<span class="ex-feedback" id="' + wid + '-fb"></span>' +
        '</div>'
      );
    }).join('');
    return '<div class="ex-block" data-kind="ordering">' + items + '</div>';
  }

  function renderTranslation(list, uid) {
    if (!list || !list.length) return '';
    var items = list.map(function (item, i) {
      var id = uid + '-tr-' + i;
      var label = item.direction === 'pt-en' ? 'Traduza para o inglês' : 'Traduza para o português';
      return (
        '<div class="ex-item" data-answer="' + item.answer + '">' +
          '<p><strong>' + label + ':</strong> "' + item.text + '"</p>' +
          '<input id="' + id + '" class="ex-input" type="text" autocomplete="off">' +
          '<button type="button" class="btn-check" data-target="' + id + '" data-kind="fuzzy">Verificar</button>' +
          '<span class="ex-feedback" id="' + id + '-fb"></span>' +
        '</div>'
      );
    }).join('');
    return '<div class="ex-block" data-kind="translation">' + items + '</div>';
  }

  function renderDictation(list, uid) {
    if (!list || !list.length) return '';
    var items = list.map(function (item, i) {
      var id = uid + '-dict-' + i;
      return (
        '<div class="ex-item" data-answer="' + item.answer + '" data-audio="' + item.audioText + '">' +
          '<p>' + (i + 1) + '. Ouça e escreva o que você ouvir:</p>' +
          '<button type="button" class="btn-play" data-play="' + id + '">🔊 Ouvir</button>' +
          '<input id="' + id + '" class="ex-input" type="text" autocomplete="off" placeholder="Escreva a frase">' +
          '<button type="button" class="btn-check" data-target="' + id + '" data-kind="fuzzy">Verificar</button>' +
          '<span class="ex-feedback" id="' + id + '-fb"></span>' +
        '</div>'
      );
    }).join('');
    return '<div class="ex-block" data-kind="dictation">' + items + '</div>';
  }

  function renderDialogue(list, uid) {
    if (!list || !list.length) return '';
    var blocks = list.map(function (dlg, di) {
      var lines = dlg.lines.map(function (line, li) {
        if (line.speaker === 'user') {
          var id = uid + '-dlg-' + di + '-' + li;
          var opts = line.options.map(function (o, oi) {
            return '<button type="button" class="word-chip dlg-choice" data-target="' + id + '" data-value="' + oi + '">' + o + '</button>';
          }).join('');
          return (
            '<div class="dialogue-line dialogue-user" data-answer="' + line.answer + '" id="' + id + '">' +
              '<p class="dialogue-prompt">🗣 ' + line.prompt + '</p>' +
              '<div class="dialogue-options">' + opts + '</div>' +
              '<span class="ex-feedback" id="' + id + '-fb"></span>' +
            '</div>'
          );
        }
        return (
          '<div class="dialogue-line dialogue-native">' +
            '<span class="dialogue-speaker">' + line.speaker + ':</span> ' +
            '<span>' + line.text + '</span> ' +
            '<button type="button" class="btn-play-inline" data-speak="' + line.text.replace(/"/g, '&quot;') + '">🔊</button>' +
          '</div>'
        );
      }).join('');
      return '<div class="dialogue-block"><h4>' + dlg.title + '</h4>' + lines + '</div>';
    }).join('');
    return '<div class="ex-block" data-kind="dialogue">' + blocks + '</div>';
  }

  function attachHandlers(root) {
    root.querySelectorAll('.btn-check[data-kind="fuzzy"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var input = document.getElementById(btn.getAttribute('data-target'));
        var item = input.closest('.ex-item');
        var answer = item.getAttribute('data-answer');
        var score = Speech.similarity(input.value, answer);
        var fb = document.getElementById(btn.getAttribute('data-target') + '-fb');
        if (score >= 0.85) {
          fb.innerHTML = '<span class="fb-ok">✔ Correto!</span>';
        } else {
          fb.innerHTML = '<span class="fb-bad">✘ Resposta esperada: "' + answer + '"</span>';
        }
      });
    });

    root.querySelectorAll('.btn-check:not([data-kind])').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var el = document.getElementById(btn.getAttribute('data-target'));
        var item = el.closest('.ex-item');
        var answer = item.getAttribute('data-answer');
        var val = el.value.trim();
        var fb = document.getElementById(btn.getAttribute('data-target') + '-fb');
        var ok = val.toLowerCase() === answer.toLowerCase();
        fb.innerHTML = ok ? '<span class="fb-ok">✔ Correto!</span>' : '<span class="fb-bad">✘ Resposta correta: "' + answer + '"</span>';
      });
    });

    root.querySelectorAll('.btn-check-all').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var scopeId = btn.parentElement.id;
        var scope = document.getElementById(scopeId);
        scope.querySelectorAll('.ex-match-row').forEach(function (row) {
          var select = row.querySelector('select');
          var answer = row.getAttribute('data-answer');
          var fb = row.querySelector('.ex-feedback');
          var ok = select.value === answer;
          fb.innerHTML = ok ? '<span class="fb-ok">✔</span>' : '<span class="fb-bad">✘ (' + answer + ')</span>';
        });
      });
    });

    root.querySelectorAll('.word-chip[data-wid]').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var wid = chip.getAttribute('data-wid');
        var answerBox = document.getElementById(wid + '-answer');
        var word = chip.getAttribute('data-word');
        chip.disabled = true;
        chip.classList.add('used');
        var chosen = document.createElement('button');
        chosen.type = 'button';
        chosen.className = 'word-chip chosen';
        chosen.textContent = word;
        chosen.addEventListener('click', function () {
          chosen.remove();
          chip.disabled = false;
          chip.classList.remove('used');
        });
        answerBox.appendChild(chosen);
      });
    });

    root.querySelectorAll('[data-reset]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var wid = btn.getAttribute('data-reset');
        var answerBox = document.getElementById(wid + '-answer');
        var pool = document.getElementById(wid + '-pool');
        answerBox.innerHTML = '';
        pool.querySelectorAll('.word-chip').forEach(function (c) {
          c.disabled = false;
          c.classList.remove('used');
        });
        var fb = document.getElementById(wid + '-fb');
        if (fb) fb.innerHTML = '';
      });
    });

    root.querySelectorAll('.btn-check[data-kind="order"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var wid = btn.getAttribute('data-target');
        var answerBox = document.getElementById(wid + '-answer');
        var built = Array.prototype.map.call(answerBox.querySelectorAll('.word-chip'), function (c) { return c.textContent; }).join(' ');
        var item = btn.closest('.ex-ordering');
        var answer = item.getAttribute('data-answer');
        var fb = document.getElementById(wid + '-fb');
        var ok = built.trim().toLowerCase().replace(/[.!?]/g, '') === answer.trim().toLowerCase().replace(/[.!?]/g, '');
        fb.innerHTML = ok ? '<span class="fb-ok">✔ Correto!</span>' : '<span class="fb-bad">✘ Resposta correta: "' + answer + '"</span>';
      });
    });

    root.querySelectorAll('.btn-play').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.ex-item');
        Speech.speak(item.getAttribute('data-audio'), 'american');
      });
    });

    root.querySelectorAll('.btn-play-inline').forEach(function (btn) {
      btn.addEventListener('click', function () {
        Speech.speak(btn.getAttribute('data-speak'), 'american');
      });
    });

    root.querySelectorAll('.dlg-choice').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-target');
        var line = document.getElementById(id);
        var answer = parseInt(line.getAttribute('data-answer'), 10);
        var chosen = parseInt(btn.getAttribute('data-value'), 10);
        var fb = document.getElementById(id + '-fb');
        line.querySelectorAll('.dlg-choice').forEach(function (b) { b.disabled = true; });
        fb.innerHTML = chosen === answer
          ? '<span class="fb-ok">✔ Ótima resposta!</span>'
          : '<span class="fb-bad">✘ A melhor resposta seria: "' + line.querySelectorAll('.dlg-choice')[answer].textContent + '"</span>';
      });
    });
  }

  function renderAll(container, exercises, uid) {
    if (!exercises) {
      container.innerHTML = '<p class="muted">Nenhum exercício disponível ainda para este módulo.</p>';
      return;
    }
    var html =
      sectionWrap('Complete as lacunas', renderFillBlanks(exercises.fillBlanks, uid)) +
      sectionWrap('Associação de palavras', renderMatching(exercises.matching, uid)) +
      sectionWrap('Organize as frases', renderOrdering(exercises.ordering, uid)) +
      sectionWrap('Tradução', renderTranslation(exercises.translation, uid)) +
      sectionWrap('Ditado (listening)', renderDictation(exercises.dictation, uid)) +
      sectionWrap('Diálogo interativo', renderDialogue(exercises.dialogue, uid));
    container.innerHTML = html || '<p class="muted">Nenhum exercício disponível ainda para este módulo.</p>';
    attachHandlers(container);
  }

  function sectionWrap(title, innerHtml) {
    if (!innerHtml) return '';
    return '<div class="ex-section"><h3>' + title + '</h3>' + innerHtml + '</div>';
  }

  return { renderAll: renderAll };
})();

window.Views = Views;
