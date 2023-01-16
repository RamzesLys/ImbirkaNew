
//POSITION
const gingerBread = document.getElementById('ginger-bread');

// const position = () => {
// 	setTimeout(() => {
// 		gingerBread.classList.add('position')
// 	}, 500);
// }
// position();

const position = () => {
	setTimeout(() => {
		gingerBread.style.left = 2 + 'em';
		gingerBread.style.opacity = 1;

	}, 500);
}

//SLIDER
const sliderList = document.getElementById('slider-list');
const slides = document.querySelectorAll('.slide');
const [btnLeft, btnRight] = document.getElementsByClassName('slider_button');

const sliderContent = [
	{
		content:`слайд 1`
	}, 
	{
		content: `слайд 2`
	},
	{
		content: `слайд 3`
	}
];

sliderContent.forEach(item => {
	const li = document.createElement('li');
	li.textContent = item.content;
	li.classList.add('slide')
	sliderList.append(li);


})



btnLeft.onclick = () => {
	sliderList.style.left = 616 + 'px'
}

btnRight.onclick = () => {
	sliderList.style.left = sliderList.style.left - 616 + 'px'
}