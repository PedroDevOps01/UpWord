var Views = window.Views || {};

Views.home = function (container) {
  var levels = APP_DATA.levels;
  var totalBadges = Storage.state.badges.length;
  var lastVisited = Storage.state.lastVisited;
  var hasProgress = Object.keys(Storage.state.completedModules).length > 0;
  var hasLastVisited = lastVisited && lastVisited !== '/' && lastVisited !== '';

  var primaryCta, secondaryCta;
  if (hasLastVisited) {
    primaryCta = '<a class="btn btn-primary" href="#' + lastVisited + '">Continuar minha trilha</a>';
    secondaryCta = '<a class="btn btn-secondary" href="#/placement">Fazer nivelamento</a>';
  } else {
    primaryCta = '<a class="btn btn-primary" href="#/placement">Fazer nivelamento</a>';
    secondaryCta = '<a class="btn btn-secondary" href="#/level/a1">Começar pelo A1</a>';
  }

  function levelStats(lvl) {
    var modules = APP_DATA.getModules(lvl.id);
    var done = modules.filter(function (m) { return Storage.isModuleCompleted(m.id); }).length;
    var total = modules.length;
    var pct = total > 0 ? Math.round((done / total) * 100) : 0;
    var finalDone = Storage.isFinalCompleted(lvl.id);
    return { modules: modules, done: done, total: total, pct: pct, finalDone: finalDone };
  }

  var terraces = levels.map(function (lvl, i) {
    var st = levelStats(lvl);
    var progressHtml = st.total > 0
      ? '<div class="terrace-progress"><div class="terrace-progress-fill" style="width:' + st.pct + '%"></div></div>' +
        '<span class="terrace-progress-label">' + st.done + '/' + st.total + ' módulos' + (st.finalDone ? ' · prova feita' : '') + '</span>'
      : '<span class="terrace-progress-label">Em construção</span>';
    return (
      '<a class="terrace" href="#/level/' + lvl.id + '" style="--level-color:' + lvl.color + '; --step:' + i + '">' +
        '<div class="terrace-card">' +
          '<div class="terrace-code">' + lvl.code + '</div>' +
          '<div class="terrace-name">' + lvl.name + '</div>' +
          '<div class="terrace-tagline">' + lvl.tagline + '</div>' +
          progressHtml +
        '</div>' +
        '<div class="terrace-riser" data-step="' + lvl.code + '"></div>' +
      '</a>'
    );
  }).join('');

  var stepListItems = levels.map(function (lvl) {
    var st = levelStats(lvl);
    var progressHtml = st.total > 0
      ? '<div class="terrace-progress"><div class="terrace-progress-fill" style="width:' + st.pct + '%"></div></div>' +
        '<span class="terrace-progress-label">' + st.done + '/' + st.total + ' módulos' + (st.finalDone ? ' · prova feita' : '') + '</span>'
      : '<span class="terrace-progress-label">Em construção</span>';
    return (
      '<div class="step-list-item" style="--level-color:' + lvl.color + '">' +
        '<span class="step-list-dot"></span>' +
        '<a class="terrace" href="#/level/' + lvl.id + '" style="--level-color:' + lvl.color + '">' +
          '<div class="terrace-card">' +
            '<div class="terrace-code">' + lvl.code + '</div>' +
            '<div class="terrace-name">' + lvl.name + '</div>' +
            '<div class="terrace-tagline">' + lvl.tagline + '</div>' +
            progressHtml +
          '</div>' +
        '</a>' +
      '</div>'
    );
  }).join('');

  container.innerHTML =
    '<section class="hero">' +
      '<span class="hero-eyebrow">' + Icon('sparkle', { size: 14 }) + ' aprenda inglês do seu jeito</span>' +
      '<h1>Suba no inglês,<br><em>uma palavra por vez.</em></h1>' +
      '<p class="hero-sub">Escolha um degrau na trilha abaixo ou faça o nivelamento rápido para descobrir onde começar. Sem cadastro — seu progresso fica salvo neste navegador.</p>' +
      '<div class="hero-actions">' + primaryCta + secondaryCta + '</div>' +
      (hasProgress
        ? '<div class="stats-row">' +
            '<span class="stat-pill">' + Icon('star', { size: 15 }) + ' ' + Storage.state.points + ' pontos</span>' +
            '<span class="stat-pill">' + Icon('trophy', { size: 15 }) + ' ' + totalBadges + ' conquistas</span>' +
          '</div>'
        : '') +
    '</section>' +
    '<section class="roadmap">' +
      '<h2 class="roadmap-heading">Sua trilha de ascensão</h2>' +
      '<p class="roadmap-sub">Cada nível é um degrau. Suba no seu ritmo, do A1 ao C2.</p>' +
      '<div class="ascent">' + terraces + '</div>' +
      '<div class="step-list">' + stepListItems + '</div>' +
    '</section>' +
    '<section class="reset-section">' +
      '<button class="btn-text-danger" id="reset-progress-btn">Apagar todo o meu progresso salvo</button>' +
    '</section>';

  var resetBtn = document.getElementById('reset-progress-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      if (confirm('Isso vai apagar todo o progresso salvo neste navegador (módulos concluídos, pontos, badges e flashcards). Deseja continuar?')) {
        Storage.resetAll();
        location.hash = '#/';
        location.reload();
      }
    });
  }
};

window.Views = Views;
