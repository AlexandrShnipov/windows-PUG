"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = select;

function select() {
  var selectSingle = document.querySelector('.select');
  var selectSingle_title = selectSingle.querySelector('.select__title');
  var selectSingle_labels = selectSingle.querySelectorAll('.select__label'); // Toggle menu

  selectSingle_title.addEventListener('click', function () {
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
    } else {
      selectSingle.setAttribute('data-state', 'active');
    }
  }); // Close when click to option

  for (var i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', function (evt) {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
    });
  }
}