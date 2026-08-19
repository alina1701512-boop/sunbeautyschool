/* =======================================================================
   Sunbeautyschool — скрипт сайта.
   Весь контент сайта лежит в HTML, скрипт отвечает только за поведение:
   мобильное меню, кнопки «Оплатить» и год в подвале.
   ======================================================================= */

/* ССЫЛКИ НА ОПЛАТУ.
   Когда подключите ЮKassa, Т-Банк или другой сервис — вставьте ссылки сюда.
   Пока строка пустая, кнопка «Оплатить» ведёт на блок контактов. */
var PAY_LINKS = {
  depilation:  "",
  pedicure:    "",
  cosmetology: ""
};

(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  function initMenu() {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav");
    if (!burger || !nav) return;
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
    });
  }

  function initPay() {
    var buttons = document.querySelectorAll("[data-pay]");
    Array.prototype.forEach.call(buttons, function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-pay");
        var link = PAY_LINKS[key];

        if (window.ym && window.ymCounterId) {
          window.ym(window.ymCounterId, "reachGoal", "pay_click", { course: key });
        }
        if (window.gtag) {
          window.gtag("event", "begin_checkout", { item_name: key });
        }

        if (link) {
          window.location.href = link;
        } else {
          window.location.href = "index.html#contacts";
        }
      });
    });
  }

  function initYear() {
    var slots = document.querySelectorAll("[data-year]");
    Array.prototype.forEach.call(slots, function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  ready(function () {
    initMenu();
    initPay();
    initYear();
  });
})();
