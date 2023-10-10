const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const threeLines = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

nav_email.addEventListener('click',toggleDesktopMenu);
threeLines.addEventListener('click',toggleMobileMenu);

function toggleDesktopMenu() {
    console.log('click');
    desktop_menu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    console.log('mobile click');
    mobile_menu.classList.toggle('inactive');
}