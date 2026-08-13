var Views = window.Views || {};

// Referência gramatical pesquisável: indexa module.grammar de todos os
// módulos (mais qualquer tabela extra dentro de lesson.sections, como
// There is/There are em A1-M3) e permite buscar por título, linkando de
// volta para o módulo onde cada estrutura foi praticada.
Views.grammarReference = function (container) {
  function buildIndex() {
    var entries = [];
    APP_DATA.levels.concat(APP_DATA.electives || []).forEach(function (level) {
      APP_DATA.getModules(level.id).forEach(function (m) {
        if (m.grammar) {
          entries.push({
            title: m.grammar.title,
            explanation: m.grammar.explanation,
            levelCode: level.code || level.name,
            levelName: level.name,
            moduleTitle: m.title,
            hash: '#/level/' + level.id + '/module/' + m.id + '/grammar'
          });
        }
        ((m.lesson && m.lesson.sections) || []).forEach(function (s) {
          if (s.table) {
            entries.push({
              title: s.heading,
              explanation: s.text,
              levelCode: level.code || level.name,
              levelName: level.name,
              moduleTitle: m.title,
              hash: '#/level/' + level.id + '/module/' + m.id + '/grammar'
            });
          }
        });
      });
    });
    return entries;
  }

  var allEntries = buildIndex();

  function cardHtml(entry) {
    return (
      '<a class="grammar-ref-card" href="' + entry.hash + '">' +
        '<div class="grammar-ref-meta">' + entry.levelCode + ' · ' + entry.moduleTitle + '</div>' +
        '<h3>' + entry.title + '</h3>' +
        '<p class="muted">' + entry.explanation + '</p>' +
      '</a>'
    );
  }

  function renderList(query) {
    var q = (query || '').trim().toLowerCase();
    var filtered = q
      ? allEntries.filter(function (e) { return e.title.toLowerCase().indexOf(q) !== -1 || (e.explanation || '').toLowerCase().indexOf(q) !== -1; })
      : allEntries;
    var listEl = document.getElementById('grammar-ref-list');
    var countEl = document.getElementById('grammar-ref-count');
    if (countEl) countEl.textContent = filtered.length + ' de ' + allEntries.length + ' tópicos';
    if (listEl) {
      listEl.innerHTML = filtered.length
        ? filtered.map(cardHtml).join('')
        : '<div class="empty-state"><p>Nenhum tópico encontrado para essa busca.</p></div>';
    }
  }

  container.innerHTML =
    '<section class="grammar-reference-page">' +
      '<a class="back-link" href="#/">' + Icon('chevronLeft', { size: 16 }) + ' Minha trilha</a>' +
      '<h1>Referência gramatical</h1>' +
      '<p class="muted">Busque uma estrutura gramatical e veja em qual módulo ela foi ensinada e praticada.</p>' +
      '<label class="visually-hidden" for="grammar-ref-search">Buscar tópico de gramática</label>' +
      '<input type="search" id="grammar-ref-search" class="grammar-ref-search" placeholder="Ex.: present perfect, there is, passive voice..." aria-label="Buscar tópico de gramática">' +
      '<p class="muted" id="grammar-ref-count" aria-live="polite"></p>' +
      '<div id="grammar-ref-list" class="grammar-ref-list" aria-live="polite"></div>' +
    '</section>';

  renderList('');
  document.getElementById('grammar-ref-search').addEventListener('input', function (e) {
    renderList(e.target.value);
  });
};

window.Views = Views;
