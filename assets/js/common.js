// import util.js after
// DEF_URL
// 

let dataCommon = null;

function fetchData(url) {    
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            dataCommon = result;            
        })
        .then(() => {        
            renderHeaderCategory(dataCommon.home.headerCategory);           
        })
        .catch((error) => console.error("Error fetching data:", error));
}
fetchData(DEF_URL.page + '/data/mock/data.json');

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