$(document).ready(function() {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    //moving
    autoplay: {
      delay: 2000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
})
