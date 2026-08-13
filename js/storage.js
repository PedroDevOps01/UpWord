var Storage = (function () {
  var KEY = 'englishpath_progress_v1';
  var SCHEMA_VERSION = 2;
  var LEITNER_INTERVAL_DAYS = [0, 1, 2, 4, 8, 16, 32];
  var STREAK_MILESTONES = [3, 7, 30, 100];

  function defaultState() {
    return {
      schemaVersion: SCHEMA_VERSION,
      completedModules: {},
      completedFinals: {},
      quizHistory: [],
      points: 0,
      badges: [],
      flashcards: {},
      writingDrafts: {},
      sessionProgress: {},
      placementResult: null,
      placementHistory: [],
      lastVisited: null,
      streak: { count: 0, lastDate: null },
      prefs: { theme: 'light', fontSize: 'md' }
    };
  }

  function migrateLegacyDraftKeys(parsed) {
    try {
      var keysToRemove = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf('draft:') === 0) {
          var draftKey = k.slice('draft:'.length);
          parsed.writingDrafts[draftKey] = localStorage.getItem(k);
          keysToRemove.push(k);
        }
      }
      keysToRemove.forEach(function (k) { localStorage.removeItem(k); });
    } catch (e) { /* localStorage unavailable, nothing to migrate */ }
  }

  // originalVersion must be read BEFORE any default-filling touches parsed,
  // otherwise schemaVersion looks current and legacy migration never runs.
  function migrate(parsed, originalVersion) {
    if (originalVersion < 2) {
      migrateLegacyDraftKeys(parsed);
      parsed._flashcardMigrationPending = true;
    }
    parsed.schemaVersion = SCHEMA_VERSION;
    return parsed;
  }

  function fillDefaults(parsed) {
    var def = defaultState();
    for (var k in def) {
      if (!(k in parsed)) parsed[k] = def[k];
    }
    if (!parsed.streak) parsed.streak = def.streak;
    if (!parsed.prefs) parsed.prefs = def.prefs;
    return parsed;
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      var parsed = JSON.parse(raw);
      var originalVersion = parsed.schemaVersion || 1;
      parsed = fillDefaults(parsed);
      return migrate(parsed, originalVersion);
    } catch (e) {
      return defaultState();
    }
  }

  var state = load();
  var storageAvailable = true;
  try {
    var t = '__test__';
    localStorage.setItem(t, '1');
    localStorage.removeItem(t);
  } catch (e) {
    storageAvailable = false;
  }

  function persist() {
    if (!storageAvailable) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) { /* storage full or blocked, ignore */ }
  }

  // Runs once real vocabulary data (APP_DATA) is available. Maps legacy
  // word-text flashcard keys to the stable vocabulary id of their first
  // occurrence (A1 -> C2 -> electives). If the same word appears in more
  // than one module, only the first occurrence keeps the migrated history —
  // there is no reliable way to know which instance the user actually
  // reviewed under the old word-keyed scheme.
  function migrateFlashcardsByWordToId() {
    if (!state._flashcardMigrationPending) return;
    if (!window.APP_DATA || typeof APP_DATA.getModules !== 'function') return;
    var wordToId = {};
    var allLevels = (APP_DATA.levels || []).concat(APP_DATA.electives || []);
    allLevels.forEach(function (lvl) {
      APP_DATA.getModules(lvl.id).forEach(function (m) {
        (m.vocabulary || []).forEach(function (v) {
          if (v.id && !(v.word in wordToId)) wordToId[v.word] = v.id;
        });
      });
    });
    var oldCards = state.flashcards || {};
    var migrated = {};
    Object.keys(oldCards).forEach(function (word) {
      var id = wordToId[word];
      if (id) migrated[id] = oldCards[word];
    });
    state.flashcards = migrated;
    delete state._flashcardMigrationPending;
    persist();
  }

  function passThreshold() {
    return (window.APP_DATA && typeof APP_DATA.PASS_THRESHOLD === 'number') ? APP_DATA.PASS_THRESHOLD : 0.6;
  }

  function moduleThreshold(quizScore, quizTotal) {
    return quizTotal > 0 && (quizScore / quizTotal) >= passThreshold();
  }

  function isModuleCompleted(moduleId) {
    return !!state.completedModules[moduleId];
  }

  function isFinalCompleted(levelId) {
    return !!state.completedFinals[levelId];
  }

  function isModuleUnlocked(levelId, modules, moduleIndex) {
    if (moduleIndex === 0) return true;
    var prev = modules[moduleIndex - 1];
    return !!prev && isModuleCompleted(prev.id);
  }

  function isFinalUnlocked(levelId, modules) {
    return modules.length > 0 && modules.every(function (m) { return isModuleCompleted(m.id); });
  }

  function addBadge(badge) {
    if (state.badges.indexOf(badge) === -1) {
      state.badges.push(badge);
      return true;
    }
    return false;
  }

  function dateOnly(d) {
    return d.toISOString().slice(0, 10);
  }

  function touchStreak() {
    var today = dateOnly(new Date());
    if (state.streak.lastDate === today) return;
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (state.streak.lastDate === dateOnly(yesterday)) {
      state.streak.count += 1;
    } else {
      state.streak.count = 1;
    }
    state.streak.lastDate = today;
    STREAK_MILESTONES.forEach(function (n) {
      if (state.streak.count >= n) addBadge('streak-' + n);
    });
    persist();
  }

  // levelId + modules are required here (not just moduleId) so that this
  // function itself refuses to persist completion for a module that isn't
  // actually unlocked yet, even if called directly (e.g. from a console),
  // bypassing the router-level guard.
  function completeModule(levelId, moduleId, quizScore, quizTotal) {
    var modules = (window.APP_DATA && APP_DATA.getModules(levelId)) || [];
    var idx = modules.findIndex(function (m) { return m.id === moduleId; });
    if (idx === -1 || !isModuleUnlocked(levelId, modules, idx)) {
      return { passed: false, isNew: false, earnedPoints: 0, blocked: true };
    }
    var passed = moduleThreshold(quizScore, quizTotal);
    if (passed) {
      touchStreak();
      var isNew = !state.completedModules[moduleId];
      state.completedModules[moduleId] = {
        completedAt: new Date().toISOString(),
        quizScore: quizScore,
        quizTotal: quizTotal
      };
      var earnedPoints = 0;
      if (isNew) {
        earnedPoints = 10 + Math.round((quizScore / quizTotal) * 20);
        state.points += earnedPoints;
        addBadge(moduleId + '-badge');
      }
      if (quizScore === quizTotal) addBadge('perfect-' + moduleId);
      persist();
      return { passed: true, isNew: isNew, earnedPoints: earnedPoints };
    }
    persist();
    return { passed: false, isNew: false, earnedPoints: 0 };
  }

  function completeFinal(levelId, quizScore, quizTotal) {
    var modules = (window.APP_DATA && APP_DATA.getModules(levelId)) || [];
    if (!isFinalUnlocked(levelId, modules)) {
      return { passed: false, isNew: false, earnedPoints: 0, blocked: true };
    }
    var passed = moduleThreshold(quizScore, quizTotal);
    if (passed) {
      touchStreak();
      var isNew = !state.completedFinals[levelId];
      state.completedFinals[levelId] = {
        completedAt: new Date().toISOString(),
        quizScore: quizScore,
        quizTotal: quizTotal
      };
      var earnedPoints = 0;
      if (isNew) {
        earnedPoints = 50;
        state.points += earnedPoints;
        addBadge(levelId + '-champion-badge');
      }
      persist();
      return { passed: true, isNew: isNew, earnedPoints: earnedPoints };
    }
    persist();
    return { passed: false, isNew: false, earnedPoints: 0 };
  }

  function checkNoRetryBadge(levelId, modules) {
    var allFirstTry = modules.length > 0 && modules.every(function (m) {
      var attempts = state.quizHistory.filter(function (h) { return h.refId === m.id; });
      return attempts.length === 1 && (attempts[0].score / attempts[0].total) >= passThreshold();
    });
    if (allFirstTry) {
      addBadge('no-retry-' + levelId);
      persist();
    }
    return allFirstTry;
  }

  function recordQuizAttempt(entry) {
    entry.date = new Date().toISOString();
    state.quizHistory.push(entry);
    if (state.quizHistory.length > 200) state.quizHistory.shift();
    persist();
  }

  function getQuizHistory(refId) {
    return state.quizHistory.filter(function (h) { return h.refId === refId; });
  }

  function setPlacementResult(levelId, correctCount, totalCount) {
    var entry = { levelId: levelId, date: new Date().toISOString(), correctCount: correctCount, totalCount: totalCount };
    state.placementResult = entry;
    state.placementHistory.push(entry);
    if (state.placementHistory.length > 50) state.placementHistory.shift();
    persist();
  }

  function getPlacementHistory() {
    return state.placementHistory.slice();
  }

  function getFlashcard(id) {
    return state.flashcards[id] || { box: 0, nextReview: null, seen: 0, correct: 0 };
  }

  function reviewFlashcard(id, wasCorrect) {
    touchStreak();
    var card = getFlashcard(id);
    card.seen += 1;
    if (wasCorrect) {
      card.correct += 1;
      card.box = Math.min(card.box + 1, LEITNER_INTERVAL_DAYS.length - 1);
    } else {
      card.box = 0;
    }
    var days = LEITNER_INTERVAL_DAYS[card.box];
    var next = new Date();
    next.setDate(next.getDate() + days);
    card.nextReview = next.toISOString();
    state.flashcards[id] = card;
    persist();
    var totalReviewed = Object.keys(state.flashcards).reduce(function (sum, key) {
      return sum + (state.flashcards[key].seen || 0);
    }, 0);
    if (totalReviewed >= 50) addBadge('flashcards-50');
    if (totalReviewed >= 200) addBadge('flashcards-200');
    return card;
  }

  function isCardDue(id) {
    var card = state.flashcards[id];
    if (!card || !card.nextReview) return true;
    return new Date(card.nextReview).getTime() <= Date.now();
  }

  function setLastVisited(hash) {
    state.lastVisited = hash;
    persist();
  }

  function getPref(key) {
    return state.prefs[key];
  }

  function setPref(key, value) {
    state.prefs[key] = value;
    persist();
  }

  function getWritingDraft(draftKey) {
    return state.writingDrafts[draftKey] || '';
  }

  function setWritingDraft(draftKey, text) {
    state.writingDrafts[draftKey] = text;
    persist();
  }

  function clearWritingDraft(draftKey) {
    delete state.writingDrafts[draftKey];
    persist();
  }

  function markWritingReviewed(moduleId) {
    var isFirst = !state.badges.length || state.badges.indexOf('first-writing-review') === -1;
    if (isFirst) addBadge('first-writing-review');
    persist();
  }

  function markSpeakingAttempt(moduleId) {
    if (addBadge('first-speaking-attempt')) persist();
  }

  function isSessionCompleted(moduleId, tab) {
    return !!(state.sessionProgress[moduleId] && state.sessionProgress[moduleId][tab]);
  }

  function markSessionCompleted(moduleId, tab) {
    if (!state.sessionProgress[moduleId]) state.sessionProgress[moduleId] = {};
    state.sessionProgress[moduleId][tab] = true;
    persist();
  }

  // As 9 sessões de um módulo: as 8 abas de conteúdo + o quiz do módulo
  // (cuja conclusão já é rastreada por completedModules, não por sessionProgress).
  var MODULE_SESSION_KEYS = ['lesson', 'vocabulary', 'grammar', 'listening', 'reading', 'writing', 'speaking', 'exercises', 'quiz'];

  function getModuleSessionSummary(moduleId) {
    var sessions = MODULE_SESSION_KEYS.map(function (key) {
      var done = key === 'quiz' ? isModuleCompleted(moduleId) : isSessionCompleted(moduleId, key);
      return { key: key, done: done };
    });
    var doneCount = sessions.filter(function (s) { return s.done; }).length;
    var next = sessions.filter(function (s) { return !s.done; })[0] || null;
    return { sessions: sessions, done: doneCount, total: MODULE_SESSION_KEYS.length, next: next };
  }

  function exportProgress() {
    return JSON.stringify(state, null, 2);
  }

  function isPlainObject(v) {
    return !!v && typeof v === 'object' && !Array.isArray(v);
  }

  // Validates shape/types before an imported file is allowed to replace the
  // current state. Returns { ok: true } or { ok: false, error: <mensagem em pt-br> }.
  function validateImportedShape(parsed) {
    if (!isPlainObject(parsed)) return { ok: false, error: 'O arquivo não contém um objeto de progresso válido.' };
    if ('completedModules' in parsed && !isPlainObject(parsed.completedModules)) return { ok: false, error: '"completedModules" deveria ser um objeto.' };
    if ('completedFinals' in parsed && !isPlainObject(parsed.completedFinals)) return { ok: false, error: '"completedFinals" deveria ser um objeto.' };
    if ('quizHistory' in parsed && !Array.isArray(parsed.quizHistory)) return { ok: false, error: '"quizHistory" deveria ser uma lista.' };
    if ('points' in parsed && typeof parsed.points !== 'number') return { ok: false, error: '"points" deveria ser um número.' };
    if ('badges' in parsed && !Array.isArray(parsed.badges)) return { ok: false, error: '"badges" deveria ser uma lista.' };
    if ('flashcards' in parsed && !isPlainObject(parsed.flashcards)) return { ok: false, error: '"flashcards" deveria ser um objeto.' };
    if ('writingDrafts' in parsed && !isPlainObject(parsed.writingDrafts)) return { ok: false, error: '"writingDrafts" deveria ser um objeto.' };
    if ('sessionProgress' in parsed && !isPlainObject(parsed.sessionProgress)) return { ok: false, error: '"sessionProgress" deveria ser um objeto.' };
    if ('placementHistory' in parsed && !Array.isArray(parsed.placementHistory)) return { ok: false, error: '"placementHistory" deveria ser uma lista.' };
    if ('lastVisited' in parsed && parsed.lastVisited !== null && typeof parsed.lastVisited !== 'string') return { ok: false, error: '"lastVisited" deveria ser texto ou nulo.' };
    if ('streak' in parsed) {
      if (!isPlainObject(parsed.streak)) return { ok: false, error: '"streak" deveria ser um objeto.' };
      if ('count' in parsed.streak && typeof parsed.streak.count !== 'number') return { ok: false, error: '"streak.count" deveria ser um número.' };
    }
    if ('prefs' in parsed && !isPlainObject(parsed.prefs)) return { ok: false, error: '"prefs" deveria ser um objeto.' };
    return { ok: true };
  }

  function importProgress(json) {
    var parsed;
    try {
      parsed = JSON.parse(json);
    } catch (e) {
      return { ok: false, error: 'O arquivo não é um JSON válido.' };
    }
    var check = validateImportedShape(parsed);
    if (!check.ok) return check;
    var originalVersion = parsed.schemaVersion || 1;
    parsed = fillDefaults(parsed);
    state = migrate(parsed, originalVersion);
    persist();
    migrateFlashcardsByWordToId();
    return { ok: true };
  }

  function resetAll() {
    state = defaultState();
    persist();
  }

  return {
    state: state,
    storageAvailable: storageAvailable,
    isModuleCompleted: isModuleCompleted,
    isFinalCompleted: isFinalCompleted,
    isModuleUnlocked: isModuleUnlocked,
    isFinalUnlocked: isFinalUnlocked,
    completeModule: completeModule,
    completeFinal: completeFinal,
    checkNoRetryBadge: checkNoRetryBadge,
    recordQuizAttempt: recordQuizAttempt,
    getQuizHistory: getQuizHistory,
    setPlacementResult: setPlacementResult,
    getPlacementHistory: getPlacementHistory,
    getFlashcard: getFlashcard,
    reviewFlashcard: reviewFlashcard,
    isCardDue: isCardDue,
    setLastVisited: setLastVisited,
    getPref: getPref,
    setPref: setPref,
    getWritingDraft: getWritingDraft,
    setWritingDraft: setWritingDraft,
    clearWritingDraft: clearWritingDraft,
    markWritingReviewed: markWritingReviewed,
    markSpeakingAttempt: markSpeakingAttempt,
    isSessionCompleted: isSessionCompleted,
    markSessionCompleted: markSessionCompleted,
    getModuleSessionSummary: getModuleSessionSummary,
    touchStreak: touchStreak,
    exportProgress: exportProgress,
    importProgress: importProgress,
    resetAll: resetAll,
    migrateFlashcardsByWordToId: migrateFlashcardsByWordToId,
    passThreshold: passThreshold
  };
})();
