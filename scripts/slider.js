
//POSITION
const gingerBread = document.getElementById('ginger-bread');
const mochi = document.getElementById('mochi');

const position = () => {
	setTimeout(() => {
		gingerBread.classList.add('position');
		mochi.classList.add('position2')
	}, 300);
}
position();

//SLIDER
const sliderList = document.getElementById('slider-list');
const slides = document.querySelectorAll('.slide');
const [btnLeft, btnRight] = document.getElementsByClassName('slider_button');
const [sliderVisible] = document.getElementsByClassName('slider_visible');
const [dotsListBlock] = document.querySelectorAll('.slider_dots-list');

// sliderVisible.style.width = sliderVisible.clientWidth;
// slides.style.width = slides.clientWidth

const sliderContent = [
	{
		url: `./imgForSlide/image-7.png`
	}, 
	{
		url: `./imgForSlide/image-5.png`
	},
	{
		url: `./imgForSlide/image-3.png`
	},
	{
		url: `./imgForSlide/image-8.png`
	}, 
	{
		url: `./imgForSlide/image-1.png`
	} 
];

let shift = 0;
const width = -616;
// const width = -sliderVisible.clientWidth;

sliderContent.forEach((item, idx) => {
	const img = document.createElement('img');
	img.classList.add('slide');
	img.alt = 'img-${idx + 1}';
	img.src = item.url;

	const dot = document.createElement('li');
	dot.classList.add('slider_dot');

	sliderList.append(img);
	dotsListBlock.append(dot)
});

const dotsList = document.querySelectorAll('.slider_dot');
dotsList[0].classList.add('active');


const clearActive = () => {
	dotsList.forEach (dot => {
		dot.classList.contains('active') && dot.classList.remove('active');
	})
}

btnLeft.onclick = () => {
	if (shift === 0) {
		shift = width * (sliderContent.length - 1);
	} else {
		shift = shift - width;
	}	
	clearActive();
	const idx = shift / width
	dotsList[idx].classList.add('active');
	sliderList.style.left = shift + 'px';
	console.log(shift / width);
}

btnRight.onclick = () => {
	if (shift < width * (sliderContent.length - 2)) {
		shift = 0;
	} else {
		shift = shift + width
	}
	clearActive();
	const idx = shift / width;
	dotsList[idx].classList.add('active');

	sliderList.style.left = shift + 'px';
	console.log(shift / width);
	}
	
	//DOTS

	dotsList.forEach((dot, idx) => {
		dot.onclick = () => {
			clearActive();
			dotsList[idx].classList.add('active');
			shift = width * idx;
			sliderList.style.left = shift + 'px';
		}
	});

	//HAMBURGER_MENU

const headerHamb = document.querySelector('.header_hamb');
const menuHidden = document.querySelector('.header_hidden');

// headerHamb.addEventListener('click', function () {
//     headerHamb.classList.toggle('active');
//     menuHidden.classList.toggle('active');
// });

	headerHamb.onclick = () => {
		headerHamb.classList.toggle('active');
		menuHidden.classList.toggle('active');
	}

// headerHamb.addEventListener('click', function(){
// 	headerHamb.classList.add('active');
// })
