// document.addEventListener('DOMContentLoaded', () => {
//     const exploreButton = document.querySelector('.explore-btn');
//     const parallaxImage = document.getElementById('parallaxImage');
//     const heroSection = document.querySelector('.hero-section');

//     // 1. Basic button functionality (from before)
//     exploreButton.addEventListener('click', (e) => {
//         e.preventDefault(); 
//         console.log("Exploring Opportunities clicked!");
//     });

//     // 2. Parallax Scrolling Logic
//     if (parallaxImage && heroSection) {
//         window.addEventListener('scroll', () => {
//             // Get the scroll position from the top of the window
//             let scrolled = window.scrollY;

//             // Get the starting position of the hero section
//             let heroTop = heroSection.offsetTop;

//             // Calculate how far we've scrolled within the hero section's area
//             // We use Math.max(0, ...) to stop the effect before scrolling starts
//             let scrollDistance = Math.max(0, scrolled - heroTop); 

//             // Define the movement speed. A smaller number means a slower, more intense parallax.
//             const PARALLAX_SPEED = 0.5; // Example: 0.5 means the image moves at 50% of the scroll speed

//             // Calculate the vertical movement (translateY)
//             let movementY = scrollDistance * PARALLAX_SPEED;

//             // Apply the transformation to the image
//             // We use negative movement to make the image appear to be left behind
//             // as the content scrolls up.
//             parallaxImage.style.transform = `translateY(-${movementY}px)`;

//             // Optional: You can also fade or scale it
//             // parallaxImage.style.opacity = 1 - (scrollDistance / 500);
//         });
//     }

//     console.log("PLACEMINT website loaded successfully with parallax script.");
// });

// Swiper Initialization for Logo Carousel
new Swiper('.my-main-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,
});

// Bottom Nav Active Class Toggling
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.bottom-nav-bar .nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// new Swiper('.my-main-swiper', {
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 0,
//     allowTouchMove: false,
// });