var Views = window.Views || {};

// Matriz de cobertura curricular: para cada módulo, mostra o objetivo
// comunicativo ("Ao final, o aluno consegue..."), pré-requisitos e o que
// conta como evidência de domínio. Não afirma certificação oficial CEFR —
// só mostra a que ponto do CEFR aquele nível é compatível.
Views.curriculum = function (container) {
  function resolveModuleTitle(moduleId) {
    var levelId = moduleId.split('-')[0];
    var mod = APP_DATA.getModule(levelId, moduleId);
    return mod ? mod.title : moduleId;
  }

  function moduleRow(levelId, m, i) {
    var prereqLabels = (m.prerequisites || []).map(resolveModuleTitle);
    return (
      '<div class="curriculum-module">' +
        '<h4>' + (i + 1) + '. ' + m.title + '</h4>' +
        '<p class="curriculum-objective">' + (m.objective || '<span class="muted">Objetivo ainda não documentado.</span>') + '</p>' +
        '<div class="curriculum-meta">' +
          '<span><strong>Pré-requisitos:</strong> ' + (prereqLabels.length ? prereqLabels.join(', ') : 'Nenhum — pode começar por aqui') + '</span>' +
          '<span><strong>Evidência de domínio:</strong> ' + (m.masteryEvidence || 'Não documentado.') + '</span>' +
        '</div>' +
      '</div>'
    );
  }

  var levelSections = APP_DATA.levels.map(function (level) {
    var modules = APP_DATA.getModules(level.id);
    var cefrNote = modules[0] && modules[0].levelCefrNote;
    return (
      '<section class="curriculum-level" style="--level-color:' + level.color + '">' +
        '<h2><span class="level-code-tag">' + level.code + '</span> ' + level.name + '</h2>' +
        (cefrNote ? '<p class="curriculum-cefr-note muted">' + cefrNote + '</p>' : '') +
        modules.map(function (m, i) { return moduleRow(level.id, m, i); }).join('') +
      '</section>'
    );
  }).join('');

  var electiveSections = APP_DATA.electives.map(function (level) {
    var modules = APP_DATA.getModules(level.id);
    return (
      '<section class="curriculum-level" style="--level-color:' + level.color + '">' +
        '<h2>' + level.name + ' <span class="muted">(trilha extra)</span></h2>' +
        modules.map(function (m, i) { return moduleRow(level.id, m, i); }).join('') +
      '</section>'
    );
  }).join('');

  container.innerHTML =
    '<section class="curriculum-page">' +
      '<a class="back-link" href="#/">' + Icon('chevronLeft', { size: 16 }) + ' Minha trilha</a>' +
      '<h1>Mapa completo do currículo</h1>' +
      '<p class="muted">Cada módulo declara o que o aluno consegue fazer ao final, o que vem antes e o que conta como evidência de domínio dentro do próprio app.</p>' +
      '<div class="curriculum-disclaimer">' +
        Icon('sparkle', { size: 15 }) +
        '<span>Os níveis aqui são <strong>compatíveis</strong> com as faixas do CEFR (Common European Framework of Reference), mas isto <strong>não é uma certificação oficial</strong>. ' +
        'Certificados e badges do UpWord mostram só o que foi concluído dentro do app.</span>' +
      '</div>' +
      levelSections +
      electiveSections +
    '</section>';
};

window.Views = Views;
