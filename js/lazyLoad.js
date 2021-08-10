window.addEventListener('load' , lazyLoad);
window.addEventListener('scroll' , lazyLoad);

let lazyItem = document.querySelectorAll('.lazy-load');//get all lazyload elem 
let i = 0;

function lazyLoad() {

	if (i >= lazyItem.length) return false;

	if (lazyItem[i].classList.contains('lazy-load_onload')) {
		lazyItem[i].classList.add('lazy-load_active');
		lazyItem[i].classList.remove('lazy-load');

		i++;
		window.removeEventListener('scroll' , lazyLoad);
		setTimeout(() => {
			window.addEventListener('scroll' , lazyLoad)
		}, 200);
	}


	if (window.pageYOffset > lazyItem[i].offsetTop - window.innerHeight / 1.5) {
		lazyItem[i].classList.add('lazy-load_active');
		lazyItem[i].classList.remove('lazy-load');

		i++;
		window.removeEventListener('scroll' , lazyLoad);
		setTimeout(() => {
			window.addEventListener('scroll' , lazyLoad)
		}, 100);
	}


	if (lazyItem.length == 0) {
		window.removeEventListener('scroll' , lazyLoad);
	}
};

