var current = 0;
var slides = document.querySelectorAll('.slider-content');
var carousel = document.getElementById('carousel');

console.log(carousel);
// console.log(slides);

function changeActive(target) {
    slides[current].classList.remove('active-slider');
    current = target;
    slides[current].classList.add('active-slider');
}

function scrollLeft() {
    // console.log('left');
    if (current != 0) {
        carousel.scrollLeft -= slides[current].offsetWidth + parseInt(getComputedStyle(slides[current]).marginLeft) * 2;;

        slides[current--].classList.remove('active-slider');
        slides[current].classList.add('active-slider');
    }
}

function scrollRight() {
    // console.log('right');
    
    if (current != slides.length-1) {
        carousel.scrollLeft += slides[current].offsetWidth + parseInt(getComputedStyle(slides[current]).marginLeft) * 2;

        slides[current++].classList.remove('active-slider');
        slides[current].classList.add('active-slider');
    }
}

$('#arrow-left').click(scrollLeft);
$('#arrow-right').click(scrollRight);

$('html').keyup(function (e) { 
    if (e.keyCode == 37) scrollLeft();
    if (e.keyCode == 39) scrollRight();
});