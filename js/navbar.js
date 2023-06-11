var dropdowns = document.getElementsByClassName('dropdown-menu');

function openDropdown(dropdown) {
    // kalo dropdown gk punya dropdown-content, brarti itu dari sidebar
    var content = dropdown.querySelector('.dropdown-content');
    if (content == null) content = dropdown.querySelector('.sidebar-dropdown-content');
    var arrow = dropdown.querySelector('.dropdown-icon');

    content.classList.add('show');
    arrow.style.transform = 'rotate(180deg)';
    
}

function closeDropdown(dropdown) {
    // kalo dropdown gk punya dropdown-content, brarti itu dari sidebar
    var content = dropdown.querySelector('.dropdown-content');
    if (content == null) content = dropdown.querySelector('.sidebar-dropdown-content');
    var arrow = dropdown.querySelector('.dropdown-icon');

    content.classList.remove('show');
    arrow.style.transform = 'rotate(0deg)';
}

function toggleDropdown(dropdown) {
    // kalo dropdown gk punya dropdown-content, brarti itu dari sidebar
    var content = dropdown.querySelector('.dropdown-content');
    if (content == null) content = dropdown.querySelector('.sidebar-dropdown-content');

    if (!content.classList.contains('show')) openDropdown(dropdown);
    else closeDropdown(dropdown);
}

// kasih event listener ke semua dropdown, harusnya pake jquery lbh gmpng tp gw mls ganti" lg
Array.from(dropdowns).forEach(function(dropdown) {
    // klompok gw, gw suruh tulis nama di tembagian tugas aj kgk ad respon
    dropdown.addEventListener('click', function() {
        toggleDropdown(dropdown);
    });
});

// hamburger
const hamburgerBtn = document.querySelector('.hamburger-btn');
const sideBar = document.querySelector('.sidebar');
const main = document.querySelector('main');

let sideBarOpened = false;

function showSideBar() {
    hamburgerBtn.classList.add('close');
    sideBar.classList.add('show');
    main.classList.add('darken');

    sideBarOpened = true;
}

function closeSideBar() {
    hamburgerBtn.classList.remove('close');
    sideBar.classList.remove('show');
    main.classList.remove('darken');

    sideBarOpened = false;
}

function toggleMenu() {
    // buanglah sampah pada tempatnya, eh ad d kelompok gw
    if (!sideBarOpened) {
        showSideBar();
    }
    else {
        closeSideBar();
    }
}

hamburgerBtn.addEventListener('click', toggleMenu);

// kalau dari kecil diresize jd gede, tutup sidebar
window.onresize = (event) => {
    if ($(window).width() > 800) {
        closeSideBar();
    }
};

nav = document.querySelector('nav');

// close dropdown & sidebar kalau klik di luar, ngetik sendiri, bkn nyolong, apalagi dibantuin kelompok awkoawko
window.onclick = function(event) {
    // console.log(event.target);
    Array.from(dropdowns).forEach(function(dropdown) {
        if (!dropdown.contains(event.target)) closeDropdown(dropdown);
    });

    if (!sideBar.contains(event.target) && !nav.contains(event.target) && event.target !== sideBar) closeSideBar();
    // console.log(!sideBar.contains(event.target));
    // console.log(!nav.contains(event.target));
    // console.log(event.target !== sideBar);
}