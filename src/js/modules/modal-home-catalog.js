export default function modalHomeCatalog() {
  const buttonOpen = document.querySelectorAll(".btn-modal-js");
  const buttonClosed = document.querySelector(".button--closed");
  const modalHome = document.querySelector(".modal-home__wrap");
  const modalHomeContent = document.querySelector(".modal-home__content");
  const buttonCall = document.querySelector(".button--call")
  const buttonSize = document.querySelector(".button--size")
  const modalHomeContentCall = document.querySelector(".modal-home__content--call")
  const modalHomeContentSize = document.querySelector(".modal-home__content--size")

  console.log('buttonOpen', buttonOpen)

  // вызов модального окна
  buttonOpen.forEach((elem) => {
    elem.addEventListener('click', () => {
      modalHome.classList.add('active-modal');
    })
  })

  //закрыть модальное окно
  const modalClosed = () => {
    modalHome.classList.remove('active-modal');
  }

  buttonClosed.addEventListener('click', modalClosed)

  modalHome.addEventListener('click', () => {
    if (document.querySelector(".active-modal")) {
      modalClosed();
    }
  })

  // вызвать замерщика
  buttonCall.addEventListener('click', () => {
    modalHomeContentCall.classList.add('active-modal');
    modalHomeContentSize.classList.remove('active-modal');
    buttonSize.classList.remove('focus');
    buttonCall.classList.add('focus');
  })

  //ввести размер
  buttonSize.addEventListener('click', () => {
    modalHomeContentCall.classList.remove('active-modal');
    modalHomeContentSize.classList.add('active-modal');
    buttonCall.classList.remove('focus');
    buttonSize.classList.add('focus');
  })


  modalHomeContent.addEventListener("click", (e) => {
    e.stopPropagation();
  })
}


