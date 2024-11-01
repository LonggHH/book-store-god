let dataMainCategory = null;

function fetchData(url) {    
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            dataMainCategory = result;            
        })
        .then(() => {         
            renderBestBooks(dataMainCategory.home.bestBooks);
            renderNewBooks(dataMainCategory.home.newBooks); 
            // renderChildrenBooks(dataMainCategory.home.newBooks); 

            renderReviewBooks([1,2,3])
        })
        .catch((error) => console.error("Error fetching data:", error));
}

fetchData(DEF_URL.page + '/data/mock/data.json');

function renderBestBooks(listData) {
    let stringHtml = '';
    let i = 1;
    for (const item of listData) {        
            stringHtml +=
            `
                <div class="swiper-slide">
                    <div class="flex gap-4">
                        <div style="overflow: hidden; 
                            border-top-left-radius: 4px; border-top-right-radius: 8px; 
                            border-bottom-left-radius: 4px; border-bottom-right-radius: 8px;" class="image-slide-best shadow-md mb-3 ${item.url ? "" : "border"}">
                            <img class="image-slide-best" src=".${item.url}" alt="">
                        </div>

                        <div class="flex gap-4">
                            <div class="relative" style="width: 22px; height: 30px;">
                                <span class="absolute top-1 left-2 text-xs font-normal text-white">${i++}</span>
                                <img style="width: 22px ; height: 30px;" src="${item.isTop ? "../assets/images/icon/home/badge-top.svg" : "../assets/images/icon/home/badge-normal.svg"}" alt="icon">
                            </div>
                            <div class="flex flex-col gap-1.5 content-book">
                                <h4 class="text-base font-semibold whitespace-normal sm:truncate">${item.name}</h4>
                                <span class="font-normal" style="font-size: 13px; line-height: 18px; color: rgba(55, 56, 60, 0.6);">${item.author}</span>
                                <span class="flex gap-1 text-sm font-semibold">
                                    <span style="color: rgba(238, 23, 98, 1);"> <span>${item.discount}</span>%</span>
                                    <span>${formatMoney(item.price)}</span> 
                                    <span class="font-normal">원</span>                                   
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    }
    document.querySelector('#best .bestSwiper .swiper-wrapper').innerHTML = stringHtml;

 
    // best swipper
    var bestSwiper = new Swiper(".bestSwiper", {
        slidesPerView: 2,
        grid: {
            rows: 3,
        },
        loop: true,
        spaceBetween: 20,
        navigation: {
            nextEl: ".best-next",
            prevEl: ".best-prev",
        },
        // autoplay: {
        //     delay: 5000, // Tự động chuyển slide sau 5 giây
        //   },       
    });
}

function renderNewBooks(listData) {
    let stringHtml = '';
    for (const item of listData) {                 
            stringHtml +=
            `
                <div class="swiper-slide flex items-center justify-center">
                    <div>
                        <div style="overflow: hidden; 
                        border-top-left-radius: 4px; border-top-right-radius: 8px; 
                        border-bottom-left-radius: 4px; border-bottom-right-radius: 8px;" class="image-slide-new shadow-md mb-3 ${item.url ? "" : "border"}">
                            <img class="image-slide-new" src=".${item.url}" alt="">
                        </div>

                        <div class="flex flex-col content-new">
                            <h4 class="text-base font-semibold h-6 overflow-hidden truncate">${item.name}</h4>
                            <span class="font-normal inline-block mb-3 mt-1" style="font-size: 13px; line-height: 18px; color: rgba(55, 56, 60, 0.6);height: 18px;">${item.author}</span>
                            <span class="flex items-center gap-1 text-sm font-semibold">
                                <span style="color: rgba(238, 23, 98, 1);"> <span>${item.discount}</span>%</span>
                                <span>${formatMoney(item.price)}</span> 
                                <span class="font-normal">원</span>
                                <span class="hidden lg:block text-11-l-14 font-normal border-l pl-1 ml-1" style="color: rgba(55, 56, 60, 0.6);">100P</span>
                            </span>                            
                        </div>
                    </div>
                </div>
            `;
    }
    document.querySelector('#new .newSwiper .swiper-wrapper').innerHTML = stringHtml;

    // new swipper
    var newSwiper = new Swiper(".newSwiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".new-next",
            prevEl: ".new-prev",
        },
    });
}

function renderChildrenBooks(listData) {
    let stringHtml = '';
    for (const item of listData) {                 
            stringHtml +=
            `
                <div class="swiper-slide flex items-center justify-center">
                    <div>
                        <div style="overflow: hidden; 
                        border-top-left-radius: 4px; border-top-right-radius: 8px; 
                        border-bottom-left-radius: 4px; border-bottom-right-radius: 8px;" class="image-slide-new shadow-md mb-3 ${item.url ? "" : "border"}">
                            <img class="image-slide-new" src=".${item.url}" alt="">
                        </div>

                        <div class="flex flex-col content-new">
                            <h4 class="text-base font-semibold h-6 overflow-hidden truncate">${item.name}</h4>
                            <span class="font-normal inline-block mb-3 mt-1" style="font-size: 13px; line-height: 18px; color: rgba(55, 56, 60, 0.6);height: 18px;">${item.author}</span>
                            <span class="flex items-center gap-1 text-sm font-semibold">
                                <span style="color: rgba(238, 23, 98, 1);"> <span>${item.discount}</span>%</span>
                                <span>${formatMoney(item.price)}</span> 
                                <span class="font-normal">원</span>
                                <span class="hidden lg:block text-11-l-14 font-normal border-l pl-1 ml-1" style="color: rgba(55, 56, 60, 0.6);">100P</span>
                            </span>                            
                        </div>
                    </div>
                </div>
            `;
    }
    document.querySelector('#children .childrenSwiper .swiper-wrapper').innerHTML = stringHtml;

    // new swipper
    var childrenSwiper = new Swiper(".childrenSwiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".children-next",
            prevEl: ".children-prev",
        },
    });
}

function renderReviewBooks(listData) {
    let stringHtml = '';
    for (const item of listData) {                
            stringHtml +=
            `
                <div class="swiper-slide">
                    <div class="rounded-xl border overflow-hidden">
                        <div style="" class="relative overflow-hidden image-review-slide-scope">
                            <div class="w-full h-full absolute top-0 left-0 bg-no-repeat bg-center bg-cover" style="background-image: url(../assets/images/image/books/book12.png);">                                                    
                            </div>                            
                        </div>

                        <div class="py-4 px-5">
                            <div>
                                <h4 class="text-base font-semibold mb-1">엄마는 순례길 딸은 여행길</h4>
                                <span class="inline-block text-13-l-18" style="color: rgba(55, 56, 60, 0.6);">박지현, 신솔잎</span>
                            </div>

                            <div>
                                <p>엄마와 딸이 함께하는 순례길이라는 것이 정겹고 부럽게 느껴지네요.
                                    <br>
                                    <p class="truncate">서로 잘 알고 있다고 생각하지만 몰랐던 것을 알아가고 화해하는 과 생각하지만 몰랐던</p>
                                </p>
                            </div>
                        </div>

                        <div class="py-4 px-5">
                            <div class="flex items-center justify-between">
                                <div style="color: rgba(55, 56, 60, 0.6);">
                                    <span class="inline-block text-sm font-normal h-5">닉*****</span>
                                    <span class="inline-block text-sm font-normal h-5">님의 후기</span>
                                </div>
                                <div class="flex items-center gap-1">
                                    <div class="flex items-center">
                                        <img style="width: 18px; height: 18px;" src="../assets/images/icon/home/blue-star.svg" alt="icons">
                                        <img style="width: 18px; height: 18px;" src="../assets/images/icon/home/blue-star.svg" alt="icons">
                                        <img style="width: 18px; height: 18px;" src="../assets/images/icon/home/blue-star.svg" alt="icons">
                                        <img style="width: 18px; height: 18px;" src="../assets/images/icon/home/blue-star.svg" alt="icons">
                                        <img style="width: 18px; height: 18px;" src="../assets/images/icon/home/blue-star.svg" alt="icons">
                                    </div>
                                    <div class="w-0.5 h-4" style="background-color: rgba(55, 56, 60, 0.16);"></div>
                                    <span class="inline-block text-15-l-22 font-medium">5</span>
                                </div>
                            </div>
                        </div>
                    </div>                                                                                        
                </div>
            `;
    }
    document.querySelector('#review .reviewSwiper .swiper-wrapper').innerHTML = stringHtml;

    // review swipper
    var childrenSwiper = new Swiper(".reviewSwiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".review-next",
            prevEl: ".review-prev",
        },
    });
}

// hero slide
let heroNext = document.querySelector('#hero .hero-next')
let heroPrev = document.querySelector('#hero .hero-prev')
heroNext.addEventListener('click', function(){        
    let items = document.querySelectorAll('#hero .item')
    document.querySelector('#hero .slide').appendChild(items[0])
})
heroPrev.addEventListener('click', function(){
    let items = document.querySelectorAll('#hero .item')
    document.querySelector('#hero .slide').prepend(items[items.length - 1]) // here the length of items = 6
})


