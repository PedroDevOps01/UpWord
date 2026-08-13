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
    var attempts = {};
    Storage.state.quizHistory.forEach(function (h) {
      var pct = Math.round((h.score / h.total) * 100);
      if (!(h.refId in best) || pct > best[h.refId]) best[h.refId] = pct;
      attempts[h.refId] = (attempts[h.refId] || 0) + 1;
    });
    var weakList = Object.keys(best).map(function (refId) {
      return { refId: refId, pct: best[refId], attempts: attempts[refId] };
    }).sort(function (a, b) { return a.pct - b.pct; }).slice(0, 3);

    dashboardHtml =
      '<section class="dashboard-panel">' +
        '<h2>Módulos para revisar</h2>' +
        '<p class="muted" style="text-align:center;">Sua melhor nota em cada quiz até agora.</p>' +
        '<div class="weak-list">' +
          weakList.map(function (w) {
            var cls = w.pct >= 80 ? 'is-ok' : '';
            var recurring = w.attempts >= 3 && w.pct < 60 ? '<span class="weak-item-recurring" title="' + w.attempts + ' tentativas e ainda abaixo de 60%">⚠ erro recorrente</span>' : '';
            return '<div class="weak-item"><span>' + resolveRefLabel(w.refId) + ' ' + recurring + '</span><span class="weak-item-score ' + cls + '">' + w.pct + '%</span></div>';
          }).join('') +
        '</div>' +
      '</section>';
  }

  // Prioridade simples e transparente: módulo em andamento > writing sem
  // revisão > flashcards pendentes. Não inventa "conclusão automática" — só
  // aponta o motivo real com base no que já está registrado no estado.
  // Limiar acima do qual recomendamos revisar a fila de flashcards ANTES de
  // liberar módulo novo — evita empilhar conteúdo novo sobre uma revisão
  // já atrasada.
  var REVIEW_BACKLOG_THRESHOLD = 15;

  function countDueFlashcards() {
    var count = 0;
    levels.concat(APP_DATA.electives || []).forEach(function (lvl) {
      APP_DATA.getModules(lvl.id).forEach(function (m) {
        (m.vocabulary || []).forEach(function (v) {
          if (Storage.isCardDue(v.id || v.word)) count++;
        });
      });
    });
    return count;
  }

  function nextStepInfo() {
    var dueCount = countDueFlashcards();
    if (dueCount >= REVIEW_BACKLOG_THRESHOLD) {
      return {
        reason: 'Fila de revisão grande (' + dueCount + ' cartões pendentes) — revisar antes de avançar ajuda a fixar o que já foi visto',
        label: 'Revisar flashcards pendentes',
        hash: '#/flashcards'
      };
    }

    for (var i = 0; i < levels.length; i++) {
      var lvl = levels[i];
      var modules = APP_DATA.getModules(lvl.id);
      for (var j = 0; j < modules.length; j++) {
        var unlocked = Storage.isModuleUnlocked(lvl.id, modules, j);
        var completed = Storage.isModuleCompleted(modules[j].id);
        if (unlocked && !completed) {
          return {
            reason: 'Módulo em andamento',
            label: 'Continuar "' + modules[j].title + '" (' + lvl.code + ')',
            hash: '#/level/' + lvl.id + '/module/' + modules[j].id
          };
        }
      }
    }
    var draftKeys = Object.keys(Storage.state.writingDrafts || {});
    var hasReviewBadge = Storage.state.badges.indexOf('first-writing-review') !== -1;
    if (draftKeys.length > 0 && !hasReviewBadge) {
      return { reason: 'Writing sem revisão', label: 'Revisar seus rascunhos de writing', hash: null };
    }
    if (dueCount > 0) {
      return { reason: 'Revisão de flashcards pendente', label: 'Revisar flashcards pendentes', hash: '#/flashcards' };
    }
    return null;
  }

  var nextStep = nextStepInfo();
  var nextStepHtml = nextStep
    ? '<section class="next-step-panel">' +
        '<h2>' + Icon('flag', { size: 16 }) + ' Próximo passo recomendado</h2>' +
        '<p class="muted">' + nextStep.reason + '</p>' +
        (nextStep.hash
          ? '<a class="btn btn-primary" href="' + nextStep.hash + '">' + nextStep.label + '</a>'
          : '<p>' + nextStep.label + '</p>') +
      '</section>'
    : '';

  var studyPlanHtml =
    '<section class="study-plan-panel">' +
      '<h2>Plano de estudo rápido</h2>' +
      '<p class="muted" style="text-align:center;">Sem cadastro, sem obrigação — escolha quanto tempo você tem agora.</p>' +
      '<div class="study-plan-grid">' +
        '<div class="study-plan-card">' +
          '<h3>15 minutos</h3>' +
          '<p>Revise flashcards pendentes e ouça um listening.</p>' +
          '<a class="btn btn-secondary" href="#/flashcards">Começar</a>' +
        '</div>' +
        '<div class="study-plan-card">' +
          '<h3>30 minutos</h3>' +
          '<p>Flashcards + vocabulário e gramática do próximo módulo.</p>' +
          '<a class="btn btn-secondary" href="' + (nextStep && nextStep.hash ? nextStep.hash : '#/flashcards') + '">Começar</a>' +
        '</div>' +
        '<div class="study-plan-card">' +
          '<h3>45 minutos</h3>' +
          '<p>Módulo completo: aula, vocabulário, exercícios e quiz.</p>' +
          '<a class="btn btn-secondary" href="' + (nextStep && nextStep.hash ? nextStep.hash : '#/level/a1') + '">Começar</a>' +
        '</div>' +
      '</div>' +
    '</section>';

  // Progresso por habilidade: usa sessionProgress (marcado só por ação
  // explícita — nunca por só abrir a aba) somado em todos os 39 módulos,
  // não só nos que já têm quiz com skill marcado.
  var SKILL_TABS = [
    { key: 'vocabulary', label: 'Vocabulário' },
    { key: 'grammar', label: 'Gramática' },
    { key: 'listening', label: 'Listening' },
    { key: 'reading', label: 'Reading' },
    { key: 'writing', label: 'Writing' },
    { key: 'speaking', label: 'Speaking' }
  ];
  var allModuleIds = [];
  levels.concat(APP_DATA.electives || []).forEach(function (lvl) {
    APP_DATA.getModules(lvl.id).forEach(function (m) { allModuleIds.push(m.id); });
  });
  var skillProgressHtml = '';
  if (allModuleIds.length) {
    skillProgressHtml =
      '<section class="skill-progress-panel">' +
        '<h2>Progresso por habilidade</h2>' +
        '<p class="muted" style="text-align:center;">Sessões concluídas (marcadas explicitamente) em todos os níveis e trilhas extras.</p>' +
        '<div class="skill-progress-grid">' +
          SKILL_TABS.map(function (skill) {
            var done = allModuleIds.filter(function (mid) { return Storage.isSessionCompleted(mid, skill.key); }).length;
            var pct = Math.round((done / allModuleIds.length) * 100);
            return (
              '<div class="skill-progress-item">' +
                '<div class="skill-progress-label">' + skill.label + '</div>' +
                '<div class="terrace-progress"><div class="terrace-progress-fill" style="width:' + pct + '%"></div></div>' +
                '<span class="skill-progress-count">' + done + '/' + allModuleIds.length + ' módulos</span>' +
              '</div>'
            );
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
      '<p class="roadmap-sub">Cada nível é um degrau. Suba no seu ritmo, do A1 ao C2. ' +
        '<a href="#/curriculum">Ver o mapa completo do currículo</a>' +
        ' · <a href="#/grammar">Referência gramatical</a></p>' +
      '<div class="ascent">' + terraces + '</div>' +
      '<div class="step-list">' + stepListItems + '</div>' +
    '</section>' +
    nextStepHtml +
    achievementsHtml +
    dashboardHtml +
    studyPlanHtml +
    skillProgressHtml +
    electivesHtml +
    '<section class="data-panel">' +
      '<h2>Meus dados</h2>' +
      '<p class="muted" style="text-align:center;">Seu progresso vive só neste navegador. Faça backup ou leve para outro dispositivo.</p>' +
      '<div class="data-actions">' +
        '<button type="button" class="btn btn-secondary" id="export-btn">' + Icon('download', { size: 15 }) + ' Baixar meu progresso</button>' +
        '<button type="button" class="btn btn-secondary" id="import-btn">' + Icon('upload', { size: 15 }) + ' Importar progresso</button>' +
        '<label class="visually-hidden" for="import-file-input">Selecionar arquivo de backup (.json) para importar progresso</label>' +
        '<input type="file" accept="application/json" id="import-file-input" class="visually-hidden" aria-label="Selecionar arquivo de backup (.json) para importar progresso" tabindex="-1">' +
      '</div>' +
      '<div class="reset-section">' +
        '<button class="btn-text-danger" id="reset-progress-btn">Apagar todo o meu progresso salvo</button>' +
      '</div>' +
    '</section>';

  document.getElementById('reset-progress-btn').addEventListener('click', function () {
    if (confirm('Isso vai apagar todo o progresso salvo neste navegador (módulos concluídos, pontos, badges, flashcards e rascunhos de writing). Esta ação não pode ser desfeita. Deseja continuar?')) {
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
      var result = Storage.importProgress(reader.result);
      if (result.ok) {
        alert('Progresso importado com sucesso!');
        location.hash = '#/';
        location.reload();
      } else {
        alert('Não foi possível importar este arquivo: ' + result.error);
      }
    };
    reader.readAsText(file);
  });
};

window.Views = Views;
