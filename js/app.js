var App = (function () {
  var appEl;

  function parseHash() {
    var hash = location.hash.replace(/^#/, '') || '/';
    return hash.split('/').filter(Boolean);
  }

  function updatePointsPill() {
    var pill = document.getElementById('points-pill');
    if (pill) pill.textContent = '⭐ ' + Storage.state.points + ' pts';
  }

  function goToLevelBlocked(levelId, message) {
    Guard.setFlash(message);
    location.hash = '#/level/' + levelId;
  }

  function route() {
    if (window.Storage && Storage.migrateFlashcardsByWordToId) Storage.migrateFlashcardsByWordToId();

    appEl = document.getElementById('app');
    appEl.innerHTML = '';
    var parts = parseHash();
    if (parts.length > 0) {
      Storage.setLastVisited('/' + parts.join('/'));
    }
    updatePointsPill();
    window.scrollTo(0, 0);

    if (parts.length === 0) {
      Views.home(appEl);
      focusMain();
      return;
    }
    if (parts[0] === 'placement') {
      Views.placement(appEl);
      focusMain();
      return;
    }
    if (parts[0] === 'flashcards') {
      Views.flashcards(appEl, parts[1] || null);
      focusMain();
      return;
    }
    if (parts[0] === 'level' && parts[1]) {
      var levelId = parts[1];
      if (parts[2] === 'module' && parts[3]) {
        var moduleId = parts[3];
        var tab = parts[4] || 'lesson';
        var access = Guard.canEnterModule(levelId, moduleId);
        if (!access.ok) {
          if (access.reason === 'locked') {
            goToLevelBlocked(levelId, 'O módulo "' + access.ctx.module.title + '" ainda não foi liberado. Conclua o módulo anterior primeiro.');
          } else {
            Views.home(appEl);
            focusMain();
          }
          return;
        }
        if (tab === 'quiz') {
          Views.module.renderQuiz(appEl, levelId, moduleId);
        } else {
          Views.module.render(appEl, levelId, moduleId, tab);
        }
        focusMain();
        return;
      }
      if (parts[2] === 'test') {
        var finalAccess = Guard.canEnterFinal(levelId);
        if (!finalAccess.ok) {
          if (finalAccess.reason === 'locked') {
            goToLevelBlocked(levelId, 'A prova final ainda não foi liberada. Conclua todos os módulos deste nível primeiro.');
          } else {
            Views.level.render(appEl, levelId);
            focusMain();
          }
          return;
        }
        Views.level.renderFinalTest(appEl, levelId);
        focusMain();
        return;
      }
      if (!Guard.resolveLevel(levelId)) {
        Views.home(appEl);
        focusMain();
        return;
      }
      Views.level.render(appEl, levelId);
      focusMain();
      return;
    }
    Views.home(appEl);
    focusMain();
  }

  // Move o foco para o título da tela recém-renderizada após cada troca de
  // rota (nunca durante digitação, já que só roda aqui). Ajuda leitores de
  // tela e navegação por teclado a perceberem a mudança de conteúdo.
  function focusMain() {
    var heading = appEl.querySelector('h1');
    if (!heading) return;
    if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }

  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', route);

  return { route: route, updatePointsPill: updatePointsPill };
})();
