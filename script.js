// Product list
let products = [
    {
        id: 1,
        name: "Used Laptop",
        seller: "Rahul",
        price: 25000,
        category: "Electronics",
        description: "Good condition laptop suitable for students."
    },

    {
        id: 2,
        name: "Engineering Books",
        seller: "Priya",
        price: 800,
        category: "Books",
        description: "Second-hand engineering textbooks in good condition."
    },

    {
        id: 3,
        name: "Study Table",
        seller: "Arun",
        price: 1500,
        category: "Furniture",
        description: "Wooden study table in good condition."
    }
];


// Add a new product
function addProduct() {

    const name =
        document.getElementById("productName").value.trim();

    const seller =
        document.getElementById("sellerName").value.trim();

    const price =
        document.getElementById("productPrice").value;

    const category =
        document.getElementById("category").value;

    const description =
        document.getElementById("description").value.trim();


    // Validation
    if (
        name === "" ||
        seller === "" ||
        price === "" ||
        category === "" ||
        description === ""
    ) {

        alert("Please fill all the fields.");

        return;
    }


    // Create product
    const newProduct = {

        id: Date.now(),

        name: name,

        seller: seller,

        price: Number(price),

        category: category,

        description: description
    };


    products.push(newProduct);

    displayProducts();

    // Clear form
    document.getElementById("productName").value = "";

    document.getElementById("sellerName").value = "";

    document.getElementById("productPrice").value = "";

    document.getElementById("category").value = "";

    document.getElementById("description").value = "";


    alert("Product listed successfully!");
}


// Display products
function displayProducts() {

    const container =
        document.getElementById("productsContainer");

    const searchText =
        document.getElementById("search").value.toLowerCase();


    container.innerHTML = "";


    // Filter products
    const filteredProducts = products.filter(function(product) {

        return product.name
            .toLowerCase()
            .includes(searchText);

    });


    // No products
    if (filteredProducts.length === 0) {

        container.innerHTML =
            "<p>No products found.</p>";

        return;
    }


    // Display products
    filteredProducts.forEach(function(product) {

        const card =
            document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <h3>${product.name}</h3>

            <span class="category">
                ${product.category}
            </span>

            <p>
                ${product.description}
            </p>

            <p>
                Seller: <strong>${product.seller}</strong>
            </p>

            <p class="price">
                ₹${product.price}
            </p>

            <button
                class="buy-btn"
                onclick="buyProduct(${product.id})">

                Buy Now

            </button>

            <button
                class="delete-btn"
                onclick="deleteProduct(${product.id})">

                Remove

            </button>
        `;


        container.appendChild(card);
    });
}


// Buy product
function buyProduct(id) {

    const product =
        products.find(function(product) {

            return product.id === id;

        });


    if (product) {

        alert(
            "You have selected " +
            product.name +
            ". Contact the seller: " +
            product.seller
        );
    }
}


// Delete product
function deleteProduct(id) {

    products = products.filter(function(product) {

        return product.id !== id;

    });


    displayProducts();
}


// Display products when page loads
displayProducts();
