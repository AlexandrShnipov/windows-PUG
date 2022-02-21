export default function form() {

	const form = document.getElementById('form');
	const input = document.querySelector('._req');
	const button = document.querySelector('.button-search');

	button.addEventListener('click', () => {
		input.classList.add('active');
		input.focus();		
		button.classList.add('active');	
	})

	const closeForm = () => input.classList.remove("active");
	const closeButton = () => button.classList.remove("active");

	input.addEventListener("blur", closeForm);
	input.addEventListener("blur", closeButton);
}
