import Swiper from './../libs/swiper-bundle.min';

export default function employees() {
  if (document.querySelector('.employees'));
  {
    const swiper = new Swiper('.employees__slider', {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // Переключение при клике на слайд
      slideToClickedSlide: true,
      // Управление клавиатурой
      Keyboard: {
        enabled: true, // вкл-выкл
        onlyInViewport: true, // в пределах вьюпорта
        pageUpDown: true, // управление клавиатурой
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
      autoHeight: true,
    });
  }
}