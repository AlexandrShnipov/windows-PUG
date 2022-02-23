export default function modalHomeCatalog() {
  const buttonOpen = document.querySelectorAll(".btn-modal-js");
  const buttonClosed = document.querySelector(".button--closed");
  const modalHome = document.querySelector(".modal-home__wrap");
  const modalHomeContent = document.querySelector(".modal-home__content");

  console.log('buttonOpen', buttonOpen)

  const modalClosed = () => {
    modalHome.classList.remove('active-modal');
  }

  buttonOpen.forEach((elem) => {
    elem.addEventListener('click', () => {
      modalHome.classList.add('active-modal');
    })
  })

  buttonClosed.addEventListener('click', modalClosed)

  modalHome.addEventListener('click', () => {
    if (document.querySelector(".active-modal")) {
      modalClosed();
    }
  })

  modalHomeContent.addEventListener("click", (e) => {
    e.stopPropagation()
  })

}


