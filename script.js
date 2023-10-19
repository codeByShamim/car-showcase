document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});


 // Get a reference to the navbar element
 const navbar = document.querySelector('.navbar');

 // Add an event listener to the window's scroll event
 window.addEventListener('scroll', () => {
     // Check if the user has scrolled down a certain distance (e.g., 100 pixels)
     if (window.scrollY > 100) {
         // If scrolled down, add the 'scrolled' class to the navbar
         navbar.classList.add('scrolled');
     } else {
         // If not scrolled down enough, remove the 'scrolled' class from the navbar
         navbar.classList.remove('scrolled');
     }
 });










 