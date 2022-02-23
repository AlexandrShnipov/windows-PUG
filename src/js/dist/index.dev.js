"use strict";

require("./libs/swiper-bundle.min.js");

var _reviews = _interopRequireDefault(require("./modules/reviews.js"));

var _employees = _interopRequireDefault(require("./modules/employees.js"));

var _menuMobile = _interopRequireDefault(require("./modules/menu-mobile"));

var _form = _interopRequireDefault(require("./modules/form"));

var _buttonFilter = _interopRequireDefault(require("./modules/button-filter"));

var _modalHomeCatalog = _interopRequireDefault(require("./modules/modal-home-catalog"));

var _select = _interopRequireDefault(require("./modules/select"));

var _selectTwo = _interopRequireDefault(require("./modules/selectTwo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Swiper-slider
//import accordion from './modules/accordion.js'; // Аккордион
// отзывы слайдер
// сотрудники слайдер
// гамбургер
// форма поиска
// фильтр страницы каталога
// модальное окно главной страницы
// фильтр каталога
// фильтр каталога
//accordion();
(0, _reviews["default"])();
(0, _employees["default"])();
(0, _menuMobile["default"])();
(0, _form["default"])();
(0, _buttonFilter["default"])();
(0, _modalHomeCatalog["default"])();
(0, _select["default"])();
(0, _selectTwo["default"])();