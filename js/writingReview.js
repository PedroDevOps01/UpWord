// Revisão local e objetiva de writing. Nunca afirma correção gramatical ou
// nota CEFR — só verifica regras mecânicas (contagem, pontuação, presença de
// palavras/estruturas quando o próprio exercício as define). Critérios sem
// dado suficiente no item retornam status "não verificável" em vez de
// inventar uma avaliação.
var WritingReview = (function () {
  var STOP_WORDS = {
    the: 1, a: 1, an: 1, and: 1, to: 1, of: 1, in: 1, on: 1, is: 1, are: 1, i: 1, it: 1,
    my: 1, you: 1, for: 1, at: 1, with: 1, was: 1, were: 1, this: 1, that: 1, he: 1, she: 1
  };

  function countWords(text) {
    return (text || '').trim().split(/\s+/).filter(Boolean).length;
  }

  function countSentences(text) {
    var trimmed = (text || '').trim();
    if (!trimmed) return 0;
    return trimmed.split(/[.!?]+/).map(function (s) { return s.trim(); }).filter(Boolean).length;
  }

  function startsWithCapital(text) {
    var t = (text || '').trim();
    var m = t.match(/[A-Za-z]/);
    if (!m) return false;
    return m[0] === m[0].toUpperCase();
  }

  function endsWithPunctuation(text) {
    return /[.!?]["')]?\s*$/.test((text || '').trim());
  }

  function findExcessiveRepetition(text) {
    var words = (text || '').toLowerCase().match(/[a-z']+/g) || [];
    var counts = {};
    words.forEach(function (w) {
      if (!STOP_WORDS[w] && w.length > 2) counts[w] = (counts[w] || 0) + 1;
    });
    var total = words.length || 1;
    return Object.keys(counts).filter(function (w) { return counts[w] >= 4 && (counts[w] / total) > 0.15; });
  }

  function containsAny(text, list) {
    var lower = (text || '').toLowerCase();
    return (list || []).filter(function (s) { return lower.indexOf(String(s).toLowerCase()) !== -1; });
  }

  // item: { prompt, minWords, minSentences, requiredStructures, targetWords }
  function review(text, item) {
    item = item || {};
    var trimmed = (text || '').trim();
    if (!trimmed) {
      return [{ key: 'empty', label: 'Resposta em branco', status: 'revisar', detail: 'Escreva sua resposta antes de pedir a revisão.' }];
    }

    var results = [];
    var wc = countWords(trimmed);
    results.push(item.minWords
      ? { key: 'minWords', label: 'Quantidade mínima de palavras', status: wc >= item.minWords ? 'passou' : 'revisar', detail: wc + ' de ' + item.minWords + ' palavras mínimas.' }
      : { key: 'minWords', label: 'Quantidade mínima de palavras', status: 'não verificável', detail: 'Este exercício não define um mínimo (você escreveu ' + wc + ' palavras).' });

    var cap = startsWithCapital(trimmed);
    results.push({ key: 'capital', label: 'Começa com letra maiúscula', status: cap ? 'passou' : 'revisar', detail: cap ? '' : 'A primeira letra da resposta deveria ser maiúscula.' });

    var punct = endsWithPunctuation(trimmed);
    results.push({ key: 'punctuation', label: 'Termina com pontuação (. ! ?)', status: punct ? 'passou' : 'revisar', detail: punct ? '' : 'Finalize a última frase com ponto, exclamação ou interrogação.' });

    var sentences = countSentences(trimmed);
    results.push(item.minSentences
      ? { key: 'sentences', label: 'Número de frases', status: sentences >= item.minSentences ? 'passou' : 'revisar', detail: sentences + ' de ' + item.minSentences + ' frases mínimas.' }
      : { key: 'sentences', label: 'Número de frases', status: 'não verificável', detail: sentences + ' frase(s) identificada(s).' });

    if (item.requiredStructures && item.requiredStructures.length) {
      var foundStructures = containsAny(trimmed, item.requiredStructures);
      results.push({
        key: 'structures', label: 'Usa as estruturas pedidas', status: foundStructures.length > 0 ? 'passou' : 'revisar',
        detail: foundStructures.length ? ('Encontradas: ' + foundStructures.join(', ') + '.') : ('Nenhuma encontrada. Esperado: ' + item.requiredStructures.join(', ') + '.')
      });
    } else {
      results.push({ key: 'structures', label: 'Usa as estruturas pedidas', status: 'não verificável', detail: 'Este exercício não define estruturas obrigatórias.' });
    }

    if (item.targetWords && item.targetWords.length) {
      var foundWords = containsAny(trimmed, item.targetWords);
      results.push({
        key: 'targetWords', label: 'Usa palavras-alvo do módulo', status: foundWords.length > 0 ? 'passou' : 'revisar',
        detail: foundWords.length ? ('Encontradas: ' + foundWords.join(', ') + '.') : ('Nenhuma das palavras-alvo encontrada: ' + item.targetWords.join(', ') + '.')
      });
    } else {
      results.push({ key: 'targetWords', label: 'Usa palavras-alvo do módulo', status: 'não verificável', detail: 'Este exercício não define palavras-alvo específicas.' });
    }

    var repeated = findExcessiveRepetition(trimmed);
    results.push({
      key: 'repetition', label: 'Sem repetição excessiva de palavras', status: repeated.length ? 'revisar' : 'passou',
      detail: repeated.length ? ('Aparecem muitas vezes: ' + repeated.join(', ') + '.') : 'Nenhuma repetição excessiva encontrada.'
    });

    return results;
  }

  return { review: review, countWords: countWords };
})();

window.WritingReview = WritingReview;
