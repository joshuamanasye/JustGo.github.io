// HEADER PARALLAX
function parallax() {
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

// REVIEWS
var reviews = new Array();

function loadReviews() {
    let reviewContainer = $('#review-container');

    reviews.forEach((review) => {
        let reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");

        let reviewHeader = document.createElement("div");
        reviewHeader.classList.add("review-header");

        let reviewName = document.createElement("h3");
        reviewName.classList.add("review-text");
        reviewName.textContent = review.name;

        let reviewText = document.createElement("div");
        reviewText.classList.add("review-text");
        reviewText.innerHTML = review.comment;

        let reviewPhoto = document.createElement("div");
        reviewPhoto.classList.add("review-photo");
        reviewPhoto.style.backgroundImage = "url(" + review.photo + ")";

        reviewHeader.append(reviewPhoto);
        reviewHeader.append(reviewName);
        reviewCard.append(reviewHeader);
        reviewCard.append(reviewText);
        reviewContainer.append(reviewCard);
    });
}

// load reviews
function readReviews() {
    fetch("./js/reviews.json").then((res) => {
        return res.json();
    }).then((data) => {
        reviews = data;
        // biar dia kelar baca dulu baru ngeload ke html
        loadReviews();
    });
    
}

// grab ngescroll
function reviewGrabListener() {
    let reviewContainer = document.getElementById("review-container");
    let isGrabbing = false;
    let startPosition = 0;
    let startScrollLeft = 0;

    function startDrag(e) {
        isGrabbing = true;
        startPosition = e.clientX || e.touches[0].clientX;
        startScrollLeft = reviewContainer.scrollLeft;
    }

    function endDrag() {
        isGrabbing = false;
    }

    function drag(e) {
        if (!isGrabbing) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const scrollDistance = currentX - startPosition;
        reviewContainer.scrollLeft = startScrollLeft - scrollDistance;
    }
    
    reviewContainer.addEventListener("mousedown", startDrag);
    reviewContainer.addEventListener("mouseup", endDrag);
    reviewContainer.addEventListener("mouseleave", endDrag);
    reviewContainer.addEventListener("mousemove", drag);
}

window.onload = function() {
    // init
    scrollNav();
    parallax();

    // listener
    window.onscroll = scrollNav;
    window.addEventListener('scroll', parallax);
    reviewGrabListener();

    // review
    readReviews();

    //remove splash
    $('#splash').fadeOut(200);
}

let reviewContainer = $('#review-container');
reviewContainer.bind("DOMMouseScroll mousewheel", function (event) {
    var oEvent = event.originalEvent;
    // console.log(oEvent.detail);
    var scroll = oEvent.detail;
    var position = reviewContainer.scrollLeft();

    if (scroll > 0) position += 120;
    else position -= 120;
    
    reviewContainer.scrollLeft(position);
    event.preventDefault();
});