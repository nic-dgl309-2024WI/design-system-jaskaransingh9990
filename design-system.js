// script.js

document.addEventListener('DOMContentLoaded', function () {
    var sideNavbar = document.getElementById('side-navbar');
    var hamburgerIcon = document.getElementById('hamburger-icon');

    hamburgerIcon.addEventListener('click', function () {
        sideNavbar.classList.toggle('show');
    });
});
