/*document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu__btn');

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('menu__btn_active');
        mobileMenu.classList.toggle('menu--open');
        document.documentElement.classList.toggle('active');
    });
})*/

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('menu--open');
})

