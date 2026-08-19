/* =======================================================================
   Аналитика. По правилам проекта счётчики ставятся сразу при запуске.

   ЧТО СДЕЛАТЬ:
   1. Завести счётчик Яндекс.Метрики — https://metrika.yandex.ru
      и вписать его номер в METRIKA_ID (только цифры).
   2. Завести поток GA4 — https://analytics.google.com
      и вписать идентификатор вида "G-XXXXXXXXXX" в GA4_ID.
   3. Дополнительно можно подключить Microsoft Clarity (тепловые карты)
      и вписать его id в CLARITY_ID.

   Пока строки пустые — ничего не грузится и сайт работает как обычно.
   ======================================================================= */

var METRIKA_ID = "";
var GA4_ID = "";
var CLARITY_ID = "";

(function () {
  "use strict";

  if (METRIKA_ID) {
    window.ymCounterId = METRIKA_ID;
    (function (m, e, t, r, i, k, a) {
      m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
      m[i].l = 1 * new Date();
      k = e.createElement(t); a = e.getElementsByTagName(t)[0];
      k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    window.ym(METRIKA_ID, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    });
  }

  if (GA4_ID) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID);
  }

  if (CLARITY_ID) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_ID);
  }
})();
