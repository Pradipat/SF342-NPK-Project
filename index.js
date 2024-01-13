document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-buttom');
    const openedMenuContaine = document.querySelector('.opened-menu-container');

    menuButton.addEventListener('click', function () {
        openedMenuContaine.classList.toggle('menu-hidden');
        openedMenuContaine.classList.toggle('menu-visible');
    });
});