const catalog = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },

    {
        id: 2,
        name: "Mobile",
        price: 20000
    }
];

function loadCatalog() {

    const content = document.getElementById("content");

    if (!content) return;

    content.innerHTML = "<h2>Catalog</h2>";

    for (let product of catalog) {

        content.innerHTML += `
            <div class="product">

                <h3>${product.name}</h3>

                <p>₹ ${product.price}</p>

                <button onclick="addToCart('${product.name}')">
                    Add to Cart
                </button>

            </div>
        `;
    }
}

function addToCart(name) {

    localStorage.setItem("selectedItem", name);

    alert(name + " is added to cart!");
}

loadCatalog();