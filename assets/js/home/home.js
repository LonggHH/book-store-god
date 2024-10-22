let data = null;

function fetchData(url) {    
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            data = result;            
        })
        .then(() => {
            renderHeaderCategory(data.home.headerCategory);
            renderBookstoreCategories(data.home.bookstoreCategories);
            renderNewBooks(data.home.newBooks);
            renderBestBooks(data.home.bestBooks);
            renderPicks(data.home.picks);
            renderReviews(data.home.reviews);
        })
        .catch((error) => console.error("Error fetching data:", error));
}

fetchData(DEF_URL.index + '/data/mock/data.json');

function renderHeaderCategory(listData) {    
    let stringHtml = '';
    for (const item of listData) {
            if (item.active) {
                stringHtml +=
                `<li class="py-4 px-3.5 relative underline-active"> <a class="text-base font-semibold" style="color: rgba(46, 47, 51, 0.88);" href="#">${item.name}</a> </li>`;
                continue;
            }
            if (item.highlight) {
                stringHtml +=
                `<li class="py-4 px-3.5 text-highlight text-highlight-dot"> <a class="text-base font-semibold" style="color: rgba(46, 47, 51, 0.88);" href="#">${item.name}</a> </li>`;
                continue;
            }
            stringHtml +=
            `<li class="py-4 px-3.5"> <a class="text-base font-medium" style="color: rgba(46, 47, 51, 0.88);" href="#">${item.name}</a> </li>`;
    }
    document.querySelector('#header-list-category').innerHTML = stringHtml;
}

function renderBookstoreCategories(listData) {
    let stringHtml = '';
    for (const item of listData) {            
            if (!item.url) {
                stringHtml +=
                `
                     <div class="flex flex-col gap-2 w-20">
                        <div class="w-20 h-20 overflow-hidden rounded-3xl border"><img src="" alt=""></div>
                        <span class="inline-block w-full text-sm font-medium text-center truncate">${item.name}</span>
                    </div>
                `;
                continue;
            }
            stringHtml +=
            `
                <div class="flex flex-col gap-2 w-20">
                    <div class="w-20 h-20 overflow-hidden"><img src="${item.url}" alt="icon"></div>
                    <span class="inline-block w-full text-sm font-medium text-center truncate">${item.name}</span>
                </div>
            `;
    }
    document.querySelector('#bookstore-categories').innerHTML = stringHtml;
}

function renderNewBooks(listData) {
    let stringHtml = '';
    for (const item of listData) {                 
            stringHtml +=
            `
                <div class="swiper-slide flex items-center justify-center">
                    <div>
                        <div style="width: 196px; height: 290px; overflow: hidden; 
                        border-top-left-radius: 4px; border-top-right-radius: 8px; 
                        border-bottom-left-radius: 4px; border-bottom-right-radius: 8px;" class="mb-3 ${item.url ? "" : "border"}">
                            <img src="${item.url}" alt="">
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <h4 class="text-base font-semibold h-6 overflow-hidden">${item.name}</h4>
                            <span class="font-normal" style="font-size: 13px; line-height: 18px; color: rgba(55, 56, 60, 0.6);">${item.author}</span>
                            <span class="flex gap-1 text-sm font-semibold">
                                <span style="color: rgba(238, 23, 98, 1);"> <span>${item.discount}</span>%</span>
                                <span>${formatMoney(item.price)}</span> 
                                <span class="font-normal">원</span>                                   
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

function renderBestBooks(listData) {
    let stringHtml = '';
    let i = 1;
    for (const item of listData) {                 
            stringHtml +=
            `
                <div class="swiper-slide flex items-center">
                    <div class="flex gap-4">
                        <div style="width: 102px; height: 150px; overflow: hidden; 
                        border-top-left-radius: 4px; border-top-right-radius: 8px; 
                        border-bottom-left-radius: 4px; border-bottom-right-radius: 8px;" class="mb-3 ${item.url ? "" : "border"}">
                            <img style="width: 102px; height: 150px;" src="${item.url}" alt="">
                        </div>

                        <div class="flex gap-4">
                            <div class="relative">
                                <span class="absolute top-1 left-2 text-xs font-normal text-white">${i++}</span>
                                <img src="${item.isTop ? "./assets/images/icon/home/badge-top.svg" : "./assets/images/icon/home/badge-normal.svg"}" alt="icon">
                            </div>
                            <div class="flex flex-col gap-1.5">
                                <h4 class="text-base font-semibold truncate">${item.name}</h4>
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
    });
}

function renderPicks(listData) {
    let stringHtml = "";
    for (const item of listData) {
        stringHtml +=
        `
            <div class="rounded-xl overflow-hidden" style="width: 250px;">
                <div style="background-color: ${item.color}; padding: 21px 0;">
                    <p style="font-size: 22px; line-height: 30px; color: white; text-align: center;">${item.name}</p>
                </div>

                <div class="p-5 bg-white">
                    <div class="text-lg font-semibold">
                    ${item.title.split(", ").map((item => 
                        `<div style="line-height: 26px;">${item}</div>`
                    )).join("")}
                    </div>
                    <div style="font-size: 12px; line-height: 18px; color: rgba(55, 56, 60, 0.6); margin-top: 10px; height: 18px;"
                        class="font-normal">${item.detail}</div>
                </div>
            </div>
        `;
    }
    document.querySelector('#list-pick').innerHTML = stringHtml;
}

function renderReviews(listData) {
    let stringHtml = "";
    for (const item of listData) {
        stringHtml +=
        `
            <div class="swiper-slide">
                <div class="rounded-lg border flex flex-col gap-5 px-5 py-6"
                    style="border-color: rgba(112, 115, 124, 0.08); background-color: rgba(247, 247, 248, 1);">
                    <div class="flex gap-4">
                        <div style="width: 70px; height: 108px;">
                            <img style="width: 70px; height: 108px;"
                                src="${item.url}" alt="img">
                        </div>
                        <div class="py-2 flex-1">
                            <p class="text-base font-semibold mb-1" style="line-height: 26px;">${item.name}</p>
                            <span
                                style="font-size: 13px; line-height: 18px; font-weight: 400; color: rgba(55, 56, 60, 0.6);">${item.author}</span>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="flex">
                            ${Array(item.star).fill(null).map((item) => 
                            `
                            <img style="width: 24px; height: 24px;"
                                src="./assets/images/icon/home/blue-star.svg" alt="icon">
                            `).join("")}
                           
                        </div>
                        <div style="color: rgba(55, 56, 60, 0.16);">|</div>
                        <div style="font-size: 15px; line-height: 22px;" class="font-medium">${item.star}</div>
                    </div>
                    <div>
                        <p style="font-size: 15px; line-height: 24px; font-weight: 400; color: rgba(46, 47, 51, 0.88);
                            display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4; overflow: hidden;
                            text-overflow: ellipsis;">${item.detail}</p>
                    </div>
                    <div class="py-2"
                        style="font-size: 14px; line-height: 20px; font-weight: 400px; color: rgba(46, 47, 51, 0.88);">
                        <span>${item.user_review} </span>
                        <span>후기</span>
                    </div>
                </div>
            </div>
        `;
    }
    document.querySelector('#review .swiper-wrapper').innerHTML = stringHtml;

    // home review swipper
    var reviewSwiper = new Swiper(".reviewSwiper", {
        slidesPerView: 3,
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

// suggestion slide
let suggestionNext = document.querySelector('#suggestion .suggestion-next')
let suggestionPrev = document.querySelector('#suggestion .suggestion-prev')
suggestionNext.addEventListener('click', function(){
    let items = document.querySelectorAll('#suggestion .item')
    document.querySelector('#suggestion .slide').appendChild(items[0])
})
suggestionPrev.addEventListener('click', function(){
    let items = document.querySelectorAll('#suggestion .item')
    document.querySelector('#suggestion .slide').prepend(items[items.length - 1]) // here the length of items = 6
})

// sentence slide
let sentenceNext = document.querySelector('#sentence .sentence-next')
let sentencePrev = document.querySelector('#sentence .sentence-prev')
sentenceNext.addEventListener('click', function(){
    let items = document.querySelectorAll('#sentence .item')
    document.querySelector('#sentence .slide').appendChild(items[0])
})
sentencePrev.addEventListener('click', function(){
    let items = document.querySelectorAll('#sentence .item')
    document.querySelector('#sentence .slide').prepend(items[items.length - 1]) // here the length of items = 6
})

// sub-banner-swiper
var subBannerSwiper = new Swiper(".subBannerSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    // freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".sub-banner-next",
        prevEl: ".sub-banner-prev",
    }, 
});

// youtube-video-swipper
var subBannerSwiper = new Swiper(".youtubeVideoSwipper", {
    slidesPerView: 2,
    spaceBetween: 20,
    // freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".youtube-next",
        prevEl: ".youtube-prev",
    }, 
});

// home-news-feed-swiper
var newsFeedSwiper = new Swiper(".newsFeedSwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    // freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".news-feed-next",
        prevEl: ".news-feed-prev",
    }, 
});

