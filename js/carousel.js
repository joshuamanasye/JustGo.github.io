var current = 0;
var slides = $('.slider-content');
var carousel = $('#carousel');

// console.log(carousel);
// console.log(slides);

function scrollCarousel() {
    // console.log(current);
    // console.log(parseInt(parseInt($('.slider-content').width() + parseInt($('.slider-content').css('marginLeft')) * 2) * current + 15));

    carousel.css('left', parseInt(parseInt($('.slider-content').width() + parseInt($('.slider-content').css('marginLeft')) * 2) * current * -1 + 15) + 'px');
    
    // gk bisa pakai animate left karena kalau window diresize posisinya bakal beda sadge

    // carousel.animate({left: parseInt(parseInt($('.slider-content').width() + parseInt($('.slider-content').css('marginLeft')) * 2) * current * -1 + 15) + 'px'}, 400, 'swing');
}

function changeActive(target) {
    slides[current].classList.remove('active-slider');
    current = target;
    scrollCarousel();
    slides[current].classList.add('active-slider');
}

// sekedar curhatan: knp transition sama jquery animation tuh nabrak
function scrollLeft() {
    // console.log('left');

    if (current != 0) {
        changeActive(current - 1);

        // pastiin current dalam keadaan awal
        slides.eq(current).css('transition', '0.4s');
        slides.eq(current).css('opacity', '1');

        // animasi fade di index +3 current (posisi current udh keganti sblm animasi)
        if (current + 3 < slides.length){
            slides.eq(current + 3).css('transition', 'none');
            slides.eq(current + 3).fadeOut(200);
        }
    }
}

function scrollRight() {
    // console.log('right');
    
    if (current != slides.length-1) {
        changeActive(current + 1);

        // pastiin current dlm keadaan awal
        slides.eq(current).css('transition', '0.4s');
        if (screen.width > 800) slides.eq(current - 1).css('opacity', '0'); // sblh kiri current opacity 0

        // animasi fade di index +2 current (posisi current udh keganti sblm animasi)
        if (current + 2 < slides.length){
            slides.eq(current + 2).fadeIn(400);
            setTimeout(function () {
                slides.eq(current + 2).css('transition', '0.4s');
            }, 400);
        }
    }
}

// klik di slidenya
slides.click(function() {
    // console.log(slides.index(this));
    
    var target = slides.index(this);
    
    if (target <= current) return; // just in case

    while (current < target) {
        scrollRight();
    }
})

// init display slide
function initSlides() {
    // hide semua yg di kanan lebih dr 2 index
    for (i = 3; i < slides.length; i++) {
        slides.eq(i).css('transition', 'none');
        slides.eq(i).hide();
    }
}

initSlides();

// carousel control
$('#arrow-left').click(scrollLeft);
$('#arrow-right').click(scrollRight);

$('html').keyup(function (e) { 
    if (e.keyCode == 37) scrollLeft(); // left arrow
    if (e.keyCode == 39) scrollRight(); // right arrow
});

// benerin abis resize window
$(window).on('resize', function() {
    setTimeout(scrollCarousel, 400); // setTimeout biarin animasinya yg lain kelar dulu
});