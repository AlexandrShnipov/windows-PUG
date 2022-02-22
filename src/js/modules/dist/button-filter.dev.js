"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toggleModal;

function toggleModal() {
  var filterButton = document.querySelector(".button-modal--open");
  var modal = document.querySelector(".modal");
  var close = document.querySelector(".modal__button--closed");
  var filter = document.querySelector(".filter__wrap");
  console.log('filterButton', filterButton);

  var closeModal = function closeModal() {
    return modal.classList.remove("is-open");
  };

  filterButton.addEventListener("click", function () {
    console.log('filterButton', filterButton);
    modal.classList.add("is-open");
  });
  close.addEventListener("click", closeModal);
  modal.addEventListener("click", function () {
    if (document.querySelector(".is-open")) {
      closeModal();
    }
  });
  filter.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}