"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reviews;

var _swiperBundleMin = _interopRequireDefault(require("./../libs/swiper-bundle.min.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reviews() {
  if (document.querySelector('.reviews')) {
    var _;

    var swiper = new _swiperBundleMin["default"]('.reviews__swiper', {
      navigation: {
        nextEl: '.next',
        prevEl: '.prev'
      },
      // Переключение при клике на слайд
      slideToClickedSlide: true,
      // Управление клавиатурой
      Keyboard: {
        enabled: true,
        // вкл-выкл
        onlyInViewport: true,
        // в пределах вьюпорта
        pageUpDown: true // управление клавиатурой

      },
      // Активный слайд по центру
      //centerdSlides: true,
      // Бесконечный слайд
      loop: false,
      // Скорость прокрутки
      speed: 400,
      //autoHeight: true,
      // Колличество слайдов для показа
      slidesPerView: 1,
      centerdSlides: true,
      //отключение если слайдов меньше чем нужно
      watchOverflow: true,
      breakpoints: {
        768: (_ = {
          centerdSlides: true,
          slidesPerView: 2
        }, _defineProperty(_, "centerdSlides", false), _defineProperty(_, "spaceBetween", 30), _)
      }
    });
  }
}