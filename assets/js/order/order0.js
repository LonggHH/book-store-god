let dataShoppingCart = null;

function fetchData(url) {
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            dataShoppingCart = result.shoppingCart;
        })
        .then(() => {
            renderListStep(dataShoppingCart.steps);
        })
        .catch((error) => console.error("Error fetching data:", error));
}

fetchData(DEF_URL.page + '/data/mock/data.json');

function renderListStep(listData) {
    let stringHtml = '';
    let i = 1;
    for (const item of listData) {
        stringHtml +=
            `
            <li class="flex gap-2 items-center"> 
                <span class="flex items-center justify-center w-5 h-5 rounded-full"
                    style="background-color: ${item.active ? "rgba(32, 131, 254, 1)" : "rgba(247, 247, 248, 1)"}; color: ${item.active ? "white" : "rgba(55, 56, 60, 0.28)"};">${i++}</span>
                <span class="text-base font-semibold" style="color: ${item.active ? "rgba(23, 23, 25, 1)" : "rgba(55, 56, 60, 0.6)"};">${item.name}</span> 
            </li>
            `;
    }
    document.querySelector('#list-step').innerHTML = stringHtml;
}