// Prática de fala com máquina de estados explícita. Detecta microfone,
// MediaRecorder e SpeechRecognition separadamente; nunca deixa a tela sem
// um caminho de prática (mesmo sem nenhuma API de voz disponível). Nunca
// promete "nota de pronúncia" — apenas "similaridade de transcrição" e uma
// rubrica leve, com aviso de que isto não é uma certificação de fluência.
var Speaking = (function () {
  var STATES = ['idle', 'requesting-permission', 'recording', 'processing', 'result', 'unsupported', 'denied', 'error'];

  function hasMediaSupport() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  }

  function normalizeWords(text) {
    return (text || '').toLowerCase().replace(/[^a-z0-9' ]/g, ' ').split(/\s+/).filter(Boolean);
  }

  function wordDiff(expected, heard) {
    var expWords = normalizeWords(expected);
    var heardWords = normalizeWords(heard);
    var heardSet = {};
    heardWords.forEach(function (w) { heardSet[w] = true; });
    var expSet = {};
    expWords.forEach(function (w) { expSet[w] = true; });
    var omitted = expWords.filter(function (w) { return !heardSet[w]; });
    var added = heardWords.filter(function (w) { return !expSet[w]; });
    return { omitted: omitted, added: added, expectedCount: expWords.length };
  }

  function estimateRhythm(durationSeconds, expectedText) {
    var words = normalizeWords(expectedText).length || 1;
    var expectedSeconds = words / 2.3; // ~2.3 palavras/seg é um ritmo confortável de fala
    if (!durationSeconds || durationSeconds <= 0) return { label: 'não verificável', detail: 'Duração da gravação indisponível.' };
    var ratio = durationSeconds / expectedSeconds;
    if (ratio >= 0.6 && ratio <= 1.8) return { label: 'dentro do esperado (estimativa)', detail: 'Gravação de ' + durationSeconds.toFixed(1) + 's para uma frase estimada em ' + expectedSeconds.toFixed(1) + 's.' };
    return { label: ratio < 0.6 ? 'mais rápido que o esperado (estimativa)' : 'mais lento que o esperado (estimativa)', detail: 'Gravação de ' + durationSeconds.toFixed(1) + 's para uma frase estimada em ' + expectedSeconds.toFixed(1) + 's.' };
  }

  function buildRubric(similarityScore, diff, durationSeconds, phrase) {
    var intelligibility = similarityScore >= 0.85 ? 'alta' : (similarityScore >= 0.6 ? 'média' : 'baixa');
    var completeness = diff.expectedCount > 0 ? Math.round(((diff.expectedCount - diff.omitted.length) / diff.expectedCount) * 100) : null;
    var rhythm = estimateRhythm(durationSeconds, phrase);
    return {
      intelligibility: intelligibility,
      completeness: completeness,
      rhythm: rhythm,
      omitted: diff.omitted,
      added: diff.added
    };
  }

  // container: onde a UI é inserida. item: { phrase, tip }. moduleId: para registrar tentativa/sessão.
  function mount(container, item, moduleId) {
    var uid = 'speaking-' + Math.random().toString(36).slice(2, 8);
    var state = 'idle';
    var mediaStream = null;
    var mediaRecorder = null;
    var recognizer = null;
    var recordedChunks = [];
    var recordedBlobUrl = null;
    var recordStartTime = null;
    var lastTranscript = null;

    var mediaOk = hasMediaSupport();
    var recognitionOk = Speech.isRecognitionSupported();

    container.insertAdjacentHTML('beforeend', '<div class="speaking-widget" id="' + uid + '"></div>');
    var root = document.getElementById(uid);

    function setState(next) {
      state = next;
      render();
    }

    function cleanupStream() {
      if (mediaStream) {
        mediaStream.getTracks().forEach(function (t) { t.stop(); });
        mediaStream = null;
      }
    }

    function releaseRecordingUrl() {
      if (recordedBlobUrl) {
        URL.revokeObjectURL(recordedBlobUrl);
        recordedBlobUrl = null;
      }
    }

    function startRecording() {
      setState('requesting-permission');
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        mediaStream = stream;
        recordedChunks = [];
        try {
          mediaRecorder = new MediaRecorder(stream);
        } catch (e) {
          setState('error');
          return;
        }
        mediaRecorder.addEventListener('dataavailable', function (e) {
          if (e.data && e.data.size > 0) recordedChunks.push(e.data);
        });
        mediaRecorder.addEventListener('stop', function () {
          releaseRecordingUrl();
          var blob = new Blob(recordedChunks, { type: 'audio/webm' });
          recordedBlobUrl = recordedChunks.length ? URL.createObjectURL(blob) : null;
          cleanupStream();
          setState('processing');
          setTimeout(function () { setState('result'); }, 250);
        });
        recordStartTime = Date.now();
        mediaRecorder.start();
        lastTranscript = null;
        if (recognitionOk) {
          recognizer = Speech.listen(item.phrase, {
            onResult: function (res) { lastTranscript = res; },
            onError: function () { /* segue sem transcrição; a gravação continua valendo */ }
          });
        }
        setState('recording');
      }).catch(function (err) {
        if (err && err.name === 'NotAllowedError') setState('denied');
        else setState('error');
      });
    }

    function stopRecording() {
      var durationSeconds = recordStartTime ? (Date.now() - recordStartTime) / 1000 : 0;
      root.setAttribute('data-duration', durationSeconds);
      if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
      if (recognizer && recognizer.stop) { try { recognizer.stop(); } catch (e) {} }
    }

    function deleteRecording() {
      releaseRecordingUrl();
      lastTranscript = null;
      setState('idle');
    }

    function markPracticed() {
      Storage.markSpeakingAttempt(moduleId);
      Storage.markSessionCompleted(moduleId, 'speaking');
      setState('result');
    }

    function renderResult() {
      var durationSeconds = parseFloat(root.getAttribute('data-duration')) || 0;
      var playbackHtml = recordedBlobUrl
        ? '<audio controls src="' + recordedBlobUrl + '" aria-label="Sua gravação"></audio>'
        : '<p class="muted">Nenhum áudio gravado.</p>';

      var transcriptHtml = '';
      if (lastTranscript && typeof lastTranscript.score === 'number') {
        var pct = Math.round(lastTranscript.score * 100);
        var diff = wordDiff(item.phrase, lastTranscript.transcript);
        var rubric = buildRubric(lastTranscript.score, diff, durationSeconds, item.phrase);
        var nextTip = diff.omitted.length
          ? 'Na próxima tentativa, tente incluir: ' + diff.omitted.join(', ') + '.'
          : (pct < 85 ? 'Na próxima tentativa, fale um pouco mais devagar e claro.' : 'Ótimo — tente repetir no mesmo ritmo em voz mais natural.');
        transcriptHtml =
          '<div class="speaking-result-block">' +
            '<p><strong>Você disse:</strong> "' + lastTranscript.transcript + '"</p>' +
            '<p><strong>Similaridade de transcrição:</strong> ' + pct + '% ' +
              '<span class="muted">(comparação de texto, não é uma nota de pronúncia)</span></p>' +
            (diff.omitted.length ? '<p class="muted">Possivelmente omitido: ' + diff.omitted.join(', ') + '</p>' : '') +
            (diff.added.length ? '<p class="muted">Palavras extras captadas: ' + diff.added.join(', ') + '</p>' : '') +
            '<ul class="speaking-rubric">' +
              '<li>Inteligibilidade (estimativa): ' + rubric.intelligibility + '</li>' +
              (rubric.completeness !== null ? '<li>Completude da frase: ' + rubric.completeness + '%</li>' : '') +
              '<li>Ritmo: ' + rubric.rhythm.label + '</li>' +
              '<li>Próxima tentativa: ' + nextTip + '</li>' +
            '</ul>' +
            '<p class="muted writing-disclaimer">Isto é uma estimativa automática de similaridade de texto, não uma certificação de fluência ou pronúncia. O navegador não permite analisar sons/fonemas específicos — por isso não indicamos "sons a revisar" individualmente.</p>' +
          '</div>';
      } else if (recognitionOk) {
        transcriptHtml = '<p class="muted">Não foi possível captar uma transcrição desta vez. A gravação em áudio abaixo continua válida.</p>';
      }

      root.innerHTML =
        '<div class="speaking-status" aria-live="polite">Resultado da prática.</div>' +
        playbackHtml +
        transcriptHtml +
        '<div class="speaking-controls">' +
          '<button type="button" class="btn btn-secondary" data-action="record-again">🎙 Gravar de novo</button>' +
          (recordedBlobUrl ? '<button type="button" class="btn-text-danger" data-action="delete">Apagar gravação</button>' : '') +
        '</div>';

      root.querySelector('[data-action="record-again"]').addEventListener('click', function () { deleteRecording(); startRecording(); });
      var delBtn = root.querySelector('[data-action="delete"]');
      if (delBtn) delBtn.addEventListener('click', deleteRecording);

      Storage.markSpeakingAttempt(moduleId);
      Storage.markSessionCompleted(moduleId, 'speaking');
    }

    function renderManualFallback(reasonText) {
      root.innerHTML =
        '<div class="speaking-status" aria-live="polite">' + reasonText + '</div>' +
        '<p class="muted">Prática manual: ouça o modelo com os botões de sotaque acima, repita em voz alta e marque quando praticar.</p>' +
        '<button type="button" class="btn btn-primary" data-action="practiced">✅ Pratiquei esta frase</button>';
      root.querySelector('[data-action="practiced"]').addEventListener('click', markPracticed);
    }

    function render() {
      if (state === 'idle') {
        if (!mediaOk) {
          renderManualFallback('Seu navegador não permite gravar áudio aqui.');
          return;
        }
        root.innerHTML =
          '<div class="speaking-consent">' +
            '<p class="muted">Ao clicar, seu navegador vai pedir permissão de microfone. O áudio gravado fica só nesta aba, nunca é enviado para nenhum servidor, e você pode apagá-lo a qualquer momento.</p>' +
            '<button type="button" class="btn btn-secondary" data-action="start">🎙 Autorizar microfone e gravar</button>' +
          '</div>';
        root.querySelector('[data-action="start"]').addEventListener('click', startRecording);
        return;
      }
      if (state === 'requesting-permission') {
        root.innerHTML = '<div class="speaking-status" aria-live="polite">Aguardando permissão do microfone…</div>';
        return;
      }
      if (state === 'recording') {
        root.innerHTML =
          '<div class="speaking-status is-recording" aria-live="polite">🔴 Gravando… fale a frase acima.</div>' +
          '<button type="button" class="btn btn-primary" data-action="stop">⏹ Parar gravação</button>';
        root.querySelector('[data-action="stop"]').addEventListener('click', stopRecording);
        return;
      }
      if (state === 'processing') {
        root.innerHTML = '<div class="speaking-status" aria-live="polite">Processando gravação…</div>';
        return;
      }
      if (state === 'result') {
        renderResult();
        return;
      }
      if (state === 'denied') {
        renderManualFallback('Permissão de microfone negada. Sem problema — dá para praticar de outro jeito.');
        return;
      }
      if (state === 'error') {
        root.innerHTML =
          '<div class="speaking-status" aria-live="assertive">Não foi possível gravar agora.</div>' +
          '<p class="muted">Pode ser um problema temporário do microfone — tente de novo, ou pratique de outro jeito enquanto isso.</p>' +
          '<div class="speaking-controls">' +
            '<button type="button" class="btn btn-secondary" data-action="retry">🎙 Tentar de novo</button>' +
            '<button type="button" class="btn btn-primary" data-action="practiced">✅ Pratiquei esta frase</button>' +
          '</div>';
        root.querySelector('[data-action="retry"]').addEventListener('click', function () { setState('idle'); });
        root.querySelector('[data-action="practiced"]').addEventListener('click', markPracticed);
        return;
      }
      renderManualFallback('Gravação de voz não disponível.');
    }

    render();
    return {
      destroy: function () { cleanupStream(); releaseRecordingUrl(); }
    };
  }

  return { mount: mount, hasMediaSupport: hasMediaSupport };
})();

window.Speaking = Speaking;
