"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = modalHomeCatalog;

function modalHomeCatalog() {
  var buttonOpen = document.querySelectorAll(".btn-modal-js");
  var buttonClosed = document.querySelector(".button--closed");
  var modalHome = document.querySelector(".modal-home__wrap");
  var modalHomeContent = document.querySelector(".modal-home__content");
  console.log('buttonOpen', buttonOpen);

  var modalClosed = function modalClosed() {
    modalHome.classList.remove('active-modal');
  };

  buttonOpen.forEach(function (elem) {
    elem.addEventListener('click', function () {
      modalHome.classList.add('active-modal');
    });
  });
  buttonClosed.addEventListener('click', modalClosed);
  modalHome.addEventListener('click', function () {
    if (document.querySelector(".active-modal")) {
      modalClosed();
    }
  });
  modalHomeContent.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}