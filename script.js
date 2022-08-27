$(document).ready(function(){
    let navbarBtn = document.getElementById('navbar-btn');
    
    navbarBtn.addEventListener('click', () => {
        navbarBtn.classList.toggle('active');
    });
    
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