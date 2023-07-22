// // home
// const slider = document.querySelector('.slider');
// const leftArrow = document.querySelector('.left');
// const rightArrow = document.querySelector('.right');

// var sectionIndex = 0;

// leftArrow.addEventListener('click',function() {
//     sectionIndex = (sectionIndex > 0) ? sectionIndex - 1:0;
//     slider.style.transform = 'translate(' + (sectionIndex) * -20 +'%)';
// });

// rightArrow.addEventListener('click',function() {
//     sectionIndex = (sectionIndex < 3) ? sectionIndex + 1:3;
//     slider.style.transform = 'translate(' + (sectionIndex) * -20 +'%)';
// });

const slides = document.querySelectorAll("[data-slide]");
const buttons = document.querySelectorAll("[data-button]");

let currSlide = 0;
let maxSlide = slides.length - 1;

const updateCarousel = (number = 0) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - number) * 100}%)`;
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.dataset.button == "next" ? ++currSlide : --currSlide;

    if (currSlide > maxSlide) {
      currSlide = 0;
    } else if (currSlide < 0) {
      currSlide = maxSlide;
    }

    updateCarousel(currSlide);
  });
});

updateCarousel();