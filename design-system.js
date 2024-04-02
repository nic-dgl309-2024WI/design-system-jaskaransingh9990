// script.js

document.addEventListener('DOMContentLoaded', function () {
    var sideNavbar = document.getElementById('side-navbar');
    var hamburgerIcon = document.getElementById('hamburger-icon');

    hamburgerIcon.addEventListener('click', function () {
        sideNavbar.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    let currentIndex = 0;
    const numImages = carouselContainer.children.length;
  
    function moveCarousel(direction) {
      const increment = direction === 'next' ? 1 : -1;
      currentIndex = (currentIndex + increment + numImages) % numImages;
      const newPosition = -currentIndex * 100;
      carouselContainer.style.transform = `translateX(${newPosition}%)`;
    }
  
    prevButton.addEventListener('click', function () {
      moveCarousel('prev');
    });
  
    nextButton.addEventListener('click', function () {
      moveCarousel('next');
    });
  });
  