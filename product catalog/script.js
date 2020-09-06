let filter = "id";
api.searchAllProducts().then(data => {
    createTableRow(data, 'all');
}).catch(e => console.log("Product catalog not avialable"));

const appForm = document.querySelector('#appForm');
const allProductsTable = document.querySelector('#allProds > tbody');
const similarProductsTable = document.querySelector('#similarProds > tbody');
const similarProductsTableHeader = document.querySelector('#similarHeader');
const selectFilter = document.querySelector('#filter');
const productId = document.querySelector('#productId');
const priceEl = document.querySelector('#price');
const typeEl = document.querySelector('#type');

selectFilter.onchange = function (e) {
    filter = e.target.value;
}

appForm.onsubmit = function (e) {
    e.preventDefault();
    const searched = e.target.searchedItem.value;
    if (searched === '') alert("Please provide valid Id, Price or Type of a product!!");
    else if (filter === 'id') findById(searched);
    else findByTypeAndPrice(searched);
}

function findByTypeAndPrice(searched) {
    let filteredData = "";
    if (filter === "price") filteredData = api.searchProductByPrice(searched);
    else filteredData = api.searchProductByType(searched);
    filteredData.then(data => {
        similarProductsTable.innerHTML = similarProductsTableHeader.innerHTML;
        createTableRow(data, 'similar');
    }).catch(e => alert(e));
}

function findById(id) {
    api.searchProductById(id).then(data => {
        const { id, price, type } = data;
        productId.innerHTML = id;
        priceEl.innerHTML = price;
        typeEl.innerHTML = type;
        findByTypeAndPrice(type);
    }).catch(e => alert(e));
}

function createTableRow(products, tableType) {
    if (products.length) {
        for (let product of products) {
            const tr = document.createElement('tr');
            const id = document.createElement('td');
            const type = document.createElement('td');
            const price = document.createElement('td');
            const details = document.createElement('td');
            const detailsBtn = document.createElement('button');
            detailsBtn.innerHTML = '📤';
            detailsBtn.addEventListener('click', findById.bind(detailsBtn, product.id));
            details.append(detailsBtn);
            id.append(product.id);
            type.append(product.type);
            price.append(product.price);
            tr.append(id);
            tr.append(type);
            tr.append(price);
            tr.append(details);
            if (tableType === 'all') allProductsTable.append(tr);
            else similarProductsTable.append(tr);
        }
    }
}
