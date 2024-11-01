var cartSwiper = new Swiper(".cartSwiper", {
    slidesPerView: 5,
    autoHeight: true,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: ".cart-next",
        prevEl: ".cart-prev",
    },      
});

var cart2Swiper = new Swiper(".cart2Swiper", {
    slidesPerView: 5,
    autoHeight: true,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: ".cart2-next",
        prevEl: ".cart2-prev",
    },      
});