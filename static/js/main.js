document.querySelector('.menu-btn').addEventListener('click', () =>{
document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500});
ScrollReveal().reveal('.cards-banner-one', { delay: 500});
ScrollReveal().reveal('.cards-banner-two', { delay: 500});

$(document).ready(function () {
  // Inicializamos slider principal
  $("#main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Esto esta en milisegundos
    arrows: false,
    fade: true,
  });
});



