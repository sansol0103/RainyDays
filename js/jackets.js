// Base URL
const apiBase = "http://rainydays.local";
const woocomBase = "/wp-json/wc/store";
const productBase = "/products";

// Full URL
const fullURL = apiBase + woocomBase + productBase;

// Fetch
async function getProducts() {
    const response = await fetch(fullURL);

    const products = await response.json();

    return products;
}

console.log(getProducts());

// Create HTML
function createProductHTML(product) {
    const container = document.querySelector(".product-grid");

    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.id = product.id;

    const title = document.createElement("h2");
    title.innerText = product.name;
    productContainer.append(title);

    for (let i = 0; i < product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img);
    }

    const button = document.createElement("button");
    button.classList.add("cta");
    button.innerText = "Purchase!";
    productContainer.append(button);

    container.append(productContainer);
}

function createProductsHTML(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        createProductHTML(product);
    }
}

async function main() {
    const products = await getProducts();
    createProductsHTML(products);
};

main();

