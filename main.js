const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const threeLinesIcon = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const shopIcon = document.querySelector('.navbar-shopping-cart');
const product_menu = document.getElementById('product-detail');

const cards_container = document.querySelector('.cards-container');

const trolly_detail = document.getElementById('trolly-detail');
const trolly_detail_close = document.getElementById('trolly-detail-close');

nav_email.addEventListener('click', toggleDesktopMenu);
threeLinesIcon.addEventListener('click', toggleMobileMenu);
shopIcon.addEventListener('click', toggleProductMenu);
trolly_detail_close.addEventListener('click', close_aside_trolly_detail);

function toggleDesktopMenu() {
    desktop_menu.classList.toggle('inactive');
    console.log('click');
    product_menu.classList.add('inactive');

    trolly_detail.classList.add('inactive')
}

function toggleMobileMenu() {
    mobile_menu.classList.toggle('inactive');
    console.log('mobile click');
    product_menu.classList.add('inactive');

    trolly_detail.classList.add('inactive')
}

function toggleProductMenu() {
    product_menu.classList.toggle('inactive');
    console.log('Product menu click');
    desktop_menu.classList.add('inactive');
    mobile_menu.classList.add('inactive');

    trolly_detail.classList.add('inactive')
}

function open_aside_trolly_detail() {
    trolly_detail.classList.remove('inactive')
    
    product_menu.classList.add('inactive');
    console.log('Trolly detail click');
    desktop_menu.classList.add('inactive');
    mobile_menu.classList.add('inactive');
}

function close_aside_trolly_detail() {
    trolly_detail.classList.add('inactive'); //to inactive the bigOne
}

const product_list = [];
product_list.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
product_list.push({
    name: 'Laptop',
    price: 850,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
product_list.push({
    name: 'Watch',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
product_list.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
product_list.push({
    name: 'Laptop',
    price: 850,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
product_list.push({
    name: 'Watch',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
/* to ask each product:
for (const product of product_list) {
    console.log(product.price); -> it`ll return prices
--or--
for (const product in product_list) {
    console.log(product); -> it`ll return IDs
} */

function renderProducts(arr) {
/*  <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div>*/
    for (const product of arr) {
        const divProductCard = document.createElement('div');
            divProductCard.classList.add('product-card');
    
        const imgProduct = document.createElement('img');
            imgProduct.setAttribute('src', product.image);
    /* product.image -> click , open aside, trolly-detail */
            imgProduct.addEventListener('click', open_aside_trolly_detail);

        const divProductInfo = document.createElement('div');
            divProductInfo.classList.add('product-info');
        
        const divEmpty = document.createElement('div');
        const p_productPrice = document.createElement('p');
            p_productPrice.innerText = '$' + product.price; 
        const p_productName = document.createElement('p');
            p_productName.innerText = product.name;
        
        const figureEmpty = document.createElement('figure');
        const imgTrolly = document.createElement('img');
            imgTrolly.setAttribute('src', './icons/bt_add_to_cart.svg');
            
        figureEmpty.appendChild(imgTrolly);
        
        divEmpty.append(p_productPrice, p_productName);
        
        divProductInfo.append(figureEmpty, divEmpty);
        
        divProductCard.append(imgProduct, divProductInfo);
        
        cards_container.appendChild(divProductCard); //HTML <div class="cards-container">
    }    
}
renderProducts(product_list);
