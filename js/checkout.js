const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const jacketId = params.get("id");

async function getJacket() {
    const response = await fetch("http://rainydays.local/wp-json/wc/store/products/" + jacketId);

    const product = await response.json();

    return product;
}

getJacket();

function createProductHTML(product) {
    const container = document.querySelector(".container");

    for (let i = 0; i < product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        container.append(img);
    }

    const title = document.createElement("h2");
    title.innerText = product.name;
    container.append(title);

    const price = document.createElement("p");
    price.classList.add("price");
    price.innerText = product.prices.price /100 + " kr";
    container.append(price);
}

async function main() {
    const products = await getJacket();
    createProductHTML(products);
};

main();