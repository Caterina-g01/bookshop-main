import { fadeIn } from "./animationSliderModule";

const sliderImg = document.querySelector('.slider-imgs');
const slides = document.querySelectorAll('.slider-imgs__img');
const dots = Array.from(document.querySelectorAll('.slider-dots__dot'));


let currentIndex = 0;

slides.forEach((slide, index) => {
	if (index === 0) {
		slide.style.display = 'block';
		slide.style.opacity = 0;
		fadeIn(slide);
	} else {
		slide.style.display = 'none';
	}
});

dots[0].classList.add('active');



function showCurrentSlide() {
	slides.forEach((slide, index) => {
		if (index === currentIndex) {
			slide.style.display = 'block';
			slide.style.opacity = 0;
			fadeIn(slide);
		} else {
			slide.style.display = 'none';
		}
	});
	showCurrentDot();
}

function previousSlide() {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	showCurrentSlide(currentIndex);
	showCurrentDot();
};

function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	showCurrentSlide(currentIndex);
	showCurrentDot();
};

function showCurrentDot() {
	dots.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add('active');
		} else {
			dot.classList.remove('active');
		}
	});
};

dots.forEach((dot, index) => {
	dot.addEventListener('click', function () {
		currentIndex = index;
		showCurrentSlide(currentIndex);
	});
});

function startSliderInterval() {
	return setInterval(nextSlide, 3000);
}

let sliderInterval = startSliderInterval();

sliderImg.addEventListener('mouseenter', function () {
	clearInterval(sliderInterval);
});

sliderImg.addEventListener('mouseleave', function () {
	sliderInterval = startSliderInterval();
});
