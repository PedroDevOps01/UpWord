var Views = window.Views || {};

Views.quiz = (function () {

  function optionsTemplate(q) {
    if (q.type === 'tf') {
      return (
        '<div class="quiz-options">' +
          '<label class="option-row"><input type="radio" name="qopt" value="true"> <span>Verdadeiro</span></label>' +
          '<label class="option-row"><input type="radio" name="qopt" value="false"> <span>Falso</span></label>' +
        '</div>'
      );
    }
    if (q.type === 'short') {
      return '<input type="text" class="quiz-short-input" id="quiz-short-input" autocomplete="off" placeholder="Digite sua resposta em inglês" aria-label="Digite sua resposta em inglês">';
    }
    var opts = q.options.map(function (opt, oi) {
      return '<label class="option-row"><input type="radio" name="qopt" value="' + oi + '"> <span>' + opt + '</span></label>';
    }).join('');
    return '<div class="quiz-options">' + opts + '</div>';
  }

  function readAnswer(q) {
    if (q.type === 'short') {
      var input = document.getElementById('quiz-short-input');
      return input ? input.value.trim() : '';
    }
    var sel = document.querySelector('input[name="qopt"]:checked');
    return sel ? sel.value : null;
  }

  function isCorrect(q, raw) {
    if (raw === null || raw === undefined || raw === '') return false;
    if (q.type === 'tf') return (raw === 'true') === !!q.answer;
    if (q.type === 'short') {
      var accepted = Array.isArray(q.answer) ? q.answer : [q.answer];
      return accepted.some(function (a) { return a.trim().toLowerCase() === raw.trim().toLowerCase(); });
    }
    return parseInt(raw, 10) === q.answer;
  }

  function correctAnswerLabel(q) {
    if (q.type === 'tf') return q.answer ? 'Verdadeiro' : 'Falso';
    if (q.type === 'short') return Array.isArray(q.answer) ? q.answer[0] : q.answer;
    return q.options[q.answer];
  }

  function yourAnswerLabel(q, raw) {
    if (raw === null || raw === undefined || raw === '') return 'Sem resposta';
    if (q.type === 'tf') return raw === 'true' ? 'Verdadeiro' : 'Falso';
    if (q.type === 'short') return raw;
    var opt = q.options[parseInt(raw, 10)];
    return opt || 'Sem resposta';
  }

  // Para quizzes de módulo, sugere revisar a gramática do próprio módulo;
  // para prova final/nivelamento, volta para a tela de origem.
  function reviewHash(opts) {
    if (opts.type === 'module') return opts.backHash.replace(/\/exercises$/, '/grammar');
    return opts.backHash;
  }

  function render(container, opts) {
    var questions = opts.questions;
    var n = questions.length;
    var startTime = Date.now();
    var state = { index: 0, score: 0, results: new Array(n).fill(null), rawAnswers: new Array(n).fill(null) };

    function progressHtml() {
      var dots = questions.map(function (q, i) {
        var cls = 'quiz-progress-step';
        if (state.results[i] === true) cls += ' is-correct';
        else if (state.results[i] === false) cls += ' is-incorrect';
        else if (i === state.index) cls += ' is-current';
        return '<div class="' + cls + '" style="--i:' + i + '"></div>';
      }).join('');
      return '<div class="quiz-progress">' + dots + '</div>' +
        '<div class="quiz-progress-label">Pergunta ' + (state.index + 1) + ' de ' + n + '</div>';
    }

    function updateProgress() {
      var wrap = document.getElementById('quiz-progress-wrap');
      if (wrap) wrap.innerHTML = progressHtml();
    }

    function renderQuestionScreen() {
      var q = questions[state.index];
      container.innerHTML =
        '<section class="quiz-shell">' +
          '<a class="back-link" href="#' + opts.backHash + '">' + Icon('chevronLeft', { size: 16 }) + ' ' + (opts.backLabel || 'Voltar') + '</a>' +
          '<h1 style="text-align:center;">' + opts.title + '</h1>' +
          (opts.subtitle ? '<p class="muted" style="text-align:center;">' + opts.subtitle + '</p>' : '') +
          '<div id="quiz-progress-wrap">' + progressHtml() + '</div>' +
          '<div class="quiz-card">' +
            '<p class="quiz-q-text">' + q.q + '</p>' +
            optionsTemplate(q) +
            '<div id="quiz-feedback-slot" aria-live="polite"></div>' +
            '<div class="quiz-actions"><button type="button" class="btn btn-primary" id="quiz-check-btn">Verificar</button></div>' +
          '</div>' +
        '</section>';

      document.getElementById('quiz-check-btn').addEventListener('click', onCheck);
      var firstInput = container.querySelector('input, #quiz-short-input');
      if (firstInput) firstInput.focus({ preventScroll: true });
    }

    function onCheck() {
      var q = questions[state.index];
      var raw = readAnswer(q);
      var ok = isCorrect(q, raw);
      state.results[state.index] = ok;
      state.rawAnswers[state.index] = raw;
      if (ok) state.score++;

      container.querySelectorAll('input').forEach(function (inp) { inp.disabled = true; });
      if (q.type !== 'short') {
        container.querySelectorAll('.option-row').forEach(function (row) {
          var input = row.querySelector('input');
          var isThisCorrect = q.type === 'tf' ? (input.value === String(!!q.answer)) : (parseInt(input.value, 10) === q.answer);
          if (input.checked) row.classList.add('is-picked');
          if (isThisCorrect) row.classList.add('is-right-answer');
          else if (input.checked) row.classList.add('is-wrong-answer');
        });
      }

      var slot = document.getElementById('quiz-feedback-slot');
      slot.innerHTML =
        '<div class="quiz-feedback-banner ' + (ok ? 'is-ok' : 'is-bad') + '">' +
          Icon(ok ? 'check' : 'close', { size: 20 }) +
          '<span>' +
            '<span class="fb-title">' + (ok ? 'Certinho!' : 'Resposta certa: ' + correctAnswerLabel(q)) + '</span>' +
            (q.explanation ? '<span class="fb-explain">' + q.explanation + '</span>' : '') +
          '</span>' +
        '</div>';

      updateProgress();

      var checkBtn = document.getElementById('quiz-check-btn');
      checkBtn.textContent = (state.index === n - 1) ? 'Ver resultado' : 'Próxima pergunta';
      checkBtn.removeEventListener('click', onCheck);
      checkBtn.addEventListener('click', onNext);
      checkBtn.focus({ preventScroll: true });
    }

    function onNext() {
      if (state.index < n - 1) {
        state.index++;
        renderQuestionScreen();
      } else {
        renderResult();
      }
    }

    function renderResult() {
      var total = n;
      var elapsedSeconds = Math.round((Date.now() - startTime) / 1000);
      var pct = Math.round((state.score / total) * 100);
      var passed = pct >= Math.round(APP_DATA.PASS_THRESHOLD * 100);

      Storage.recordQuizAttempt({ refId: opts.refId, type: opts.type, score: state.score, total: total, timeSeconds: elapsedSeconds });
      var completionInfo = opts.onComplete ? opts.onComplete(state.score, total) : null;

      var wrongIndexes = state.results.reduce(function (acc, ok, i) { if (ok === false) acc.push(i); return acc; }, []);
      var wrongListHtml = '';
      if (wrongIndexes.length) {
        wrongListHtml =
          '<div class="quiz-wrong-list">' +
            '<h2>Questões para revisar (' + wrongIndexes.length + ')</h2>' +
            wrongIndexes.map(function (i) {
              var q = questions[i];
              return (
                '<div class="quiz-wrong-item">' +
                  '<p class="quiz-wrong-q">' + q.q + '</p>' +
                  '<p class="quiz-wrong-your">Sua resposta: <strong>' + yourAnswerLabel(q, state.rawAnswers[i]) + '</strong></p>' +
                  '<p class="quiz-wrong-correct">Resposta certa: <strong>' + correctAnswerLabel(q) + '</strong></p>' +
                  (q.explanation ? '<p class="quiz-wrong-explain">' + q.explanation + '</p>' : '') +
                '</div>'
              );
            }).join('') +
            '<a class="btn-text-link" href="#' + reviewHash(opts) + '">Revisar conteúdo relacionado</a>' +
          '</div>';
      }

      container.innerHTML =
        '<section class="quiz-shell">' +
          '<a class="back-link" href="#' + opts.backHash + '">' + Icon('chevronLeft', { size: 16 }) + ' ' + (opts.backLabel || 'Voltar') + '</a>' +
          '<div class="result-panel ' + (passed ? 'is-pass' : 'is-fail') + '">' +
            Icon(passed ? 'trophy' : 'sparkle', { size: 34 }) +
            '<div class="result-score">' + state.score + '/' + total + ' · ' + pct + '%</div>' +
            '<p>' + (passed ? 'Muito bem! Você subiu mais um degrau.' : 'Quase lá — revise o conteúdo e tente de novo.') + '</p>' +
            (completionInfo && completionInfo.earnedPoints ? '<p class="fb-ok">' + Icon('star', { size: 15 }) + ' +' + completionInfo.earnedPoints + ' pontos</p>' : '') +
            '<p class="muted">Tempo: ' + elapsedSeconds + 's</p>' +
            '<div class="result-actions">' +
              '<button class="btn btn-secondary" id="quiz-retry-btn">Revisar quiz</button>' +
              '<a class="btn btn-secondary" href="#' + opts.backHash + '">' + (opts.backLabel || 'Voltar') + '</a>' +
              (opts.nextHash ? '<a class="btn btn-primary" href="#' + opts.nextHash + '">' + (opts.nextLabel || 'Continuar') + '</a>' : '') +
            '</div>' +
          '</div>' +
          wrongListHtml +
        '</section>';

      App.updatePointsPill();
      document.getElementById('quiz-retry-btn').addEventListener('click', function () {
        render(container, opts);
      });
    }

    renderQuestionScreen();
  }

  return { render: render };
})();

window.Views = Views;
