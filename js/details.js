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
    const container = document.querySelector(".product-card");

    for (let i = 0; i < product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        container.append(img);
    }

    const name = document.createElement("h2");
    name.innerText = product.name;
    container.append(name);

    const price = document.createElement("p");
    price.classList.add("price");
    price.innerText = product.prices.price /100 + " kr";
    container.append(price);

    // const description = document.createElement("p");
    // description.innerText = product.description;
    // container.append(description);

    const button = document.createElement("a");
    button.href = "checkout.html?id=" + product.id;
    button.classList.add("cta");
    button.innerText = "Purchase now";
    container.append(button);

    title.innerText = product.name;

    console.log(title);
}

async function main() {
    const products = await getJacket();
    createProductHTML(products);
};

main();