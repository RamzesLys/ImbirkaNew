const gingerBread = document.getElementById('ginger-bread');
const position = Array.from(document.getElementsByClassName('img_gingerBread.position'));



// gingerBread.classList.add(position).setTimeout(2000)
// const gingerBreadPosition = (gingerBread, position) => {
// ;
// setTimeout(2000)
// }
// gingerBreadPosition()
// gingerBread.style.rotate = -50 + 'deg';





const [btnLeft, btnRight] = document.getElementsByClassName('slider_button');
const sliderList = document.getElementById('slider-list');
console.log('>>>', sliderList, btnLeft, btnRight);

btnLeft.onclick = () => {
    console.log ('Clicked')
}

btnRight.onclick = () => {
	console.log ('Clicked-right')
}