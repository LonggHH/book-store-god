
function renderBooksLinear() {
    let stringHtml = '';
    for(let i = 0; i < 6; i++) {
        stringHtml +=
        `
            <div class="mb-6 flex gap-1 sm:gap-3">
                <div style="width: 24px; height: 24px;">
                    <img style="width: 24px; height: 24px;" src="../assets/images/icon/search/check-off.svg" alt="">
                </div>
    
                <div class="flex flex-col sm:flex-row flex-1 items-start">
                    <div class="flex-1">
                        <div class="flex gap-5">
                            <div class="scope-imgage image-size border relative">
                                <img class="w-full h-full"  src="../assets/images/image/books/book-error-small-x.png" alt="img">
                                <div class="absolute bottom-3 right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center"
                                    style="background-color: rgba(0, 0, 0, 0.16);">
                                    <i class="fa-solid fa-heart text-white"></i>
                                </div>
                            </div>
    
                            <div class="flex-1 flex flex-col justify-between">
                                <div>
                                    <h4 class="text-base font-semibold mb-3">책 제목</h4>
                                    <div class="mb-3">
                                        <span class="text-13-l-18 font-normal" style="color: rgba(55, 56, 60, 0.6);">황창연 신부∙바오로딸</span>
                                    </div>
                                    <div class="flex gap-1 items-center text-base font-semibold">
                                        <span style="color: rgba(238, 23, 98, 1);"><span>10</span>%</span>
                                        <span class="flex">
                                            <span>12,000</span>
                                            <span class="font-normal">원</span>
                                        </span>
                                        <span class="flex items-center"
                                            style="color: rgba(55, 56, 60, 0.6);">
                                            <span class="ml-2 pl-1 border-l inline-block h-3.5 text-11-l-14 font-normal">100P</span>
                                    </div>
                                </div>
                                <div class="hidden sm:block">
                                    <p class="two-lines" style="color: rgba(55, 56, 60, 0.6);">
                                        자녀에게 ‘신앙’을 선물하고픈 부모들의 현실적인 고민을 듣고 30여 년간 청소년 ‧ 청년 사목을 해온 저자가 사목 경험과 통찰을 나눈 신앙교육 안
                                    </p>
                                </div>
                            </div>
                        </div>
    
                        <div class="py-1.5 flex justify-center rounded border mt-3 px-4 btn-book">
                            <div class="flex">
                                <img src="../assets/images/icon/search/book-white.svg" alt="icon">
                                <span class="text-13-l-18 font-semibold">미리보기</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row-reverse sm:flex-col gap-3 mt-3 sm:mt-0">
                        <div class="text-15-l-22 font-semibold py-2.5 padding-text-buy px-3.5 sm:px-6 rounded" style="background-color: rgba(253, 228, 236, 1); color: rgba(214, 15, 89, 1);">바로 구매</div>
                        <div class="text-15-l-22 font-semibold py-2.5 padding-text-buy px-3.5 sm:px-6 rounded border" style="border-color: rgba(238, 23, 98, 1); color: rgba(214, 15, 89, 1);">장바구니</div>
                        <div class="text-15-l-22 font-semibold py-2.5 padding-text-buy px-3.5 sm:px-6 rounded border" style="border-color: rgba(32, 131, 254, 1); color: rgba(31, 111, 237, 1);">기부하기</div>
                    </div>
                </div>
            </div>
        `
    }
    
    document.querySelector('#list-book').innerHTML = stringHtml;
}
// renderBooksLinear();


function renderBooksGrid() {
    let stringHtml = '';
    for(let i = 1; i < 21; i++) {
        stringHtml +=
        `
            <div class="flex flex-col gap-3 ">
                <div class="flex justify-between">
                    <div style="width: 24px; height: 24px;">
                        <img style="width: 24px; height: 24px;" src="../assets/images/icon/search/check-off.svg" alt="">
                    </div>

                    <div class="h-6 px-3 ${i <= 3 ? "bg-highlight" : "bg-gray"} flex justify-center gap-6 items-center" style="border-top-left-radius: 8px; border-bottom-right-radius: 8px;">

                        ${i===1 ? `
                            <div class="flex items-center gap-1.5">
                                <img src="../assets/images/icon/main-category/crown.svg" />
                                <div class="text-xs font-medium text-white">Best</div>
                            </div>
                            ` : ""}
                        

                        <div class="text-xs font-semibold text-white">${i}</div>
                    </div>
                </div>

                <div class="scope-imgage image-size border shadow-md relative">
                    <img class="w-full h-full"  src="../assets/images/image/books/book-error-small-x.png" alt="img">
                    <div class="absolute bottom-3 right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center"
                        style="background-color: rgba(0, 0, 0, 0.16);">
                        <i class="fa-solid fa-heart text-white"></i>
                    </div>
                </div>
                
                <div>
                    <div class="mb-2">
                        <h4 class=" text-base font-semibold">책 제목</h4>
                        <span class="inline-block text-13-l-18 font-normal" style="height: 18px;">저자 ∙ 바오로딸</span>
                    </div>
                    <div class="flex items-center">
                        <span class="inline-block text-sm font-semibold h-5" style="color: rgba(238, 23, 98, 1);">
                            <span class="inline-block text-sm font-semibold h-5">10%</span>                                            
                        </span>
                        <span class="inline-block text-sm font-semibold h-5">
                            <span class="inline-block text-sm font-semibold h-5">12,000원</span>                                            
                        </span>
                        <span class="hidden sm:inline-block text-11-l-14 font-normal ml-1 pl-0.5 border-l " style="color: rgba(55, 56, 60, 0.6); height: 14px;">
                            <span class="inline-block text-11-l-14 font-normal h-5">100P</span>                                            
                        </span>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div style="background-color: rgba(253, 228, 236, 1);" class="py-1.5 rounded px-7 sm:px-9 h-full flex items-center justify-center">
                        <span class="text-13-l-18 font-semibold inline-block" style="height: 18px; color: rgba(214, 15, 89, 1);">바로구매</span>
                    </div>
                    <div class="hidden sm:block rounded border p-1.5">
                        <img src="../assets/images/icon/main-category/cart.svg" alt="">
                    </div>
                </div>
            </div>
        `
    }
    
    document.querySelector('#list-book').innerHTML = stringHtml;
}
renderBooksGrid()