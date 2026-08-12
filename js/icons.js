var Icon = (function () {
  var PATHS = {
    check: '<path d="M4 12.5l5 5L20 6.5" />',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
    flag: '<path d="M6 3v18"/><path d="M6 4.5h12l-3 4 3 4H6"/>',
    star: '<path d="M12 3.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.4l-5.4 3 1-6.1-4.4-4.3 6.1-.9L12 3.5z"/>',
    trophy: '<path d="M7 4h10v4a5 5 0 0 1-10 0V4z"/><path d="M7 5H4a1 1 0 0 0-1 1v1a4 4 0 0 0 4 4"/><path d="M17 5h3a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4"/><path d="M9 17h6"/><path d="M12 13v4"/><path d="M8 20h8"/>',
    chevronLeft: '<path d="M15 5l-7 7 7 7"/>',
    chevronRight: '<path d="M9 5l7 7-7 7"/>',
    sound: '<path d="M4 9v6h4l5 5V4L8 9H4z"/><path d="M16.5 9.5a4 4 0 0 1 0 5"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/>',
    book: '<path d="M4 5.5A2 2 0 0 1 6 4h6v16H6a2 2 0 0 1-2-2v-12.5z"/><path d="M20 5.5A2 2 0 0 0 18 4h-6v16h6a2 2 0 0 0 2-2v-12.5z"/>',
    pencil: '<path d="M4 20l1-4L16 5l3 3L8 19l-4 1z"/><path d="M14 7l3 3"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    sparkle: '<path d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4M6.5 6.5l2.8 2.8M14.7 14.7l2.8 2.8M17.5 6.5l-2.8 2.8M9.3 14.7l-2.8 2.8"/>',
    flame: '<path d="M12 3c1 3-3 4-3 7a3 3 0 0 0 6 0c0-1.5-1-2-1-3 1.5 1 3 3 3 6a5 5 0 0 1-10 0c0-4 2-6 5-10z"/>',
    download: '<path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 20h16"/>',
    upload: '<path d="M12 21V9"/><path d="M7 14l5-5 5 5"/><path d="M4 20h16"/>',
    moduleIcon: '<path d="M4 5.5A2 2 0 0 1 6 4h6v16H6a2 2 0 0 1-2-2v-12.5z"/><path d="M20 5.5A2 2 0 0 0 18 4h-6v16h6a2 2 0 0 0 2-2v-12.5z"/>'
  };

  function render(name, opts) {
    opts = opts || {};
    var size = opts.size || 20;
    var path = PATHS[name] || '';
    var cls = 'icon icon-' + name + (opts.className ? ' ' + opts.className : '');
    return (
      '<svg class="' + cls + '" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" ' +
      'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' +
      'aria-hidden="true" focusable="false">' + path + '</svg>'
    );
  }

  return render;
})();

window.Icon = Icon;
