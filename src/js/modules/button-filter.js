export default function toggleModal() {
  const filterButton = document.querySelector(".button-modal--oupen");
  const modal = document.querySelector(".modal");
  const close = document.querySelector(".modal__button--closed");
  const filter = document.querySelector(".filter__wrap")

  const closeModal = () => modal.classList.remove("is-oupen");

  filterButton.addEventListener("click", () => {
    modal.classList.add("is-oupen");
  });
  close.addEventListener("click", closeModal);

  modal.addEventListener("click", () => {
    if (document.querySelector(".is-oupen")) {
      closeModal();
    }
  })

  filter.addEventListener("click", (e) => {
    e.stopPropagation()

  })
}
