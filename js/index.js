function parallax(e) {
    bg1 = document.getElementById('bg1');
    bg1.style.width = 100 + window.scrollY/80 + '%';
    bg1.style.bottom = '-' + window.scrollY/10 + '%'
    bg1.style.left = '-' + window.scrollY/160 + '%'

    bg2 = document.getElementById('bg2');
    bg2.style.width = 100 + window.scrollY/70 + '%';
    bg2.style.bottom = '-' + window.scrollY/15 + '%'
    bg2.style.left = '-' + window.scrollY/140 + '%'

    bg3 = document.getElementById('bg3');
    bg3.style.width = 100 + window.scrollY/50 + '%';
    bg3.style.bottom = '-' + window.scrollY/30 + '%'
    bg3.style.left = '-' + window.scrollY/100 + '%'

    bg4 = document.getElementById('bg4');
    bg4.style.width = 100 + window.scrollY/20 + '%';
    bg4.style.left = '-' + window.scrollY/40 + '%'
}

// nav awalnya transparan, kalo discroll jd ad background
function scrollNav() {
    nav = document.getElementById('nav');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.add('solid');
    }
    else {
        nav.classList.remove('solid');
    }
}

window.onload = function() {
    // init
    scrollNav();
    parallax();

    // listener
    window.onscroll = scrollNav;
    window.addEventListener('scroll', parallax);

    //remove splash
    setTimeout(function() {
        $('#splash').fadeOut();
    }, 200);
}