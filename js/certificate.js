var Certificate = (function () {

  function generate(level) {
    var canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 850;
    var ctx = canvas.getContext('2d');

    var grad = ctx.createLinearGradient(0, 0, 1200, 850);
    grad.addColorStop(0, '#F6F7F4');
    grad.addColorStop(1, level.color);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1200, 850);

    ctx.fillStyle = 'rgba(255,255,255,0.94)';
    ctx.fillRect(60, 60, 1080, 730);
    ctx.strokeStyle = level.color;
    ctx.lineWidth = 4;
    ctx.strokeRect(60, 60, 1080, 730);

    ctx.textAlign = 'center';
    ctx.fillStyle = level.color;
    ctx.font = '700 30px Georgia, serif';
    ctx.fillText('UPWORD', 600, 165);

    ctx.fillStyle = '#14213D';
    ctx.font = '700 50px Georgia, serif';
    ctx.fillText('Certificado de Conclusão', 600, 255);

    ctx.font = '400 24px Georgia, serif';
    ctx.fillStyle = '#3A4152';
    ctx.fillText('Este certificado confirma a conclusão do nível', 600, 335);

    ctx.font = '700 62px Georgia, serif';
    ctx.fillStyle = level.color;
    ctx.fillText(level.code + ' — ' + level.name, 600, 425);

    ctx.font = '400 21px Georgia, serif';
    ctx.fillStyle = '#3A4152';
    ctx.fillText(level.tagline, 600, 470);

    ctx.fillStyle = '#7C8798';
    ctx.font = '400 19px Georgia, serif';
    var dateStr = new Date().toLocaleDateString('pt-BR');
    ctx.fillText('Concluído em ' + dateStr, 600, 545);

    var barColors = ['#128077', '#146E93', '#1F5C9E', '#3A4EA0', '#4B3E93'];
    var baseX = 460, baseY = 700;
    barColors.forEach(function (c, i) {
      var h = 26 + i * 20;
      ctx.fillStyle = c;
      ctx.fillRect(baseX + i * 58, baseY - h, 42, h);
    });

    canvas.toBlob(function (blob) {
      if (!blob) return;
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'upword-certificado-' + level.id + '.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
    });
  }

  return { generate: generate };
})();

window.Certificate = Certificate;
