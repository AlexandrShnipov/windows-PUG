"use strict";

(function selectTwo() {
  var selectSingleTwo = document.querySelector('.selectTwo');
  var selectSingle_titleTwo = selectSingleTwo.querySelector('.select__titleTwo');
  var selectSingle_labelsTwo = selectSingleTwo.querySelectorAll('.select__labelTwo'); // Toggle menu

  selectSingle_titleTwo.addEventListener('click', function () {
    if ('active' === selectSingleTwo.getAttribute('data-state')) {
      selectSingleTwo.setAttribute('data-state', '');
    } else {
      selectSingleTwo.setAttribute('data-state', 'active');
    }
  }); // Close when click to option

  for (var i = 0; i < selectSingle_labelsTwo.length; i++) {
    selectSingle_labelsTwo[i].addEventListener('click', function (evt) {
      selectSingle_titleTwo.textContent = evt.target.textContent;
      selectSingleTwo.setAttribute('data-state', '');
    });
  }
})();