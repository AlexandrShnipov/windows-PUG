"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = selectThree;

function selectThree() {
  var selectSingleThree = document.querySelector('.selectThree');
  var selectSingle_titleThree = selectSingleThree.querySelector('.select__titleThree');
  var selectSingle_labelsThree = selectSingleThree.querySelectorAll('.select__labelThree'); // Toggle menu

  selectSingle_titleThree.addEventListener('click', function () {
    if ('active' === selectSingleThree.getAttribute('data-state')) {
      selectSingleThree.setAttribute('data-state', '');
    } else {
      selectSingleThree.setAttribute('data-state', 'active');
    }
  }); // Close when click to option

  for (var i = 0; i < selectSingle_labelsThree.length; i++) {
    selectSingle_labelsThree[i].addEventListener('click', function (evt) {
      selectSingle_titleThree.textContent = evt.target.textContent;
      selectSingleThree.setAttribute('data-state', '');
    });
  }
}