export default function mobileMenu() {
	const hamburger = document.getElementById('menu__button');
	const menu = document.querySelector('.menu-mobile');
	const modal = document.querySelector('.modal-burger');
	const body = document.getElementsByTagName('body')[0];


	function noScroll() {
		window.scrollTo(0, 0)
	}


	hamburger.addEventListener('click', () => {			
		modal.classList.toggle('open');
		menu.classList.toggle('open');
		body.classList.toggle('hidden');
		window.addEventListener('scroll', noScroll)
	});


	modal.addEventListener('click', () =>{
		modal.classList.remove('open');
		menu.classList.remove('open');
		body.classList.remove('hidden');
	})	
}