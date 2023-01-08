const gingerBread = document.getElementById('ginger-bread');
gingerBread.style.rotate = -12 + 'deg';
gingerBread.style.left = 5 + 'em';

const sliderList = document.getElementById('slider-list');
const [btnLeft, btnRight] = document.getElementsByClassName('slider_button');
console.log('>>>', sliderList, btnLeft, btnRight);

btnLeft.onclick = () => {
    console.log ('Clicked')
}