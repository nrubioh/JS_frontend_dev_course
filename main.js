const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

nav_email.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('click');
    desktop_menu.classList.toggle('inactive');
}
