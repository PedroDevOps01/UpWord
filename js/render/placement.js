var Views = window.Views || {};

Views.placement = function (container) {
  var quiz = APP_DATA.placementQuiz;

  function formatDate(iso) {
    try { return new Date(iso).toLocaleDateString('pt-BR'); } catch (e) { return ''; }
  }

  function renderHistory() {
    var history = Storage.getPlacementHistory();
    if (!history.length) return '';
    var rows = history.slice().reverse().slice(0, 5).map(function (h) {
      var level = APP_DATA.getLevel(h.levelId);
      return (
        '<li class="placement-history-item">' +
          '<span>' + formatDate(h.date) + '</span>' +
          '<span>' + h.correctCount + '/' + h.totalCount + '</span>' +
          '<span>' + (level ? level.code : h.levelId) + '</span>' +
        '</li>'
      );
    }).join('');
    return (
      '<div class="placement-history">' +
        '<h2>Suas tentativas anteriores</h2>' +
        '<ul class="placement-history-list">' + rows + '</ul>' +
      '</div>'
    );
  }

  function renderQuestions() {
    return quiz.questions.map(function (q, i) {
      var opts = q.options.map(function (opt, oi) {
        return '<label class="option-row"><input type="radio" name="q' + i + '" value="' + oi + '"> <span>' + opt + '</span></label>';
      }).join('');
      return (
        '<div class="quiz-question" data-index="' + i + '">' +
          '<p class="quiz-q-text">' + (i + 1) + '. ' + q.q + '</p>' +
          '<div class="quiz-options">' + opts + '</div>' +
          '<div class="quiz-feedback" id="placement-feedback-' + i + '" aria-live="polite"></div>' +
        '</div>'
      );
    }).join('');
  }

  container.innerHTML =
    '<section class="placement-page">' +
      '<h1>' + quiz.title + '</h1>' +
      '<p class="muted">' + quiz.description + '</p>' +
      renderHistory() +
      '<form id="placement-form">' +
        renderQuestions() +
        '<div class="quiz-actions"><button type="submit" class="btn btn-primary">Ver meu resultado</button></div>' +
      '</form>' +
      '<div id="placement-result" aria-live="polite"></div>' +
    '</section>';

  document.getElementById('placement-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var correct = 0;
    var container2 = document.getElementById('placement-form');
    var unanswered = 0;
    quiz.questions.forEach(function (q, i) {
      var selected = document.querySelector('input[name="q' + i + '"]:checked');
      if (!selected) unanswered++;
      var ok = !!selected && parseInt(selected.value, 10) === q.answer;
      if (ok) correct++;
      var qEl = container2.querySelector('.quiz-question[data-index="' + i + '"]');
      qEl.classList.add(ok ? 'is-correct' : 'is-incorrect');
      var fb = document.getElementById('placement-feedback-' + i);
      fb.innerHTML = ok
        ? '<span class="fb-ok">' + Icon('check', { size: 16 }) + ' Correto!</span>'
        : '<span class="fb-bad">' + Icon('close', { size: 16 }) + ' Resposta certa: ' + q.options[q.answer] + '</span>';
    });
    container2.querySelectorAll('input').forEach(function (inp) { inp.disabled = true; });
    document.querySelector('#placement-form button[type="submit"]').disabled = true;

    var levelId = quiz.recommend(correct);
    var level = APP_DATA.getLevel(levelId);
    Storage.setPlacementResult(levelId, correct, quiz.questions.length);

    var resultEl = document.getElementById('placement-result');
    resultEl.innerHTML =
      '<div class="result-panel is-pass">' +
        Icon('trophy', { size: 32 }) +
        '<div class="result-score">' + correct + '/' + quiz.questions.length + '</div>' +
        '<p>Seu degrau de partida sugerido: <strong>' + level.code + ' — ' + level.name + '</strong>.</p>' +
        '<p class="muted">Isto é uma estimativa baseada em ' + quiz.questions.length + ' perguntas — você pode escolher qualquer nível na trilha e pode refazer o teste quantas vezes quiser.' +
          (unanswered > 0 ? ' (' + unanswered + ' pergunta(s) ficaram sem resposta.)' : '') +
        '</p>' +
        '<div class="result-actions">' +
          '<a class="btn btn-primary" href="#/level/' + level.id + '">Subir para o nível ' + level.code + '</a>' +
          '<button type="button" class="btn btn-secondary" id="placement-retry-btn">Refazer nivelamento</button>' +
        '</div>' +
      '</div>';
    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    resultEl.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });

    document.getElementById('placement-retry-btn').addEventListener('click', function () {
      Views.placement(container);
    });
  });
};

window.Views = Views;
