
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
	const prev = document.getElementById('btn-prev'),
  next = document.getElementById('btn-next'),
  slides = document.querySelectorAll('.slider_item'),
  dots = document.querySelectorAll('.slider_dot');

let index = 2;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activeDot(ind);
}

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
}

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

dots.forEach((item, indexDot) => {
	item.onclick = () => {
		index = indexDot;
		prepareCurrentSlide(index);
	}
})

next.onclick = () => {
	nextSlide();
}

prev.onclick = () => {
	prevSlide()
}

//HAMBURGER_MENU

const headerHamb = document.querySelector('.header_hamb');
const menuHidden = document.querySelector('.header_hidden');

	headerHamb.onclick = () => {
		headerHamb.classList.toggle('active');
		menuHidden.classList.toggle('active');
	}

	//ADAPTIVE

// const adaptiveWidth = window.innerWidth;

// const resize = () => {
// 	if (adaptiveWidth <= 770) {
// 		gingerBread.style.top = 300 + 'px'
// 	}
// }

// resize()