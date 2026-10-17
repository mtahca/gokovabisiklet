(function () {
  'use strict';
  var burger = document.querySelector('.burger'), nav = document.getElementById('nav');
  if (!burger || !nav) return;
  function set(o) { nav.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); burger.setAttribute('aria-label', o ? 'Menüyü kapat' : 'Menüyü aç'); }
  burger.addEventListener('click', function () { set(!nav.classList.contains('open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  document.addEventListener('click', function (e) { if (!e.target.closest('.hdr')) set(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 1000) set(false); });
})();
