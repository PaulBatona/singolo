const MENU = document.getElementById('menu');

const VERT_PHONE = document.getElementById('vertical-phone');
const HORIZ_PHONE = document.getElementById('horizontal-phone');
const SLIDER_LEFT = document.getElementById('slider__left');
const SLIDER_RIGHT = document.getElementById('slider__right');
const SLIDER = document.getElementById('slider');

const PORTFOLIO_TAG = document.getElementById('portfolio__tags');
const PORTFOLIO_PROJECT = document.getElementById("portfolio__projects");

const BUTTON = document.getElementById('submit');
const CLOSE_BUTTON = document.getElementById('close-button');
const FORM = document.getElementById('form');

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

let slides = document.querySelectorAll('#slider_item');
let current = 1;

function slider(){
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove('hidden');
    }
    slides[current].classList.add('hidden');
}

slider();

document.getElementById('slider__left-button').onclick = function(){
    if(current-1 == -1){
        current = slides.length-1;
    }
    else{
        current--;
    }
    slider();
}

document.getElementById('slider__right-button').onclick = function(){
    if(current+1 == slides.length){
        current = 0;
    }
    else{
        current++;
    }
    slider();
}

// ------------------------------------------PORTFOLIO

PORTFOLIO_TAG.addEventListener('click', (event) => {
    if(event.target.tagName == 'LI'){
        if(!(event.target.classList.contains('active'))){
            PORTFOLIO_TAG.querySelectorAll('li').forEach(elem => elem.classList.remove('active'));
            event.target.classList.add('active');
            shuffle();
        }
    }
})

function shuffle(){
    var parent = PORTFOLIO_PROJECT;
    var fragment = document.createDocumentFragment();
    while (parent.children.length) {
        fragment.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(fragment);
}

PORTFOLIO_PROJECT.addEventListener('click', (event) => {
    if(event.target.tagName == 'IMG'){
        if(event.target.classList.contains('selected')){
            event.target.classList.remove('selected');
        }
        else{
            PORTFOLIO_PROJECT.querySelectorAll('img').forEach(elem => elem.classList.remove('selected'));
            event.target.classList.add('selected');
        }
    }
})

// ------------------------------------------CONTACT

FORM.addEventListener('submit', event => {
    // event.preventDefault()
});

BUTTON.addEventListener('click', (event) => {
    // const contact_subject = document.getElementById('contact-subject').value.toString();
    // const contact_description = document.getElementById('contact-description').value.toString();

    // if(contact_subject==""){document.getElementById('contact-email-output').innerText = "Без темы"}
    // else{
    //     document.getElementById('contact-subject-display').classList.remove('hidden');
    //     document.getElementById('contact-subject-output').innerText = contact_subject;
    // };

    // document.getElementById('message-block').classList.remove('hidden');
    // event.preventDefault();
})

CLOSE_BUTTON.addEventListener('click', () => {
    // document.getElementById('message-block').classList.add('hidden');
})