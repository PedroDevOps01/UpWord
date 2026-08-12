var Views = window.Views || {};

Views.home = function (container) {
  var levels = APP_DATA.levels;
  var totalBadges = Storage.state.badges.length;
  var lastVisited = Storage.state.lastVisited;
  var hasProgress = Object.keys(Storage.state.completedModules).length > 0;
  var hasLastVisited = lastVisited && lastVisited !== '/' && lastVisited !== '';
  var streakCount = Storage.state.streak.count;
  var showStats = hasProgress || streakCount > 0 || totalBadges > 0;

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

  function progressBlock(lvl) {
    var st = levelStats(lvl);
    return st.total > 0
      ? '<div class="terrace-progress"><div class="terrace-progress-fill" style="width:' + st.pct + '%"></div></div>' +
        '<span class="terrace-progress-label">' + st.done + '/' + st.total + ' módulos' + (st.finalDone ? ' · prova feita' : '') + '</span>'
      : '<span class="terrace-progress-label">Em construção</span>';
  }

  var terraces = levels.map(function (lvl, i) {
    return (
      '<a class="terrace" href="#/level/' + lvl.id + '" style="--level-color:' + lvl.color + '; --step:' + i + '">' +
        '<div class="terrace-card">' +
          '<div class="terrace-code">' + lvl.code + '</div>' +
          '<div class="terrace-name">' + lvl.name + '</div>' +
          '<div class="terrace-tagline">' + lvl.tagline + '</div>' +
          progressBlock(lvl) +
        '</div>' +
        '<div class="terrace-riser" data-step="' + lvl.code + '"></div>' +
      '</a>'
    );
  }).join('');

  var stepListItems = levels.map(function (lvl) {
    return (
      '<div class="step-list-item" style="--level-color:' + lvl.color + '">' +
        '<span class="step-list-dot"></span>' +
        '<a class="terrace" href="#/level/' + lvl.id + '" style="--level-color:' + lvl.color + '">' +
          '<div class="terrace-card">' +
            '<div class="terrace-code">' + lvl.code + '</div>' +
            '<div class="terrace-name">' + lvl.name + '</div>' +
            '<div class="terrace-tagline">' + lvl.tagline + '</div>' +
            progressBlock(lvl) +
          '</div>' +
        '</a>' +
      '</div>'
    );
  }).join('');

  var achievementsHtml = '';
  if (totalBadges > 0) {
    achievementsHtml =
      '<section class="achievements-panel">' +
        '<h2>Conquistas</h2>' +
        '<div class="badge-row">' +
          Storage.state.badges.map(function (b) {
            var d = Achievements.describe(b);
            return '<span class="badge-chip">' + Icon(d.icon, { size: 15 }) + ' ' + d.label + '</span>';
          }).join('') +
        '</div>' +
      '</section>';
  }

  function resolveRefLabel(refId) {
    if (/-final$/.test(refId)) {
      var levelId = refId.replace('-final', '');
      var level = APP_DATA.getLevel(levelId);
      return level ? ('Prova final ' + level.code) : refId;
    }
    var modLevelId = refId.split('-')[0];
    var mod = APP_DATA.getModule(modLevelId, refId);
    return mod ? mod.title : refId;
  }

  var dashboardHtml = '';
  if (Storage.state.quizHistory.length > 0) {
    var best = {};
    Storage.state.quizHistory.forEach(function (h) {
      var pct = Math.round((h.score / h.total) * 100);
      if (!(h.refId in best) || pct > best[h.refId]) best[h.refId] = pct;
    });
    var weakList = Object.keys(best).map(function (refId) {
      return { refId: refId, pct: best[refId] };
    }).sort(function (a, b) { return a.pct - b.pct; }).slice(0, 3);

    dashboardHtml =
      '<section class="dashboard-panel">' +
        '<h2>Módulos para revisar</h2>' +
        '<p class="muted" style="text-align:center;">Sua melhor nota em cada quiz até agora.</p>' +
        '<div class="weak-list">' +
          weakList.map(function (w) {
            var cls = w.pct >= 80 ? 'is-ok' : '';
            return '<div class="weak-item"><span>' + resolveRefLabel(w.refId) + '</span><span class="weak-item-score ' + cls + '">' + w.pct + '%</span></div>';
          }).join('') +
        '</div>' +
      '</section>';
  }

  var electivesHtml =
    '<section class="electives-panel">' +
      '<h2>Trilhas extras</h2>' +
      '<p class="muted" style="text-align:center;">Fora da trilha principal, no seu ritmo.</p>' +
      '<div class="elective-grid">' +
        APP_DATA.electives.map(function (e) {
          return (
            '<a class="elective-card" href="#/level/' + e.id + '" style="--level-color:' + e.color + '">' +
              '<h3>' + e.name + '</h3>' +
              '<p>' + e.tagline + '</p>' +
            '</a>'
          );
        }).join('') +
      '</div>' +
    '</section>';

  container.innerHTML =
    '<section class="hero">' +
      '<span class="hero-eyebrow">' + Icon('sparkle', { size: 14 }) + ' aprenda inglês do seu jeito</span>' +
      '<h1>Suba no inglês,<br><em>uma palavra por vez.</em></h1>' +
      '<p class="hero-sub">Escolha um degrau na trilha abaixo ou faça o nivelamento rápido para descobrir onde começar. Sem cadastro — seu progresso fica salvo neste navegador.</p>' +
      '<div class="hero-actions">' + primaryCta + secondaryCta + '</div>' +
      (showStats
        ? '<div class="stats-row">' +
            '<span class="stat-pill">' + Icon('star', { size: 15 }) + ' ' + Storage.state.points + ' pontos</span>' +
            '<span class="stat-pill">' + Icon('trophy', { size: 15 }) + ' ' + totalBadges + ' conquistas</span>' +
            (streakCount > 0 ? '<span class="stat-pill">' + Icon('flame', { size: 15 }) + ' ' + streakCount + (streakCount > 1 ? ' dias seguidos' : ' dia seguido') + '</span>' : '') +
          '</div>'
        : '') +
    '</section>' +
    '<section class="roadmap">' +
      '<h2 class="roadmap-heading">Sua trilha de ascensão</h2>' +
      '<p class="roadmap-sub">Cada nível é um degrau. Suba no seu ritmo, do A1 ao C2.</p>' +
      '<div class="ascent">' + terraces + '</div>' +
      '<div class="step-list">' + stepListItems + '</div>' +
    '</section>' +
    achievementsHtml +
    dashboardHtml +
    electivesHtml +
    '<section class="data-panel">' +
      '<h2>Meus dados</h2>' +
      '<p class="muted" style="text-align:center;">Seu progresso vive só neste navegador. Faça backup ou leve para outro dispositivo.</p>' +
      '<div class="data-actions">' +
        '<button type="button" class="btn btn-secondary" id="export-btn">' + Icon('download', { size: 15 }) + ' Baixar meu progresso</button>' +
        '<button type="button" class="btn btn-secondary" id="import-btn">' + Icon('upload', { size: 15 }) + ' Importar progresso</button>' +
        '<input type="file" accept="application/json" id="import-file-input" class="visually-hidden">' +
      '</div>' +
      '<div class="reset-section">' +
        '<button class="btn-text-danger" id="reset-progress-btn">Apagar todo o meu progresso salvo</button>' +
      '</div>' +
    '</section>';

  document.getElementById('reset-progress-btn').addEventListener('click', function () {
    if (confirm('Isso vai apagar todo o progresso salvo neste navegador (módulos concluídos, pontos, badges e flashcards). Deseja continuar?')) {
      Storage.resetAll();
      location.hash = '#/';
      location.reload();
    }
  });

  document.getElementById('export-btn').addEventListener('click', function () {
    var json = Storage.exportProgress();
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'upword-progresso.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  });

  document.getElementById('import-btn').addEventListener('click', function () {
    document.getElementById('import-file-input').click();
  });

  document.getElementById('import-file-input').addEventListener('change', function (e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      var ok = Storage.importProgress(reader.result);
      if (ok) {
        alert('Progresso importado com sucesso!');
        location.hash = '#/';
        location.reload();
      } else {
        alert('Não foi possível importar este arquivo. Verifique se é um backup válido do UpWord.');
      }
    };
    reader.readAsText(file);
  });
};

window.Views = Views;
