var Prefs = (function () {
  var FONT_ORDER = ['sm', 'md', 'lg', 'xl'];

  function apply() {
    document.documentElement.setAttribute('data-theme', Storage.getPref('theme'));
    document.documentElement.setAttribute('data-font-size', Storage.getPref('fontSize'));
    var themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.textContent = Storage.getPref('theme') === 'dark' ? '☀️' : '🌙';
  }

  apply();

  window.addEventListener('DOMContentLoaded', function () {
    apply();
    var themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        var next = Storage.getPref('theme') === 'dark' ? 'light' : 'dark';
        Storage.setPref('theme', next);
        apply();
      });
    }
    document.querySelectorAll('.font-size-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = FONT_ORDER.indexOf(Storage.getPref('fontSize'));
        if (idx === -1) idx = 1;
        idx = btn.getAttribute('data-dir') === 'inc' ? Math.min(idx + 1, FONT_ORDER.length - 1) : Math.max(idx - 1, 0);
        Storage.setPref('fontSize', FONT_ORDER[idx]);
        apply();
      });
    });
  });

  return { apply: apply };
})();

window.Prefs = Prefs;
