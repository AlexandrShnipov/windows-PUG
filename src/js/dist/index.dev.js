"use strict";

require("./libs/swiper-bundle.min.js");

var _accordion = _interopRequireDefault(require("./modules/accordion.js"));

var _reviews = _interopRequireDefault(require("./modules/reviews.js"));

var _employees = _interopRequireDefault(require("./modules/employees.js"));

var _menuMobile = _interopRequireDefault(require("./modules/menu-mobile"));

var _form = _interopRequireDefault(require("./modules/form"));

var _select = _interopRequireDefault(require("./modules/select"));

var _selectTwo = _interopRequireDefault(require("./modules/selectTwo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Swiper-slider
// Аккордион
// отзывы слайдер
// сотрудники слайдер
// гамбургер
// форма поиска
//import toggleModal from './modules/button-filter'; // фильтр каталога
// фильтр каталога
// фильтр каталога
(0, _accordion["default"])();
(0, _reviews["default"])();
(0, _employees["default"])();
(0, _menuMobile["default"])();
(0, _form["default"])(); //toggleModal();

(0, _select["default"])();
(0, _selectTwo["default"])();