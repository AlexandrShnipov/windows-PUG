"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mobileMenu;

function mobileMenu() {
  var hamburger = document.getElementById('menu__button');
  var menu = document.querySelector('.menu-mobile');
  var modal = document.querySelector('.modal-burger');
  var body = document.getElementsByTagName('body')[0];

  function noScroll() {
    window.scrollTo(0, 0);
  }

  hamburger.addEventListener('click', function () {
    modal.classList.toggle('open');
    menu.classList.toggle('open');
    body.classList.toggle('hidden');
    window.addEventListener('scroll', noScroll);
  });
  modal.addEventListener('click', function () {
    modal.classList.remove('open');
    menu.classList.remove('open');
    body.classList.remove('hidden');
  });
}