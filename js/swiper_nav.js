new Swiper('.cases__swiper', {
    direction: 'vertical',
    loop: true, 
    spaceBetween: 20,
    autoHeight: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.cases__btn--next',
      prevEl: '.cases__btn--prev',
    },
  
})