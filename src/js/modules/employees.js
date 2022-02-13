import Swiper from './../libs/swiper-bundle.min';

export default function employees() {
  if (document.querySelector('.employees'));
  {
    const swiper = new Swiper('.employees__slider', {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      // Переключение при клике на слайд
      slideToClickedSlide: true,
      // Управление клавиатурой
      Keyboard: {
        enabled: true, // вкл-выкл
        onlyInViewport: true, // в пределах вьюпорта
        pageUpDown: true, // управление клавиатурой
      },
      // Активный слайд по центру
      centerdSlides: true,
      // Бесконечный слайд
      loop: true,
      // Скорость прокрутки
      speed: 400,

      // breakpoints: {
      //   // when window width is <= 320px
      //   320: {
      //     autoHeight: true,
      //     // Колличество слайдов для показа
      //     centerdSlides: true,
      //     slidesPerView: 1

      //   },
      //   // when window width is <= 480px
      //   414: {
      //     centerdSlides: true,
      //     slidesPerView: 1
      //   },
      //   768: {
      //     centerdSlides: true,
      //     slidesPerView: 1
      //   },
      //   1200: {
      //     centerdSlides: true,
      //     slidesPerView: 2
      //   }
      // }
    });
  }
}