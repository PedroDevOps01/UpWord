var Speech = (function () {
  var synth = window.speechSynthesis || null;
  var voices = [];

  function refreshVoices() {
    voices = synth ? synth.getVoices() : [];
  }
  if (synth) {
    refreshVoices();
    synth.onvoiceschanged = refreshVoices;
  }

  var ACCENT_LANG = {
    american: 'en-US',
    british: 'en-GB',
    australian: 'en-AU'
  };

  function pickVoice(accent) {
    var lang = ACCENT_LANG[accent] || 'en-US';
    var exact = voices.filter(function (v) { return v.lang === lang; });
    if (exact.length) return exact[0];
    var anyEnglish = voices.filter(function (v) { return v.lang && v.lang.indexOf('en') === 0; });
    if (anyEnglish.length) return anyEnglish[0];
    return null;
  }

  function speak(text, accent) {
    if (!synth || !text) return false;
    synth.cancel();
    var utter = new SpeechSynthesisUtterance(text);
    var voice = pickVoice(accent);
    if (voice) utter.voice = voice;
    utter.lang = (voice && voice.lang) || ACCENT_LANG[accent] || 'en-US';
    utter.rate = 0.92;
    utter.pitch = 1;
    synth.speak(utter);
    return true;
  }

  function stop() {
    if (synth) synth.cancel();
  }

  function isTTSSupported() {
    return !!synth;
  }

  var RecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  function normalize(s) {
    return (s || '').toLowerCase().replace(/[^a-z0-9' ]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function levenshtein(a, b) {
    var m = a.length, n = b.length;
    var d = [];
    for (var i = 0; i <= m; i++) d.push([i]);
    for (var j = 0; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) {
      for (j = 1; j <= n; j++) {
        if (a[i - 1] === b[j - 1]) {
          d[i][j] = d[i - 1][j - 1];
        } else {
          d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + 1);
        }
      }
    }
    return d[m][n];
  }

  function similarity(heard, expected) {
    var a = normalize(heard), b = normalize(expected);
    if (!a && !b) return 1;
    if (a === b) return 1;
    var dist = levenshtein(a, b);
    var maxLen = Math.max(a.length, b.length) || 1;
    return Math.max(0, 1 - dist / maxLen);
  }

  function isRecognitionSupported() {
    return !!RecognitionCtor;
  }

  function listen(expectedText, callbacks) {
    callbacks = callbacks || {};
    if (!RecognitionCtor) {
      if (callbacks.onUnsupported) callbacks.onUnsupported();
      return null;
    }
    var rec = new RecognitionCtor();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    rec.onstart = function () { if (callbacks.onStart) callbacks.onStart(); };
    rec.onresult = function (e) {
      var transcript = e.results[0][0].transcript;
      var score = expectedText ? similarity(transcript, expectedText) : null;
      if (callbacks.onResult) callbacks.onResult({ transcript: transcript, score: score });
    };
    rec.onerror = function (e) {
      if (callbacks.onError) callbacks.onError(e.error);
    };
    rec.onend = function () { if (callbacks.onEnd) callbacks.onEnd(); };
    try {
      rec.start();
    } catch (e) {
      if (callbacks.onError) callbacks.onError('start-failed');
    }
    return rec;
  }

  return {
    speak: speak,
    stop: stop,
    isTTSSupported: isTTSSupported,
    isRecognitionSupported: isRecognitionSupported,
    listen: listen,
    similarity: similarity
  };
})();
