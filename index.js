// เปิดปิดแถบเมนูขวาบน
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-buttom');
    const openedMenuContaine = document.querySelector('.opened-menu-container');

    menuButton.addEventListener('click', function () {
        openedMenuContaine.classList.toggle('menu-hidden');
        openedMenuContaine.classList.toggle('menu-visible');
    });
});


function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}