var Achievements = (function () {

  function describe(id) {
    var streakMatch = id.match(/^streak-(\d+)$/);
    if (streakMatch) {
      return { icon: 'sparkle', label: streakMatch[1] + ' dias seguidos estudando' };
    }
    if (id.indexOf('perfect-') === 0) {
      var moduleId = id.replace('perfect-', '');
      var levelId = moduleId.split('-')[0];
      var mod = APP_DATA.getModule(levelId, moduleId);
      return { icon: 'star', label: 'Nota máxima: ' + (mod ? mod.title : moduleId) };
    }
    if (id.indexOf('no-retry-') === 0) {
      var lvlId = id.replace('no-retry-', '');
      var lvl = APP_DATA.getLevel(lvlId);
      return { icon: 'trophy', label: 'Subiu o ' + (lvl ? lvl.code : lvlId.toUpperCase()) + ' sem repetir nenhum quiz' };
    }
    if (/-champion-badge$/.test(id)) {
      var champLevelId = id.replace('-champion-badge', '');
      var champLevel = APP_DATA.getLevel(champLevelId);
      return { icon: 'trophy', label: 'Campeão do nível ' + (champLevel ? champLevel.code : champLevelId.toUpperCase()) };
    }
    if (/-badge$/.test(id)) {
      var badgeModuleId = id.replace('-badge', '');
      var badgeLevelId = badgeModuleId.split('-')[0];
      var badgeMod = APP_DATA.getModule(badgeLevelId, badgeModuleId);
      return { icon: 'flag', label: badgeMod ? badgeMod.title : 'Módulo concluído' };
    }
    return { icon: 'sparkle', label: 'Conquista' };
  }

  return { describe: describe };
})();

window.Achievements = Achievements;
