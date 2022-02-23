import './libs/swiper-bundle.min.js'; // Swiper-slider
import accordion from './modules/accordion.js'; // Аккордион
import reviews from './modules/reviews.js'; // отзывы слайдер
import employees from './modules/employees.js'; // сотрудники слайдер
import menuMobile from './modules/menu-mobile'; // гамбургер
import form from './modules/form'; // форма поиска
//import select from './modules/select'; // фильтр каталога
//import selectTwo from './modules/selectTwo'; // фильтр каталога
import toggleModal from './modules/button-filter'; // фильтр каталога

accordion();
reviews();
employees();
menuMobile();
form();
//select();
//selectTwo();
toggleModal();