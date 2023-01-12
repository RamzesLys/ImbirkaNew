
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

const init = () => {
	for (let i = 0; i < slides.length; i++) {
		const slide = slides[i];
		slide.dataset.order = i;
	}
} 

init()



btnLeft.onclick = () => {
    console.log ('Clicked');
}

btnRight.onclick = () => {
	console.log ('Clicked-right');
}