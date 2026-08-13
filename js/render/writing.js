var Views = window.Views || {};

// Aba de Writing: autosave real (dentro de Storage.state, então entra em
// exportar/importar), revisão local objetiva via WritingReview, e modelo de
// resposta só revelado por ação explícita do aluno.
Views.writing = (function () {
  var STATUS_ICON = { 'passou': '✔', 'revisar': '!', 'não verificável': '–' };
  var STATUS_CLASS = { 'passou': 'fb-ok', 'revisar': 'fb-bad', 'não verificável': 'is-neutral' };

  function draftKey(moduleId, index) {
    return moduleId + ':' + index;
  }

  function render(module, moduleId) {
    var items = module.writing.map(function (item, i) {
      var key = draftKey(moduleId, i);
      var saved = Storage.getWritingDraft(key);
      var textareaId = 'writing-area-' + key.replace(/[^a-z0-9]/gi, '-');
      return (
        '<div class="writing-card" data-writing-index="' + i + '" data-draft-key="' + key + '">' +
          '<p><strong>Exercício ' + (i + 1) + ':</strong> ' + item.prompt + '</p>' +
          (item.minWords ? '<p class="muted">Mínimo sugerido: ' + item.minWords + ' palavras</p>' : '') +
          '<label class="visually-hidden" for="' + textareaId + '">Sua resposta em inglês para o exercício ' + (i + 1) + '</label>' +
          '<textarea id="' + textareaId + '" class="writing-area" rows="6" data-draft-key="' + key + '" aria-label="Sua resposta em inglês para o exercício ' + (i + 1) + '" placeholder="Escreva sua resposta em inglês...">' + escapeHtml(saved) + '</textarea>' +
          '<div class="writing-meta-row">' +
            '<span class="word-count muted" data-count-for="' + key + '"></span>' +
            '<span class="writing-autosave-status muted" aria-live="polite" data-autosave-for="' + key + '"></span>' +
          '</div>' +
          '<div class="writing-actions">' +
            '<button type="button" class="btn btn-secondary btn-writing-review" data-key="' + key + '" data-index="' + i + '" aria-label="Revisar minha resposta do exercício ' + (i + 1) + '">Revisar minha resposta</button>' +
            '<button type="button" class="btn-text-danger btn-writing-clear" data-key="' + key + '" aria-label="Limpar rascunho do exercício ' + (i + 1) + '">Limpar rascunho</button>' +
          '</div>' +
          '<div class="writing-review-result" id="writing-review-' + key.replace(/[^a-z0-9]/gi, '-') + '" aria-live="polite"></div>' +
          (item.modelAnswer
            ? '<details class="transcript-toggle writing-model"><summary>Ver um modelo de resposta</summary>' +
                '<p class="muted">Isto é um exemplo possível — não é a única resposta certa.</p>' +
                '<p>' + item.modelAnswer + '</p>' +
              '</details>'
            : '') +
        '</div>'
      );
    }).join('');
    return '<div class="tab-content">' + items + '</div>';
  }

  function escapeHtml(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderReviewResult(container, resultId, checks) {
    var el = document.getElementById(resultId);
    if (!el) return;
    el.innerHTML =
      '<ul class="writing-checklist">' +
        checks.map(function (c) {
          return '<li class="writing-check-item ' + (STATUS_CLASS[c.status] || '') + '">' +
            '<span class="writing-check-status">' + (STATUS_ICON[c.status] || '') + '</span>' +
            '<span><strong>' + c.label + '</strong> — ' + c.status + (c.detail ? ('. ' + c.detail) : '') + '</span>' +
          '</li>';
        }).join('') +
      '</ul>' +
      '<p class="muted writing-disclaimer">Esta é uma checagem automática de regras objetivas — não substitui a correção de um professor nem indica uma nota CEFR.</p>';
  }

  function bind(root, module, moduleId) {
    root.querySelectorAll('.writing-area').forEach(function (area) {
      var key = area.getAttribute('data-draft-key');
      var counter = root.querySelector('[data-count-for="' + key + '"]');
      var autosaveEl = root.querySelector('[data-autosave-for="' + key + '"]');

      function updateCount() {
        var words = WritingReview.countWords(area.value);
        if (counter) counter.textContent = words + ' palavra' + (words === 1 ? '' : 's');
      }
      updateCount();

      area.addEventListener('input', function () {
        updateCount();
        Storage.setWritingDraft(key, area.value);
        if (autosaveEl) autosaveEl.textContent = 'Rascunho salvo neste navegador ✓';
      });
    });

    root.querySelectorAll('.btn-writing-review').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-key');
        var index = parseInt(btn.getAttribute('data-index'), 10);
        var area = root.querySelector('.writing-area[data-draft-key="' + key + '"]');
        var item = module.writing[index];
        var checks = WritingReview.review(area ? area.value : '', item);
        var resultId = 'writing-review-' + key.replace(/[^a-z0-9]/gi, '-');
        renderReviewResult(root, resultId, checks);
        Storage.markWritingReviewed(moduleId);
        Storage.markSessionCompleted(moduleId, 'writing');
      });
    });

    root.querySelectorAll('.btn-writing-clear').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-key');
        if (!confirm('Isso vai apagar o rascunho salvo deste exercício. Esta ação não pode ser desfeita. Deseja continuar?')) return;
        var area = root.querySelector('.writing-area[data-draft-key="' + key + '"]');
        if (area) area.value = '';
        Storage.clearWritingDraft(key);
        var counter = root.querySelector('[data-count-for="' + key + '"]');
        if (counter) counter.textContent = '0 palavras';
        var autosaveEl = root.querySelector('[data-autosave-for="' + key + '"]');
        if (autosaveEl) autosaveEl.textContent = 'Rascunho apagado.';
        var resultId = 'writing-review-' + key.replace(/[^a-z0-9]/gi, '-');
        var resultEl = document.getElementById(resultId);
        if (resultEl) resultEl.innerHTML = '';
      });
    });
  }

  return { render: render, bind: bind };
})();

window.Views = Views;
