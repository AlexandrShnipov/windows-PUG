import Swiper from './../libs/swiper-bundle.min.js';

export default function reviews() {
	if (document.querySelector('.reviews')) {
		const swiper = new Swiper('.reviews__swiper', {
			navigation: {
				nextEl: '.next',
				prevEl: '.prev'
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
				768: {
					centerdSlides: true,
					slidesPerView: 2,
					centerdSlides: false,
					spaceBetween: 30
				}			
			}
		});
	}
}