// Player de áudio reutilizado por listening, "ouvir texto completo" (reading)
// e ditado. Com audioSrc válido usa um <audio> real (play/pause/posição/
// velocidade/volume funcionam de verdade). Sem audioSrc — ou se o arquivo
// falhar ao carregar — cai para um único botão de voz do navegador (TTS ao
// vivo), sempre deixando claro qual dos dois está em uso. Nunca apresenta
// voz sintética como gravação humana.
var Player = (function () {
  var DEFAULT_SPEEDS = [0.75, 1, 1.25];
  var uidCounter = 0;

  function formatTime(sec) {
    if (!isFinite(sec) || isNaN(sec) || sec < 0) return '0:00';
    var m = Math.floor(sec / 60);
    var s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function speakFallback(root, config, statusEl) {
    var result = Speech.speak(config.transcript || config.text || '', config.accent);
    if (!result || result.ok === false) {
      statusEl.textContent = 'Não foi possível reproduzir com voz do navegador.';
      return;
    }
    if (result.fallback) {
      statusEl.textContent = 'Tocando com voz do navegador (a voz "' + (config.accent || 'americana') + '" pedida não foi encontrada; usando "' + (result.usedVoice || 'voz padrão em inglês') + '").';
    } else {
      statusEl.textContent = 'Tocando com voz do navegador (' + (result.usedVoice || 'inglês') + ').';
    }
  }

  function renderFallback(container, config) {
    var uid = 'player-' + (++uidCounter);
    var label = config.fallbackLabel || 'Ouvir com voz do navegador (TTS)';
    container.insertAdjacentHTML('beforeend',
      '<div class="audio-player audio-player-fallback" id="' + uid + '">' +
        '<button type="button" class="btn btn-secondary audio-btn-tts" aria-label="' + label + ' — voz sintética do navegador">' +
          Icon('sound', { size: 15 }) + ' ' + label +
        '</button>' +
        '<p class="audio-source-note">Alternativa: voz sintética do navegador, sem arquivo de áudio dedicado a este trecho.</p>' +
        '<p class="audio-status" aria-live="polite"></p>' +
      '</div>'
    );
    var root = document.getElementById(uid);
    var statusEl = root.querySelector('.audio-status');
    root.querySelector('.audio-btn-tts').addEventListener('click', function () {
      speakFallback(root, config, statusEl);
    });
    return root;
  }

  function renderReal(container, config) {
    var uid = 'player-' + (++uidCounter);
    var speeds = config.speedLevels || DEFAULT_SPEEDS;
    var speedOptions = speeds.map(function (s) {
      return '<option value="' + s + '"' + (s === 1 ? ' selected' : '') + '>' + s + 'x</option>';
    }).join('');

    container.insertAdjacentHTML('beforeend',
      '<div class="audio-player" id="' + uid + '" data-state="loading">' +
        '<div class="audio-player-row">' +
          '<button type="button" class="audio-btn-play" aria-label="Reproduzir áudio">▶</button>' +
          '<input type="range" class="audio-seek" min="0" max="100" value="0" step="0.1" aria-label="Posição do áudio" aria-valuetext="0:00">' +
          '<span class="audio-time"><span class="audio-time-current">0:00</span> / <span class="audio-time-total">0:00</span></span>' +
        '</div>' +
        '<div class="audio-player-row audio-player-controls">' +
          '<label class="audio-speed-label">Velocidade' +
            '<select class="audio-speed-select" aria-label="Velocidade de reprodução">' + speedOptions + '</select>' +
          '</label>' +
          '<button type="button" class="audio-btn-restart" aria-label="Reiniciar áudio do início">' + Icon('flag', { size: 14 }) + ' Reiniciar</button>' +
          '<label class="audio-volume-label">' + Icon('sound', { size: 14 }) +
            '<input type="range" class="audio-volume" min="0" max="1" step="0.05" value="1" aria-label="Volume">' +
          '</label>' +
        '</div>' +
        '<p class="audio-source-note" title="Voz sintética pré-gerada em arquivo, não é uma gravação humana.">🔊 Áudio: TTS pré-gerado (voz sintética em arquivo, não é gravação humana)</p>' +
        '<p class="audio-status" aria-live="polite">Carregando áudio…</p>' +
      '</div>'
    );

    var root = document.getElementById(uid);
    var playBtn = root.querySelector('.audio-btn-play');
    var seek = root.querySelector('.audio-seek');
    var timeCurrent = root.querySelector('.audio-time-current');
    var timeTotal = root.querySelector('.audio-time-total');
    var speedSelect = root.querySelector('.audio-speed-select');
    var restartBtn = root.querySelector('.audio-btn-restart');
    var volume = root.querySelector('.audio-volume');
    var statusEl = root.querySelector('.audio-status');

    var audio = new Audio(config.audioSrc);
    var seeking = false;

    audio.addEventListener('loadedmetadata', function () {
      seek.max = audio.duration || 0;
      timeTotal.textContent = formatTime(audio.duration);
      root.setAttribute('data-state', 'ready');
      statusEl.textContent = 'Pronto para tocar.';
    });
    audio.addEventListener('timeupdate', function () {
      if (seeking) return;
      seek.value = audio.currentTime;
      seek.setAttribute('aria-valuetext', formatTime(audio.currentTime));
      timeCurrent.textContent = formatTime(audio.currentTime);
    });
    audio.addEventListener('play', function () {
      playBtn.textContent = '⏸';
      playBtn.setAttribute('aria-label', 'Pausar áudio');
      root.setAttribute('data-state', 'playing');
      statusEl.textContent = 'Tocando.';
    });
    audio.addEventListener('pause', function () {
      playBtn.textContent = '▶';
      playBtn.setAttribute('aria-label', 'Reproduzir áudio');
      if (root.getAttribute('data-state') !== 'error') root.setAttribute('data-state', 'paused');
      statusEl.textContent = 'Pausado.';
    });
    audio.addEventListener('ended', function () {
      playBtn.textContent = '▶';
      playBtn.setAttribute('aria-label', 'Reproduzir áudio');
      root.setAttribute('data-state', 'ended');
      statusEl.textContent = 'Áudio concluído.';
    });
    audio.addEventListener('error', function () {
      root.setAttribute('data-state', 'error');
      statusEl.textContent = 'Não foi possível carregar este arquivo de áudio. Use a alternativa abaixo.';
      root.querySelector('.audio-player-row').setAttribute('hidden', '');
      root.querySelectorAll('.audio-player-controls, .audio-source-note').forEach(function (el) { el.setAttribute('hidden', ''); });
      renderFallback(root, config);
    });

    playBtn.addEventListener('click', function () {
      if (audio.paused) audio.play(); else audio.pause();
    });
    seek.addEventListener('input', function () {
      seeking = true;
      timeCurrent.textContent = formatTime(parseFloat(seek.value));
    });
    seek.addEventListener('change', function () {
      audio.currentTime = parseFloat(seek.value);
      seeking = false;
    });
    speedSelect.addEventListener('change', function () {
      audio.playbackRate = parseFloat(speedSelect.value);
    });
    restartBtn.addEventListener('click', function () {
      audio.currentTime = 0;
      audio.play();
    });
    volume.addEventListener('input', function () {
      audio.volume = parseFloat(volume.value);
    });

    return root;
  }

  // container: elemento onde o player será inserido (insertAdjacentHTML).
  // config: { audioSrc, audioSource: 'tts-pregenerated'|null, transcript/text, accent, speedLevels }
  function mount(container, config) {
    if (config && config.audioSrc) return renderReal(container, config);
    return renderFallback(container, config || {});
  }

  return { mount: mount, formatTime: formatTime };
})();

window.Player = Player;
