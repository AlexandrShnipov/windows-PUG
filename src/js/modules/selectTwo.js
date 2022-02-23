export default function selectTwo() {

const selectSingleTwo = document.querySelector('.selectTwo');
const selectSingle_titleTwo = selectSingleTwo.querySelector('.select__titleTwo');
const selectSingle_labelsTwo = selectSingleTwo.querySelectorAll('.select__labelTwo');

// Toggle menu
selectSingle_titleTwo.addEventListener('click', () => {
  if ('active' === selectSingleTwo.getAttribute('data-state')) {
    selectSingleTwo.setAttribute('data-state', '');
  } else {
    selectSingleTwo.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labelsTwo.length; i++) {
  selectSingle_labelsTwo[i].addEventListener('click', (evt) => {
    selectSingle_titleTwo.textContent = evt.target.textContent;
    selectSingleTwo.setAttribute('data-state', '');
  });
}
}