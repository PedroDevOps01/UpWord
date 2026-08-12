var Views = window.Views || {};

Views.flashcards = function (container, levelId) {
  var levels = levelId ? [APP_DATA.getLevel(levelId)] : APP_DATA.levels;
  var pool = [];
  levels.forEach(function (lvl) {
    if (!lvl) return;
    APP_DATA.getModules(lvl.id).forEach(function (m) {
      (m.vocabulary || []).forEach(function (v) { pool.push(v); });
    });
  });

  var seen = {};
  pool = pool.filter(function (v) {
    if (seen[v.word]) return false;
    seen[v.word] = true;
    return true;
  });

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  var due = shuffle(pool.filter(function (v) { return Storage.isCardDue(v.word); }));
  var totalDue = due.length;
  var index = 0;
  var revealed = false;

  var levelLabel = levelId ? (APP_DATA.getLevel(levelId) || {}).code + ' — ' + (APP_DATA.getLevel(levelId) || {}).name : 'Todos os níveis';
  var backHash = levelId ? '/level/' + levelId : '/';

  function renderEmpty(message) {
    container.innerHTML =
      '<section class="flashcards-page">' +
        '<a class="back-link" href="#' + backHash + '">' + Icon('chevronLeft', { size: 16 }) + ' Voltar</a>' +
        '<h1>' + Icon('sparkle', { size: 22 }) + ' Flashcards — ' + levelLabel + '</h1>' +
        '<div class="empty-state"><p>' + message + '</p></div>' +
      '</section>';
  }

  if (pool.length === 0) {
    renderEmpty('Ainda não há vocabulário cadastrado aqui. Explore um módulo primeiro!');
    return;
  }
  if (due.length === 0) {
    renderEmpty('🎉 Nenhum cartão pendente de revisão agora! Volte mais tarde — a repetição espaçada ajuda a memorizar melhor.');
    return;
  }

  function renderCard() {
    if (index >= due.length) {
      renderEmpty('🎉 Você revisou todos os ' + totalDue + ' cartões pendentes! Volte mais tarde para a próxima rodada.');
      return;
    }
    var card = due[index];
    revealed = false;
    container.innerHTML =
      '<section class="flashcards-page">' +
        '<a class="back-link" href="#' + backHash + '">' + Icon('chevronLeft', { size: 16 }) + ' Voltar</a>' +
        '<h1>' + Icon('sparkle', { size: 22 }) + ' Flashcards — ' + levelLabel + '</h1>' +
        '<p class="muted">Cartão ' + (index + 1) + ' de ' + totalDue + '</p>' +
        '<div class="flashcard" id="flashcard">' +
          '<div class="flashcard-front">' +
            '<div class="flashcard-word">' + card.word + '</div>' +
            '<div class="vocab-phonetic">' + (card.phonetic || '') + '</div>' +
            '<button type="button" class="btn-accent" id="fc-play">' + Icon('sound', { size: 15 }) + ' Ouvir</button>' +
          '</div>' +
          '<div class="flashcard-back" id="fc-back" hidden>' +
            '<div class="flashcard-translation">' + card.translation + '</div>' +
            '<div class="vocab-example">"' + card.example + '" <span class="muted">— ' + card.exampleTranslation + '</span></div>' +
          '</div>' +
        '</div>' +
        '<div class="flashcard-actions" id="fc-actions">' +
          '<button type="button" class="btn btn-primary" id="fc-reveal">Mostrar tradução</button>' +
        '</div>' +
      '</section>';

    document.getElementById('fc-play').addEventListener('click', function () {
      Speech.speak(card.word, 'american');
    });

    document.getElementById('fc-reveal').addEventListener('click', function () {
      revealed = true;
      document.getElementById('fc-back').hidden = false;
      document.getElementById('fc-actions').innerHTML =
        '<button type="button" class="btn btn-secondary" id="fc-no">😕 Não lembrei</button>' +
        '<button type="button" class="btn btn-primary" id="fc-yes">😀 Lembrei</button>';
      document.getElementById('fc-no').addEventListener('click', function () {
        Storage.reviewFlashcard(card.word, false);
        index++;
        renderCard();
      });
      document.getElementById('fc-yes').addEventListener('click', function () {
        Storage.reviewFlashcard(card.word, true);
        index++;
        renderCard();
      });
    });
  }

  renderCard();
};

window.Views = Views;
