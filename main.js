const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const threeLinesIcon = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const shopIcon = document.querySelector('.navbar-shopping-cart');
const product_menu = document.querySelector('.product-detail');

nav_email.addEventListener('click',toggleDesktopMenu);
threeLinesIcon.addEventListener('click',toggleMobileMenu);
shopIcon.addEventListener('click',toggleProductMenu);

function toggleDesktopMenu() {
    desktop_menu.classList.toggle('inactive');
        console.log('click');
        product_menu.classList.add('inactive');
}

function toggleMobileMenu() {
    mobile_menu.classList.toggle('inactive');
        console.log('mobile click');
        product_menu.classList.add('inactive');
}

function toggleProductMenu() {
    product_menu.classList.toggle('inactive');
        console.log('Product menu click');
        desktop_menu.classList.add('inactive');
        mobile_menu.classList.add('inactive');
}