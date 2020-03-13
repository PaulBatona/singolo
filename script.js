const MENU = document.getElementById('menu');

const VERT_PHONE = document.getElementById('vertical-phone');
const HORIZ_PHONE = document.getElementById('horizontal-phone');
const SLIDER_LEFT = document.getElementById('slider__left');
const SLIDER_RIGHT = document.getElementById('slider__right');
const SLIDER = document.getElementById('slider');

const PORTFOLIO_TAG = document.getElementById('portfolio__tags');
const PORTFOLIO_PROJECT = document.getElementById('portfolio__projects');


// ------------------------------------------NAV

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(elem => elem.classList.remove('active'));
    event.target.classList.add('active');
});

// ------------------------------------------SLIDER

VERT_PHONE.addEventListener('click', (event) => {
    event.target.classList.toggle('bg-off');
});

HORIZ_PHONE.addEventListener('click', (event) => {
    event.target.classList.toggle('bg-off');
});

// let slideIndex = 1;
// showSlide(slideIndex);

// SLIDER_LEFT.addEventListener('click', () => {
//     showSlide(slideIndex = slideIndex - 1);
// })

// SLIDER_RIGHT.addEventListener('click', () => {
//     showSlide(slideIndex = slideIndex + 1);
// })

// function showSlide(n) {
//     let slides = document.getElementById('slider_item');
//     if (n>slides.length){
//         slideIndex = 1;
//     }
//     if (n<1) {
//         slideIndex = slides.length;
//     }
//     for (let i=0; i<slides.length; i++){
//         slides[i].classList.add('hidden');
//     }
//     slides[slideIndex-1].classList.remove('hidden');
// }

// ------------------------------------------PORTFOLIO

PORTFOLIO_TAG.addEventListener('click', (event) => {
    PORTFOLIO_TAG.querySelectorAll('li').forEach(elem => elem.classList.remove('active'));
    event.target.classList.add('active');
})

PORTFOLIO_PROJECT.addEventListener('click', (event) => {
    PORTFOLIO_PROJECT.querySelectorAll('img.portfolio__projects-image').forEach(elem => elem.classList.remove('porfolio-border'));
    event.target.classList.add('portfolio-border');
})