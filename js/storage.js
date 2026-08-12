var Storage = (function () {
  var KEY = 'englishpath_progress_v1';
  var LEITNER_INTERVAL_DAYS = [0, 1, 2, 4, 8, 16, 32];
  var STREAK_MILESTONES = [3, 7, 30, 100];

  function defaultState() {
    return {
      completedModules: {},
      completedFinals: {},
      quizHistory: [],
      points: 0,
      badges: [],
      flashcards: {},
      placementResult: null,
      lastVisited: null,
      streak: { count: 0, lastDate: null },
      prefs: { theme: 'light', fontSize: 'md' }
    };
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      var parsed = JSON.parse(raw);
      var def = defaultState();
      for (var k in def) {
        if (!(k in parsed)) parsed[k] = def[k];
      }
      if (!parsed.streak) parsed.streak = def.streak;
      if (!parsed.prefs) parsed.prefs = def.prefs;
      return parsed;
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

  function moduleThreshold(quizScore, quizTotal) {
    return quizTotal > 0 && (quizScore / quizTotal) >= 0.6;
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
    return isModuleCompleted(prev.id);
  }

  function isFinalUnlocked(levelId, modules) {
    return modules.every(function (m) { return isModuleCompleted(m.id); });
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

  function completeModule(moduleId, quizScore, quizTotal) {
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
      return attempts.length === 1 && (attempts[0].score / attempts[0].total) >= 0.6;
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

  function setPlacementResult(levelId, answers) {
    state.placementResult = { levelId: levelId, date: new Date().toISOString() };
    persist();
  }

  function getFlashcard(word) {
    return state.flashcards[word] || { box: 0, nextReview: null, seen: 0, correct: 0 };
  }

  function reviewFlashcard(word, wasCorrect) {
    touchStreak();
    var card = getFlashcard(word);
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
    state.flashcards[word] = card;
    persist();
    return card;
  }

  function isCardDue(word) {
    var card = state.flashcards[word];
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

  function exportProgress() {
    return JSON.stringify(state, null, 2);
  }

  function importProgress(json) {
    try {
      var parsed = JSON.parse(json);
      var def = defaultState();
      for (var k in def) {
        if (!(k in parsed)) parsed[k] = def[k];
      }
      state = parsed;
      persist();
      return true;
    } catch (e) {
      return false;
    }
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
    getFlashcard: getFlashcard,
    reviewFlashcard: reviewFlashcard,
    isCardDue: isCardDue,
    setLastVisited: setLastVisited,
    getPref: getPref,
    setPref: setPref,
    touchStreak: touchStreak,
    exportProgress: exportProgress,
    importProgress: importProgress,
    resetAll: resetAll
  };
})();
