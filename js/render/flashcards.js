var Views = window.Views || {};

// Deck de flashcards com filtro por nível/eletivos, dedupe por id estável
// (preserva repetições pedagógicas entre módulos em vez de escondê-las),
// contexto de módulo + frase de exemplo no verso, e atalhos de teclado.
Views.flashcards = function (container, initialLevelId) {
  var state = {
    filterLevelId: initialLevelId || 'all',
    includeElectives: false
  };

  function buildPool() {
    var levels;
    if (state.filterLevelId === 'all') {
      levels = APP_DATA.levels.slice();
      if (state.includeElectives) levels = levels.concat(APP_DATA.electives || []);
    } else {
      var lvl = APP_DATA.getLevel(state.filterLevelId);
      levels = lvl ? [lvl] : [];
    }
    var pool = [];
    var seenIds = {};
    levels.forEach(function (lvl) {
      APP_DATA.getModules(lvl.id).forEach(function (m) {
        (m.vocabulary || []).forEach(function (v) {
          var cardId = v.id || v.word;
          if (seenIds[cardId]) return;
          seenIds[cardId] = true;
          pool.push({
            id: cardId,
            word: v.word,
            partOfSpeech: v.partOfSpeech,
            phonetic: v.phonetic,
            translation: v.translation,
            example: v.example,
            exampleTranslation: v.exampleTranslation,
            collocations: v.collocations,
            synonyms: v.synonyms,
            levelId: lvl.id,
            levelCode: lvl.code,
            moduleTitle: m.title
          });
        });
      });
    });
    return pool;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function priority(card) {
    var fc = Storage.getFlashcard(card.id);
    var missRatio = fc.seen > 0 ? 1 - (fc.correct / fc.seen) : 0.5;
    return fc.box * 10 - missRatio * 5;
  }

  function filterBarHtml() {
    var levelOptions = APP_DATA.levels.map(function (l) {
      return '<option value="' + l.id + '"' + (state.filterLevelId === l.id ? ' selected' : '') + '>' + l.code + ' — ' + l.name + '</option>';
    }).join('');
    var electiveOptions = APP_DATA.electives.map(function (l) {
      return '<option value="' + l.id + '"' + (state.filterLevelId === l.id ? ' selected' : '') + '>' + l.name + ' (extra)</option>';
    }).join('');
    return (
      '<div class="flashcards-filterbar">' +
        '<label class="flashcards-filter-label">Filtrar deck' +
          '<select id="fc-level-filter" aria-label="Filtrar flashcards por nível">' +
            '<option value="all"' + (state.filterLevelId === 'all' ? ' selected' : '') + '>Todos os níveis</option>' +
            levelOptions +
            electiveOptions +
          '</select>' +
        '</label>' +
        '<label class="flashcards-elective-toggle"' + (state.filterLevelId !== 'all' ? ' title="Disponível só quando o filtro é \'Todos os níveis\'"' : '') + '>' +
          '<input type="checkbox" id="fc-include-electives" aria-label="Incluir trilhas extras (viagem, entrevista, business) no deck"' +
            (state.includeElectives ? ' checked' : '') +
            (state.filterLevelId !== 'all' ? ' disabled aria-disabled="true"' : '') +
          '> Incluir trilhas extras' +
          (state.filterLevelId !== 'all' ? '<span class="visually-hidden"> (desativado — só se aplica com o filtro "Todos os níveis")</span>' : '') +
        '</label>' +
      '</div>'
    );
  }

  function findNextReviewDate(pool) {
    var soonest = null;
    pool.forEach(function (card) {
      var fc = Storage.getFlashcard(card.id);
      if (fc.nextReview) {
        var t = new Date(fc.nextReview).getTime();
        if (soonest === null || t < soonest) soonest = t;
      }
    });
    return soonest;
  }

  function backHashFor() {
    if (state.filterLevelId !== 'all') return '/level/' + state.filterLevelId;
    return '/';
  }

  function bindFilterBar(root) {
    var levelSelect = root.querySelector('#fc-level-filter');
    var electivesCheckbox = root.querySelector('#fc-include-electives');
    if (levelSelect) {
      levelSelect.addEventListener('change', function () {
        state.filterLevelId = levelSelect.value;
        renderSession();
      });
    }
    if (electivesCheckbox) {
      electivesCheckbox.addEventListener('change', function () {
        state.includeElectives = electivesCheckbox.checked;
        renderSession();
      });
    }
  }

  function renderEmpty(pool, message) {
    clearKeydownHandler();
    container.innerHTML =
      '<section class="flashcards-page">' +
        '<a class="back-link" href="#' + backHashFor() + '">' + Icon('chevronLeft', { size: 16 }) + ' Voltar</a>' +
        '<h1>' + Icon('sparkle', { size: 22 }) + ' Flashcards</h1>' +
        filterBarHtml() +
        '<p class="muted flashcards-deck-stats">' + pool.length + ' cartão(ões) no deck.</p>' +
        '<div class="empty-state"><p>' + message + '</p></div>' +
      '</section>';
    bindFilterBar(container);
  }

  var index = 0;
  var currentKeydownHandler = null;

  function clearKeydownHandler() {
    if (currentKeydownHandler) {
      document.removeEventListener('keydown', currentKeydownHandler);
      currentKeydownHandler = null;
    }
  }

  function renderSession() {
    index = 0;
    var pool = buildPool();

    if (pool.length === 0) {
      renderEmpty(pool, 'Ainda não há vocabulário cadastrado com este filtro. Tente outro nível ou inclua as trilhas extras.');
      return;
    }

    var due = shuffle(pool.filter(function (v) { return Storage.isCardDue(v.id); }));
    due.sort(function (a, b) { return priority(a) - priority(b); });

    if (due.length === 0) {
      var nextReview = findNextReviewDate(pool);
      var nextMsg = nextReview
        ? ' Próxima revisão prevista para ' + new Date(nextReview).toLocaleDateString('pt-BR') + '.'
        : '';
      renderEmpty(pool, '🎉 Nenhum cartão pendente de revisão agora com este filtro!' + nextMsg + ' A repetição espaçada ajuda a memorizar melhor.');
      return;
    }

    renderCard(pool, due);
  }

  function renderCard(pool, due) {
    clearKeydownHandler();
    if (index >= due.length) {
      renderEmpty(pool, '🎉 Você revisou todos os ' + due.length + ' cartões pendentes deste filtro! Volte mais tarde para a próxima rodada.');
      return;
    }
    var card = due[index];
    container.innerHTML =
      '<section class="flashcards-page">' +
        '<a class="back-link" href="#' + backHashFor() + '">' + Icon('chevronLeft', { size: 16 }) + ' Voltar</a>' +
        '<h1>' + Icon('sparkle', { size: 22 }) + ' Flashcards</h1>' +
        filterBarHtml() +
        '<p class="muted flashcards-deck-stats">' + pool.length + ' cartão(ões) no deck · ' + due.length + ' pendente(s) agora · cartão ' + (index + 1) + ' de ' + due.length + '</p>' +
        '<div class="flashcard" id="flashcard">' +
          '<div class="flashcard-front">' +
            '<div class="flashcard-word">' + card.word + '</div>' +
            '<div class="vocab-phonetic">' + (card.phonetic || '') + '</div>' +
            '<button type="button" class="btn-accent" id="fc-play" aria-label="Ouvir a palavra">' + Icon('sound', { size: 15 }) + ' Ouvir</button>' +
          '</div>' +
          '<div class="flashcard-back" id="fc-back" hidden>' +
            '<div class="flashcard-translation">' + card.translation + (card.partOfSpeech ? ' <span class="vocab-pos">' + card.partOfSpeech + '</span>' : '') + '</div>' +
            '<div class="vocab-example">"' + card.example + '" <span class="muted">— ' + card.exampleTranslation + '</span></div>' +
            (card.collocations && card.collocations.length ? '<div class="vocab-extra-line"><strong>Collocations:</strong> ' + card.collocations.join(', ') + '</div>' : '') +
            (card.synonyms && card.synonyms.length ? '<div class="vocab-extra-line"><strong>Sinônimos:</strong> ' + card.synonyms.join(', ') + '</div>' : '') +
            '<div class="flashcard-context muted">Visto em ' + card.levelCode + ' — ' + card.moduleTitle + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="flashcard-actions" id="fc-actions">' +
          '<button type="button" class="btn btn-primary" id="fc-reveal">Mostrar tradução</button>' +
        '</div>' +
        '<p class="muted flashcards-shortcuts">Atalhos: Espaço/Enter revela · ← não lembrei · → lembrei</p>' +
      '</section>';

    bindFilterBar(container);

    document.getElementById('fc-play').addEventListener('click', function () {
      Speech.speak(card.word, 'american');
    });

    function reveal() {
      document.getElementById('fc-back').hidden = false;
      document.getElementById('fc-actions').innerHTML =
        '<button type="button" class="btn btn-secondary" id="fc-no">😕 Não lembrei</button>' +
        '<button type="button" class="btn btn-primary" id="fc-yes">😀 Lembrei</button>';
      document.getElementById('fc-no').addEventListener('click', function () {
        Storage.reviewFlashcard(card.id, false);
        index++;
        renderCard(pool, due);
      });
      document.getElementById('fc-yes').addEventListener('click', function () {
        Storage.reviewFlashcard(card.id, true);
        index++;
        renderCard(pool, due);
      });
      document.getElementById('fc-yes').focus({ preventScroll: true });
    }

    document.getElementById('fc-reveal').addEventListener('click', reveal);

    function onKeydown(e) {
      var revealed = !document.getElementById('fc-back').hidden;
      if (!revealed && (e.code === 'Space' || e.code === 'Enter')) {
        e.preventDefault();
        reveal();
      } else if (revealed && (e.code === 'ArrowLeft' || e.key === '1')) {
        var noBtn = document.getElementById('fc-no');
        if (noBtn) noBtn.click();
      } else if (revealed && (e.code === 'ArrowRight' || e.key === '2')) {
        var yesBtn = document.getElementById('fc-yes');
        if (yesBtn) yesBtn.click();
      }
    }
    currentKeydownHandler = onKeydown;
    document.addEventListener('keydown', onKeydown);
  }

  renderSession();
};

window.Views = Views;
