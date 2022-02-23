"use strict";

require("./libs/swiper-bundle.min.js");

var _accordion = _interopRequireDefault(require("./modules/accordion.js"));

var _reviews = _interopRequireDefault(require("./modules/reviews.js"));

var _employees = _interopRequireDefault(require("./modules/employees.js"));

var _menuMobile = _interopRequireDefault(require("./modules/menu-mobile"));

var _form = _interopRequireDefault(require("./modules/form"));

var _buttonFilter = _interopRequireDefault(require("./modules/button-filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Swiper-slider
// Аккордион
// отзывы слайдер
// сотрудники слайдер
// гамбургер
// форма поиска
//import select from './modules/select'; // фильтр каталога
//import selectTwo from './modules/selectTwo'; // фильтр каталога
// фильтр каталога
(0, _accordion["default"])();
(0, _reviews["default"])();
(0, _employees["default"])();
(0, _menuMobile["default"])();
(0, _form["default"])(); //select();
//selectTwo();

(0, _buttonFilter["default"])();