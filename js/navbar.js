var dropdowns = document.getElementsByClassName('dropdown-menu');

function openDropdown(dropdown) {
    var content = dropdown.querySelector('.dropdown-content');
    if (content == null) content = dropdown.querySelector('.sidebar-dropdown-content');
    var arrow = dropdown.querySelector('.dropdown-icon');

    content.classList.add('show');
    arrow.style.transform = 'rotate(180deg)';
    
}

function closeDropdown(dropdown) {
    var content = dropdown.querySelector('.dropdown-content');
    if (content == null) content = dropdown.querySelector('.sidebar-dropdown-content');
    var arrow = dropdown.querySelector('.dropdown-icon');

    content.classList.remove('show');
    arrow.style.transform = 'rotate(0deg)';
}

function toggleDropdown(dropdown) {
    var content = dropdown.querySelector('.dropdown-content');
    if (content === null) content = dropdown.querySelector('.sidebar-dropdown-content');

    if (!content.classList.contains('show')) openDropdown(dropdown);
    else closeDropdown(dropdown);
}

Array.from(dropdowns).forEach(function(dropdown) {
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
    if (!sideBarOpened) {
        showSideBar();
    }
    else {
        closeSideBar();
    }
}

hamburgerBtn.addEventListener('click', toggleMenu);

window.onresize = (event) => {
    if ($(window).width() > 800) {
        closeSideBar();
    }
};

nav = document.querySelector('nav');

window.onclick = function(event) { // close dropdown & sidebar kalau klik di luar
    // console.log(event.target);
    Array.from(dropdowns).forEach(function(dropdown) {
        if (!dropdown.contains(event.target)) closeDropdown(dropdown);
    });

    if (!sideBar.contains(event.target) && !nav.contains(event.target) && event.target !== sideBar) closeSideBar();
    console.log(!sideBar.contains(event.target));
    console.log(!nav.contains(event.target));
    console.log(event.target !== sideBar);
}