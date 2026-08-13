// Interface preparada para um futuro serviço externo de correção de writing.
// Desativado por padrão: nenhuma chave de API embutida, nenhuma chamada de
// rede acontece hoje. WritingReview (js/writingReview.js) continua sendo a
// única fonte de feedback enquanto ENABLED for false. Se um dia um serviço
// real for integrado, implemente correct() aqui — o resto da aplicação não
// precisa mudar, só ligar ENABLED e ler o resultado em js/render/writing.js.
var WritingCorrectionAdapter = (function () {
  var ENABLED = false;

  function isEnabled() {
    return ENABLED;
  }

  // text: resposta do aluno. item: o objeto de writing do módulo (prompt, minWords, etc.).
  // Retorna uma Promise<{ ok: true, feedback: string } | null>. Com ENABLED
  // false, sempre resolve null — chamador deve continuar usando WritingReview.
  function correct(text, item) {
    if (!ENABLED) return Promise.resolve(null);
    return Promise.reject(new Error('Nenhum serviço externo de correção configurado.'));
  }

  return { isEnabled: isEnabled, correct: correct };
})();

window.WritingCorrectionAdapter = WritingCorrectionAdapter;
