(function (window) {
    function apiLib() {
        const catalog = createRandomCatalog(100);

        function createRandomProduct() {
            const types = ["Electronics", "Book", "Clothing", "Food", "Wellness"];
            const price = parseFloat((Math.random() * 500).toFixed(2));
            const type = types[Math.floor(Math.random() * 5)];
            return { price, type };
        }

        function createRandomCatalog(num) {
            const catalog = [];
            for (let i = 0; i < num; i++) {
                const product = createRandomProduct();
                catalog.push({ id: i, price: product.price, type: product.type });
            }
            return catalog;
        }

        function searchProductById(id) {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    const product = catalog.find(product => product.id === +id);
                    if (product) res(product);
                    else rej("Invalid ID provided");
                }, 1000);
            });
        }

        function searchProductByType(type) {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    const products = catalog.filter(product => product.type.toLowerCase() === type.toLowerCase());
                    if (products.length) res(products);
                    else rej("Product not found");
                }, 1000)
            });
        }

        function searchProductByPrice(price) {
            return new Promise((res, rej) => {
                const products = catalog.filter(product => product.price <= parseFloat(price));
                if (products.length) res(products);
                else rej("No Product found below given price");
            })
        }

        function searchAllProducts() {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    if (catalog.length) res(catalog);
                    else rej("Internal server error. API is not available");
                }, 1000)
            })
        }

        return {
            searchProductById,
            searchProductByType,
            searchProductByPrice,
            searchAllProducts
        };
    }
    if (typeof window.api == "undefined") window.api = apiLib();
})(window);
