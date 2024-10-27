function renderRecommentSlide() {
    let stringHTMl = "";
    for (let i = 0; i < 7; i++) {
        stringHTMl +=
            `
            <div class="swiper-slide">
                <div>
                    <div class="recommemt-slide-image-size scope-imgage shadow-lg border mb-2">
                        <img class="recommemt-slide-image-size" src="../assets/images/image/books/book-error-small-x.png" alt="img">
                    </div>
                    <div>
                        <h2 class="text-base font-semibold mb-1">책 제목</h2>
                        <p class="text-13-l-18 font-normal mb-3" style="color: rgba(55, 56, 60, 0.6);">성바오로딸</p>
                        <p class="text-sm font-normal">
                            <span style="color: rgba(238, 23, 98, 1);">10%</span>
                            <span class="font-semibold">12,000</span><span>원</span>
                        </p>
                    </div>
                </div>
            </div>    
        `
    }
    document.querySelector('#recomment .recommentSwiper .swiper-wrapper').innerHTML = stringHTMl;
}
renderRecommentSlide();

function renderTogetherSlide() {
    let stringHTMl = "";
    for (let i = 0; i < 7; i++) {
        stringHTMl +=
            `
            <div class="swiper-slide">
                <div>
                    <div class="recommemt-slide-image-size scope-imgage shadow-lg border mb-2">
                        <img class="recommemt-slide-image-size" src="../assets/images/image/books/book-error-small-x.png" alt="img">
                    </div>
                    <div>
                        <h2 class="text-base font-semibold mb-1">책 제목</h2>
                        <p class="text-13-l-18 font-normal mb-3" style="color: rgba(55, 56, 60, 0.6);">성바오로딸</p>
                        <p class="text-sm font-normal">
                            <span style="color: rgba(238, 23, 98, 1);">10%</span>
                            <span class="font-semibold">12,000</span><span>원</span>
                        </p>
                    </div>
                </div>
            </div>    
        `
    }
    document.querySelector('#together .togetherSwiper .swiper-wrapper').innerHTML = stringHTMl;
}
renderTogetherSlide();

var recommentSwiper = new Swiper(".recommentSwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".recomment-next",
        prevEl: ".recomment-prev",
    },
    breakpoints: {       
        768: {
            slidesPerView: 6,
        },
        425: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
        }
    }
});

var togetherSwiper = new Swiper(".togetherSwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".together-next",
        prevEl: ".together-prev",
    },
    breakpoints: {       
        768: {
            slidesPerView: 6,
        },
        425: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
        }
    }
});

var eventSwiper = new Swiper(".eventSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".event-next",
        prevEl: ".event-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        }
    }
});

var newsSwiper = new Swiper(".newsSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".news-next",
        prevEl: ".news-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 'auto',
        },
        768: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
        }
    }
});