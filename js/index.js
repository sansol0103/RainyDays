// Base URL
const apiBase = "http://rainydays.local";
const woocomBase = "/wp-json/wc/store";
const productBase = "/products";
const featuredBase = "?featured=true";

// Full URL
const fullURL = apiBase + woocomBase + productBase + featuredBase;

// Fetch
async function getProducts() {
    const response = await fetch(fullURL);

    const products = await response.json();

    return products;
}

console.log(getProducts());

// Create HTML
function createProductHTML(product) {
    const container = document.querySelector(".featured-products");

    const productContainer = document.createElement("a");
    productContainer.href = "product-flow/details.html?id=" + product.id;
    productContainer.classList.add("product");
    productContainer.id = product.id;

    const description = document.createElement("h2");
    description.innerText = product.name;
    productContainer.append(description);

    for (let i = 0; i < product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img);
    }

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

