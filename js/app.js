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

  function route() {
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
      return;
    }
    if (parts[0] === 'placement') {
      Views.placement(appEl);
      return;
    }
    if (parts[0] === 'flashcards') {
      Views.flashcards(appEl, parts[1] || null);
      return;
    }
    if (parts[0] === 'level' && parts[1]) {
      var levelId = parts[1];
      if (parts[2] === 'module' && parts[3]) {
        var moduleId = parts[3];
        var tab = parts[4] || 'lesson';
        if (tab === 'quiz') {
          Views.module.renderQuiz(appEl, levelId, moduleId);
        } else {
          Views.module.render(appEl, levelId, moduleId, tab);
        }
        return;
      }
      if (parts[2] === 'test') {
        Views.level.renderFinalTest(appEl, levelId);
        return;
      }
      Views.level.render(appEl, levelId);
      return;
    }
    Views.home(appEl);
  }

  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', route);

  return { route: route, updatePointsPill: updatePointsPill };
})();
