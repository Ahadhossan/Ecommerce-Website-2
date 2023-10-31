

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
cartShop = document.getElementById('cart-shop'),
cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove('show-cart')
    })
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login'),
loginButton = document.getElementById('login-button'),
loginClose = document.getElementById('login-close')

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton) {
    loginButton.addEventListener("click", () => {
        login.classList.add('show-login')
    })
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if(loginClose) {
    loginClose.addEventListener("click", () => {
        login.classList.remove('show-login')
    })
}

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    Loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickabie: true,
    },
});


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // scroll bar
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)



/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    Loop: 'true',
});

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== LIGHT BOX ===============*/
const productItems = document.querySelectorAll(".product-img"),
totalProductItems = productItems.length;
lightbox = document.querySelector(".lightbox"),
lightboxImg = lightbox.querySelector(".lightbox-img"),
lightboxClose = lightbox.querySelector(".lightbox-close"),
lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;

for(let i=0; i<totalProductItems; i++){
    productItems[i].addEventListener("click", function() {
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
}

function nextItem(){
    if(itemIndex == totalProductItems-1){
        itemIndex=0;
    }

    else{
        itemIndex++
    }
    changeItem()
}

function prevItem(){
    if(itemIndex == 0){
        itemIndex=totalProductItems-1;
    }

    else{
        itemIndex--
    }
    changeItem()
}

function toggleLightbox(){
    lightbox.classList.toggle("open");
}

function changeItem(){
    imgSrc = productItems[itemIndex].querySelector(".product-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalProductItems;
}

// close button
lightbox.addEventListener("click", function() {
    if(event.target === lightboxClose || event.target === lightbox) {
        toggleLightbox()
    }
})

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItem = document.querySelectorAll('.questions-item')

accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.questions-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem !== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions-content')

    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }
    else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}
