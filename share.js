/* हवलदारनी — "साझा करें" बटन (मोबाइल पर फ़ोन की अपनी शेयर-सूची, बाक़ी जगह विकल्पों वाली खिड़की) */
(function () {
  var URL_ = 'https://shardayaduvanshi.github.io/Hawaldarni-/';
  var TITLE = 'हवलदारनी: एक जवाब, बहुत देर से';
  var TEXT = 'हवलदारनी: एक जवाब, बहुत देर से — शारदा अशोक यदुवंशी का उपन्यास। पूरी किताब यहाँ मुफ़्त पढ़ें:';
  function track(k, d) {
    try { if (window.hwdTrack) hwdTrack(k, d); else if (window.krTrack) krTrack(k, d); } catch (e) {}
  }
  function css() {
    if (document.getElementById('hwdShareCss')) return;
    var s = document.createElement('style'); s.id = 'hwdShareCss';
    s.textContent = '.hws-bg{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:99999;display:flex;align-items:flex-end;justify-content:center}' +
      '.hws{background:#fffaf2;color:#2b1d14;width:100%;max-width:440px;border-radius:16px 16px 0 0;padding:1.2rem 1.1rem 1.4rem;font-family:inherit;box-shadow:0 -6px 30px rgba(0,0,0,.3)}' +
      '.hws h3{margin:0 0 .3rem;font-size:1.15rem;text-align:center}.hws p{margin:0 0 1rem;font-size:.9rem;text-align:center;color:#7a6656}' +
      '.hws-g{display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem}.hws-g a,.hws-g button{display:flex;flex-direction:column;align-items:center;gap:.3rem;padding:.75rem .3rem;border-radius:12px;border:1px solid #ead9c4;background:#fff;color:#2b1d14;text-decoration:none;font-size:.85rem;cursor:pointer;font-family:inherit}' +
      '.hws-g span{font-size:1.5rem;line-height:1}.hws-x{display:block;width:100%;margin-top:.9rem;padding:.7rem;border:0;border-radius:10px;background:#efe3d3;color:#2b1d14;font-size:.95rem;cursor:pointer;font-family:inherit}';
    document.head.appendChild(s);
  }
  function panel() {
    css();
    var u = encodeURIComponent(URL_), t = encodeURIComponent(TEXT + ' ' + URL_);
    var bg = document.createElement('div'); bg.className = 'hws-bg';
    bg.innerHTML = '<div class="hws" role="dialog" aria-label="साझा करें"><h3>किताब साझा करें</h3><p>किसी को भी भेजिए, पूरी किताब मुफ़्त है</p><div class="hws-g">' +
      '<a data-k="whatsapp" target="_blank" rel="noopener" href="https://wa.me/?text=' + t + '"><span>💬</span>WhatsApp</a>' +
      '<a data-k="facebook" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=' + u + '"><span>📘</span>Facebook</a>' +
      '<a data-k="telegram" target="_blank" rel="noopener" href="https://t.me/share/url?url=' + u + '&text=' + encodeURIComponent(TEXT) + '"><span>✈️</span>Telegram</a>' +
      '<a data-k="x" target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?url=' + u + '&text=' + encodeURIComponent(TEXT) + '"><span>𝕏</span>X (Twitter)</a>' +
      '<a data-k="email" href="mailto:?subject=' + encodeURIComponent(TITLE) + '&body=' + t + '"><span>✉️</span>ईमेल</a>' +
      '<button type="button" data-k="copy"><span>🔗</span>लिंक कॉपी</button>' +
      '</div><button type="button" class="hws-x">बंद करें</button></div>';
    bg.addEventListener('click', function (e) {
      var a = e.target.closest('[data-k]');
      if (a) {
        track('share-' + a.getAttribute('data-k'), 'Shared via ' + a.getAttribute('data-k'));
        if (a.getAttribute('data-k') === 'copy') {
          var done = function () { a.innerHTML = '<span>✅</span>कॉपी हो गया'; };
          if (navigator.clipboard) navigator.clipboard.writeText(URL_).then(done, function () { prompt('यह लिंक कॉपी करें:', URL_); });
          else prompt('यह लिंक कॉपी करें:', URL_);
        }
        return;
      }
      if (e.target === bg || e.target.classList.contains('hws-x')) bg.remove();
    });
    document.body.appendChild(bg);
  }
  window.hwdShare = function (from) {
    track('share-open-' + (from || 'site'), 'Share button opened');
    if (navigator.share) {
      navigator.share({ title: TITLE, text: TEXT, url: URL_ }).then(function () { track('share-native', 'Shared via phone share sheet'); }, function () {});
    } else { panel(); }
  };
})();
