"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mobileMenu;

function mobileMenu() {
  var hamburger = document.getElementById('menu__button');
  var menu = document.querySelector('.menu-mobile');
  var body = document.querySelector('body');
  hamburger.addEventListener('click', function () {
    // hamburger.classList.toggle('active');
    // console.log('click');
    menu.classList.toggle('menu-mobile--open');
    body.classList.toggle('no-scroll');
  });
  window.addEventListener('click', function (e) {
    console.log(e);

    if (!e.target.classList.contains('menu-mobile--open') && !e.target.matches('.toggle.menu') && !e.currentTarget.matches(hamburger)) {
      //	hamburger.classList.remove('active');
      menu.classList.remove('menu-mobile--open');
      body.classList.remove('no-scroll');
    }
  });
}