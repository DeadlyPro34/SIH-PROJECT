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

// Initialize the Internship Swiper
const swiper = new Swiper('.internship-swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    // Pagination setup
    pagination: {
        el: '.custom-pagination',
        clickable: true,
    },

    // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

// Scroll smooth
window.addEventListener('scroll',reveal); 
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0; i<reveals.length; i++)
        {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}