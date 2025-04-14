const nav = document.querySelector('.nav-items');
const navBtn = document.querySelector('.bars');

const handleNav = () => {
	nav.classList.toggle('nav-active');
};

navBtn.addEventListener('click', handleNav);
