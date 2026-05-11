document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Logo Marquee Swiper
    new Swiper('.my-main-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: false,
    });

    // 2. Initialize Internship Carousel
    new Swiper('.internship-swiper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 24,
        pagination: {
            el: '.custom-pagination',
            clickable: true,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
        }
    });

    // 3. Navbar Scroll Effect
    const header = document.querySelector('.fixed-nav-wrapper');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Scroll Reveal Logic
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const revealTop = el.getBoundingClientRect().top;
            const revealPoint = 150;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    };
    window.addEventListener('scroll', reveal);
    reveal(); // Run once on load

    // 5. Mobile Nav Active State
    const navItems = document.querySelectorAll('.bottom-nav-bar .nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

});