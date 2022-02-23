export default function selectThree() {

  const selectSingleThree = document.querySelector('.selectThree');
  const selectSingle_titleThree = selectSingleThree.querySelector('.select__titleThree');
  const selectSingle_labelsThree = selectSingleThree.querySelectorAll('.select__labelThree');

  // Toggle menu
  selectSingle_titleThree.addEventListener('click', () => {
    if ('active' === selectSingleThree.getAttribute('data-state')) {
      selectSingleThree.setAttribute('data-state', '');
    } else {
      selectSingleThree.setAttribute('data-state', 'active');
    }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labelsThree.length; i++) {
    selectSingle_labelsThree[i].addEventListener('click', (evt) => {
      selectSingle_titleThree.textContent = evt.target.textContent;
      selectSingleThree.setAttribute('data-state', '');
    });
  }
}