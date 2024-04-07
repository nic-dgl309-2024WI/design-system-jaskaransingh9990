// =========================variables=================================
const products = [
    { name: "Petunia", image: "images/products/Petunia.webp" },
    { name: "Geranium", image: "images/products/Geranium.jpeg" },
    { name: "Snapdragon", image: "images/products/Snapdragon.jpeg" },
    { name: "Daylilies", image: "images/products/daylilies.webp" },
    { name: "Basil", image: "images/products/basil.webp" },
    { name: "Perennial", image: "images/products/perennial.jpeg" },
];

// =====================stand alone functions=========================
const showRandomProducts = () => {
    let numProductsToShow;

    const pageWidth = window.innerWidth;
    if (pageWidth > 900) numProductsToShow = 3;
    else if (pageWidth <= 900 && pageWidth >= 768) numProductsToShow = 2;
    else numProductsToShow = 1;

    const randomProducts = [];
    const productIndices = [];
    while (randomProducts.length < numProductsToShow) {
        const randomIndex = Math.floor(Math.random() * products.length);
        if (!productIndices.includes(randomIndex)) {
            randomProducts.push(products[randomIndex]);
            productIndices.push(randomIndex);
        }
    }

    const productListDiv = document.getElementById("product-list");
    productListDiv.innerHTML = "";

    randomProducts.forEach((product) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add(
            "card",
            "l-flex",
            "l-flex-column",
            "l-pb-1",
            "l-grid-gap-1"
        );

        const img = document.createElement("img");
        img.src = product.image;
        img.height = 230;
        img.width = 300;

        const span = document.createElement("span");
        span.textContent = product.name;

        cardDiv.appendChild(img);
        cardDiv.appendChild(span);

        productListDiv.appendChild(cardDiv);
    });
};

function activateMenuIcon() {
    const menuIcon = document.querySelector(".menu-icon");
    const options = document.querySelector(".options");

    menuIcon.addEventListener("click", () => {
        options.classList.toggle("active");
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // =======================HEADER JS================================
    const menuIcon = document.querySelector(".menu-icon");
    const options = document.querySelector(".options");

    menuIcon.addEventListener("click", () => {
        options.classList.toggle("active");
    });

    // =======================Product Section JS================================
    document.getElementById("prevButton").addEventListener("click", () => {
        showRandomProducts();
    });

    document.getElementById("nextButton").addEventListener("click", () => {
        showRandomProducts();
    });

    showRandomProducts();
    window.addEventListener("resize", showRandomProducts);
});