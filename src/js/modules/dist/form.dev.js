"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = form;

function form() {
  var form = document.getElementById('form');
  var input = document.querySelector('._req');
  var button = document.querySelector('.button-search');
  button.addEventListener('click', function () {
    input.classList.add('active');
    input.focus();
    button.classList.add('active');
  });

  var closeForm = function closeForm() {
    return input.classList.remove("active");
  };

  var closeButton = function closeButton() {
    return button.classList.remove("active");
  };

  input.addEventListener("blur", closeForm);
  input.addEventListener("blur", closeButton);
}