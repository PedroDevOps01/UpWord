// Centraliza a validação de levelId/moduleId/tab e de desbloqueio de
// módulo/prova final. Usado pelo roteador (js/app.js) para que hashes
// digitados diretamente na barra de endereço não consigam abrir conteúdo
// bloqueado — a mesma verificação já é feita defensivamente dentro de
// Storage.completeModule/completeFinal (js/storage.js).
var Guard = (function () {
  var FLASH_KEY = 'upword_flash_message';

  function resolveLevel(levelId) {
    return APP_DATA.getLevel(levelId) || null;
  }

  function resolveModule(levelId, moduleId) {
    var level = resolveLevel(levelId);
    if (!level) return null;
    var modules = APP_DATA.getModules(levelId);
    var index = modules.findIndex(function (m) { return m.id === moduleId; });
    if (index === -1) return null;
    return { level: level, modules: modules, module: modules[index], index: index };
  }

  function canEnterModule(levelId, moduleId) {
    var ctx = resolveModule(levelId, moduleId);
    if (!ctx) return { ok: false, reason: 'not-found' };
    var unlocked = Storage.isModuleUnlocked(levelId, ctx.modules, ctx.index);
    if (!unlocked) return { ok: false, reason: 'locked', ctx: ctx };
    return { ok: true, ctx: ctx };
  }

  function canEnterFinal(levelId) {
    var level = resolveLevel(levelId);
    if (!level) return { ok: false, reason: 'not-found' };
    var modules = APP_DATA.getModules(levelId);
    var finalTest = APP_DATA.getFinalTest(levelId);
    if (!finalTest) return { ok: false, reason: 'no-final' };
    if (!Storage.isFinalUnlocked(levelId, modules)) return { ok: false, reason: 'locked', level: level, modules: modules };
    return { ok: true };
  }

  function setFlash(message) {
    try { sessionStorage.setItem(FLASH_KEY, message); } catch (e) { /* sessionStorage unavailable */ }
  }

  function consumeFlash() {
    try {
      var msg = sessionStorage.getItem(FLASH_KEY);
      if (msg) sessionStorage.removeItem(FLASH_KEY);
      return msg || null;
    } catch (e) {
      return null;
    }
  }

  return {
    resolveLevel: resolveLevel,
    resolveModule: resolveModule,
    canEnterModule: canEnterModule,
    canEnterFinal: canEnterFinal,
    setFlash: setFlash,
    consumeFlash: consumeFlash
  };
})();

window.Guard = Guard;
