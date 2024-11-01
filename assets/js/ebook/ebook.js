var ebook1 = new Swiper(".ebook1Swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".ebook1-next",
        prevEl: ".ebook1-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 3
        },
        320: {
            slidesPerView: 3
        }
    }
});

var ebook2 = new Swiper(".ebook2Swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".ebook2-next",
        prevEl: ".ebook2-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 3
        },
        320: {
            slidesPerView: 3
        }
    }
});

function render() {
    let stringHTML = "";
    for (let i = 0; i < 15; i++) {
        stringHTML +=
        `
            <div >
                <div style="" class="flex flex-row sm:flex-col" >
                    <div>
                        <div class="scope-imgage shadow-md overflow-hidden border mb-3">
                            <img class="scope-imgage" src="../assets/images/image/books/book-error-small-x.png" alt="img">
                        </div>

                        <div class="mb-3">
                            <h3 class="mb-1.5 text-base font-semibold">도서명</h3>
                            <p class="text-13-l-18 font-normal" style="color: rgba(55, 56, 60, 0.6);">저자 ∙ 출판사</p>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-2.5">
                        <div>
                            <img src="../assets/images/icon/ebook/ic1.svg" alt="">
                        </div>
                        <div class="barrier" style="background-color: rgba(112, 115, 124, 0.16);"></div>

                        <div>
                            <img src="../assets/images/icon/ebook/ridi.svg" alt="">
                        </div>
                        <div class="barrier" style="background-color: rgba(112, 115, 124, 0.16);"></div>

                        <div>
                            <img src="../assets/images/icon/ebook/y.svg" alt="">
                        </div>
                        <div class="barrier" style="background-color: rgba(112, 115, 124, 0.16);"></div>

                        <div>
                            <img src="../assets/images/icon/ebook/ic2.svg" alt="">
                        </div>                                                                                 
                    </div>
                </div>
            </div> 
        `
    }
    document.querySelector('#recomment').innerHTML = stringHTML
}
render()