document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu__btn');

    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('menu--open');
    });
})