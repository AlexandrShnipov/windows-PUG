export default function mobileMenu() {
		 const hamburger = document.getElementById('menu__button');
		 const menu = document.querySelector('.menu-mobile');
		 const body = document.querySelector('body');

		 hamburger.addEventListener('click', () => {
			 // hamburger.classList.toggle('active');
				// console.log('click');
			  menu.classList.toggle('menu-mobile--open');
			  body.classList.toggle('no-scroll');
		 });

		 window.addEventListener('click', (e) => {
			 console.log(e)
			  if (!e.target.classList.contains('menu-mobile--open') && !e.target.matches('.toggle.menu')  && !e.currentTarget.matches(hamburger)) {
				//	hamburger.classList.remove('active');
					menu.classList.remove('menu-mobile--open');
					body.classList.remove('no-scroll');
			  }

		 });
}