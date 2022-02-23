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
  var buttonCall = document.querySelector(".button--call");
  var buttonSize = document.querySelector(".button--size");
  var modalHomeContentCall = document.querySelector(".modal-home__content--call");
  var modalHomeContentSize = document.querySelector(".modal-home__content--size");
  console.log('buttonOpen', buttonOpen); // вызов модального окна

  buttonOpen.forEach(function (elem) {
    elem.addEventListener('click', function () {
      modalHome.classList.add('active-modal');
    });
  }); //закрыть модальное окно

  var modalClosed = function modalClosed() {
    modalHome.classList.remove('active-modal');
  };

  buttonClosed.addEventListener('click', modalClosed);
  modalHome.addEventListener('click', function () {
    if (document.querySelector(".active-modal")) {
      modalClosed();
    }
  }); // вызвать замерщика

  buttonCall.addEventListener('click', function () {
    modalHomeContentCall.classList.add('active-modal');
    modalHomeContentSize.classList.remove('active-modal');
    buttonSize.classList.remove('focus');
    buttonCall.classList.add('focus');
  }); //ввести размер

  buttonSize.addEventListener('click', function () {
    modalHomeContentCall.classList.remove('active-modal');
    modalHomeContentSize.classList.add('active-modal');
    buttonCall.classList.remove('focus');
    buttonSize.classList.add('focus');
  });
  modalHomeContent.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}