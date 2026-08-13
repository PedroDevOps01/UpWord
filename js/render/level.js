var Views = window.Views || {};

Views.level = (function () {

  function render(container, levelId) {
    var level = APP_DATA.getLevel(levelId);
    if (!level) { Views.home(container); return; }
    var modules = APP_DATA.getModules(levelId);
    var flash = Guard.consumeFlash();
    var flashHtml = flash ? '<div class="flash-message" role="alert" aria-live="assertive">' + Icon('lock', { size: 15 }) + ' ' + flash + '</div>' : '';

    var moduleItems = modules.map(function (m, i) {
      var unlocked = Storage.isModuleUnlocked(levelId, modules, i);
      var completed = Storage.isModuleCompleted(m.id);
      var markerIcon = completed ? Icon('check', { size: 18 }) : (unlocked ? Icon('flag', { size: 18 }) : Icon('lock', { size: 16 }));
      var classes = 'module-item' + (completed ? ' is-completed' : '') + (!unlocked ? ' is-locked' : '');

      var sessionSummary = Storage.getModuleSessionSummary(m.id);
      var body =
        '<span class="module-step-marker">' + markerIcon + '</span>' +
        '<div class="module-item-body">' +
          '<h3>' + (i + 1) + '. ' + m.title + (unlocked ? ' <span class="module-item-session-count">' + sessionSummary.done + '/' + sessionSummary.total + '</span>' : '') + '</h3>' +
          '<p>' + m.subtitle + '</p>' +
          (!unlocked ? '<span class="muted">Conclua o módulo anterior para desbloquear</span>' : '') +
        '</div>';

      if (!unlocked) return '<div class="' + classes + '">' + body + '</div>';
      return '<a class="' + classes + '" href="#/level/' + levelId + '/module/' + m.id + '">' + body + '</a>';
    }).join('');

    var finalTest = APP_DATA.getFinalTest(levelId);
    var finalUnlocked = modules.length > 0 && Storage.isFinalUnlocked(levelId, modules);
    var finalDone = Storage.isFinalCompleted(levelId);
    var finalBlock = '';
    if (modules.length === 0) {
      finalBlock = '<div class="empty-state">' + Icon('sparkle', { size: 22 }) + '<p>Este nível ainda está sendo construído. Volte em breve para continuar subindo!</p></div>';
    } else if (finalTest) {
      finalBlock =
        '<div class="module-item final-test-item ' + (finalUnlocked ? '' : 'is-locked') + '">' +
          (finalUnlocked
            ? '<a class="btn btn-primary" href="#/level/' + levelId + '/test">' + Icon('trophy', { size: 16 }) + (finalDone ? ' Refazer prova final' : ' Fazer prova final') + '</a>' +
              (finalDone ? '<button type="button" class="btn btn-secondary" id="cert-btn">' + Icon('download', { size: 15 }) + ' Baixar certificado</button>' : '')
            : '<span class="muted">' + Icon('lock', { size: 14 }) + ' Conclua todos os módulos para desbloquear a prova final</span>') +
        '</div>';
    }

    container.innerHTML =
      '<section class="level-page" style="--level-color:' + level.color + '">' +
        '<a class="back-link" href="#/">' + Icon('chevronLeft', { size: 16 }) + ' Minha trilha</a>' +
        '<h1><span class="level-code-tag">' + level.code + '</span> ' + level.name + '</h1>' +
        flashHtml +
        '<p class="level-desc">' + level.description + '</p>' +
        (modules.length > 0 ? '<a class="link-flashcards" href="#/flashcards/' + levelId + '">' + Icon('sparkle', { size: 15 }) + ' Praticar flashcards deste nível</a>' : '') +
        '<div class="module-list">' + moduleItems + '</div>' +
        finalBlock +
      '</section>';

    var certBtn = document.getElementById('cert-btn');
    if (certBtn) {
      certBtn.addEventListener('click', function () {
        Certificate.generate(level);
      });
    }
  }

  function renderFinalTest(container, levelId) {
    var level = APP_DATA.getLevel(levelId);
    var finalTest = APP_DATA.getFinalTest(levelId);
    if (!level || !finalTest) {
      container.innerHTML = '<section class="level-page"><p>A prova final deste nível ainda não está disponível.</p><a class="back-link" href="#/level/' + levelId + '">' + Icon('chevronLeft', { size: 16 }) + ' Voltar</a></section>';
      return;
    }
    var nextIndex = APP_DATA.getLevelIndex(levelId) + 1;
    var nextLevel = APP_DATA.levels[nextIndex];
    var modules = APP_DATA.getModules(levelId);

    Views.quiz.render(container, {
      title: 'Prova final — ' + level.code + ' ' + level.name,
      subtitle: finalTest.description,
      questions: finalTest.questions,
      refId: levelId + '-final',
      type: 'final',
      backHash: '/level/' + levelId,
      backLabel: 'Voltar ao nível ' + level.code,
      nextHash: nextLevel ? '/level/' + nextLevel.id : null,
      nextLabel: nextLevel ? 'Subir para o nível ' + nextLevel.code : null,
      onComplete: function (score, total) {
        var result = Storage.completeFinal(levelId, score, total);
        if (result.passed) Storage.checkNoRetryBadge(levelId, modules);
        return result;
      }
    });
  }

  return { render: render, renderFinalTest: renderFinalTest };
})();

window.Views = Views;
