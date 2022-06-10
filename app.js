
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnSwap = $('.btn-swap');
const text = $('.btn-swap .text')
const btnCheck = $('#button-check');
const label = $('.btn-swap label');

const slider = $('.slider');
const imgSlides = $$('.img__slide');
const items = $$(".item");

const line = $('.line');

let TIMEOUT;
let currentIndex = -1;

btnCheck.onchange = () => {
    if (btnCheck.checked) {
        autoRunSlider();
        text.style.color = `#fab402`;
        label.style.backgroundColor = `#fab402`;
    }
    else {
        clearInterval(TIMEOUT);
        text.style.color = `#5b5b5b`;
        label.style.backgroundColor = `#5b5b5b`;
    }
}


imgSlides.forEach( (imgSlide, idx) => {
    imgSlide.addEventListener('click', () => {
        currentIndex = idx;
        activeSlider(idx);
        activeItem(idx);
        // console.log(currentIndex);
    })
});

items.forEach( (item, idx) => {
    item.addEventListener('click', (e) => {
        currentIndex = idx;
        activeSlider(idx);
        activeItem(idx);
        console.log(e.offsetLeft);
        // console.log(currentIndex);
    })
});

function activeSlider( idx ) {
    $('.img__slide.active').classList.remove('active');
    imgSlides[idx].classList.add('active');
    //slider.style.transform = "translateX(" + (-(200*idx)) + "px)";
    // slider.style.transform = `translateX(calc(${idx*64}px *(-1)))`;
};

function activeItem( idx ) {
    line.style.left = `calc( ${111.5 *idx}px + ${idx * 50}px + 50px )`
    $('.item.active').classList.remove('active');
    items[idx].classList.add('active');
};

function autoRunSlider() {
    TIMEOUT = setInterval( () => {
        currentIndex++;
        if( currentIndex == imgSlides.length ) currentIndex = 0;
        activeSlider(currentIndex);
        activeItem(currentIndex);
        if (currentIndex == 6 ) clearInterval();
    }, 1000);
}





