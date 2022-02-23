"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = employees;

var _swiperBundle = _interopRequireDefault(require("./../libs/swiper-bundle.min"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function employees() {
  if (document.querySelector('.employees')) ;
  {
    var swiper = new _swiperBundle["default"]('.employees__slider', {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
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
      // управлени колесом мыши
      // mousewheel: {
      //   sensitivity: 1,
      // },
      // Активный слайд по центру
      centerdSlides: true,
      // Бесконечный слайд
      loop: true,
      // Скорость прокрутки
      speed: 400,
      autoHeight: true
    });
  }
}