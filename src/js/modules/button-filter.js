export default function toggleModal() {
  const filterButton = document.querySelector(".button-filter");
  const modal = document.querySelector(".modal");
  const close = document.querySelector(".filter__button-closed");

  filterButton.addEventListener("click", () => {
    modal.classList.add("is-open");
  });
  close.addEventListener("click", () => {
    modal.classList.remove("is-open");
  });

  modal.addEventListener("click", () => {
    if (document.querySelector(".is-open")) {
      modal.classList.remove("is-open");
    }
  })
}
