
//POSITION
const gingerBread = document.getElementById('ginger-bread');

const position = () => {
	setTimeout(() => {
		gingerBread.classList.add('position')
	}, 1000);
}

position();

//SLIDER
const sliderWrapper = document.querySelector('.slider_wrapper');
const sliderList = document.getElementById('slider-list');
const slides = document.querySelectorAll('.slide');
const [btnLeft, btnRight] = document.getElementsByClassName('slider_button');

let activeOrder = 0;

const init = () => {
	for (let i = 0; i < slides.length; i++) {
		const slide = slides[i];
		slide.dataset.order = i;
		slide.style.transform = "translate(-50%, -50%)";
	}
	activeOrder = Math.floor(slides.length / 2)
} 

init()


const update = () => {
	const {width, height} = sliderList.getBoundingClientRect();

	const a = Math.sqrt(width / 2);
	const b = Math.sqrt(height / 2);

	for (let i = 0; i < slides.length; i++) {
		const leftSlide = document.querySelector('.slider[data-order="${activeOrder - i}"]'
		);
		if (leftSlide) {
			leftSlide.style.left = `${width / 2 + }px`;
		}
		
		const rightSlide = document.querySelector('.slider[data-order="${activeOrder + i}"]');

	}
}



btnLeft.onclick = () => {
    console.log ('Clicked');
}

btnRight.onclick = () => {
	console.log ('Clicked-right');
}