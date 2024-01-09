document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger_menu');
    const headerNav = document.querySelector('.header_nav');
    const body = document.body;

    function closeBurgerMenu() {
        burgerMenu.classList.remove('active');
        headerNav.classList.remove('active');
        body.style.overflow = 'auto';
    }

    burgerMenu.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
        headerNav.classList.toggle('active');
        if (burgerMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 678) {
            closeBurgerMenu();
        }
    });
});