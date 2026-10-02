/* Sends anonymous reading statistics to GoatCounter (no cookies, no personal data).
   Does nothing until a goatcounterCode is set in config.js. */
(function () {
  var cfg = window.HAWALDARNI_CONFIG || {};
  var code = String(cfg.goatcounterCode || '').trim();
  var queue = [], waiting = false, tries = 0;

  function flush() {
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      waiting = false;
      while (queue.length) { try { window.goatcounter.count(queue.shift()); } catch (e) {} }
      return;
    }
    if (++tries > 60) { waiting = false; queue = []; return; }   // script blocked: give up quietly
    setTimeout(flush, 500);
  }

  // hwdTrack('read-chapter-05', 'Chapter 3 — Gurugram')
  window.hwdTrack = function (name, title) {
    if (!code) return;
    queue.push({ path: name, title: title || name, event: true });
    if (!waiting) { waiting = true; tries = 0; flush(); }
  };

  if (!code) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + code + '.goatcounter.com/count');
  document.head.appendChild(s);
})();
