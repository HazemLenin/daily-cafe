$(document).ready(function(){
    // AOS initializer
    AOS.init({
        disable: /bot|crawler|spider|crawling/i.test(navigator.userAgent), // Disable AOS if the visitor is a web crawler
        once: true
    });

    // Mobile navbar toggler
    let navbarBtn = document.getElementById('navbar-btn');
    navbarBtn.addEventListener('click', () => {
        navbarBtn.classList.toggle('active');
    });

    // Reviews slick slider
    $(".reviews-carousel").slick({
        dots: false,
        infinite: true,
        accessibility: false,
        autoplay: true,
        mobileFirst: true,
        centerMode: true,
        variableWidth: true,
    });
});