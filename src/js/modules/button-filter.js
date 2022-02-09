export default function toggleModal() {
  const filterButton = document.querySelector(".button-modal--open");
  const modal = document.querySelector(".modal");
  const close = document.querySelector(".modal__button--closed");
  const filter = document.querySelector(".filter__wrap")

  const closeModal = () => modal.classList.remove("is-open");

  filterButton.addEventListener("click", () => {
    modal.classList.add("is-open");
  });
  close.addEventListener("click", closeModal);

  modal.addEventListener("click", () => {
    if (document.querySelector(".is-open")) {
      closeModal();
    }
  })

  filter.addEventListener("click", (e) => {
    e.stopPropagation()

  })
}
