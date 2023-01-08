const gingerBread = document.getElementById('ginger-bread');
const position = document.getElementsByClassName('img_gingerBread.position')
gingerBread.classList.add(position).setTimeout(2000)
// const gingerBreadPosition = (gingerBread, position) => {
// ;
// setTimeout(2000)
// }
// gingerBreadPosition()
// gingerBread.style.rotate = -50 + 'deg';




const sliderList = document.getElementById('slider-list');
const [btnLeft, btnRight] = document.getElementsByClassName('slider_button');
console.log('>>>', sliderList, btnLeft, btnRight);

btnLeft.onclick = () => {
    console.log ('Clicked')
}