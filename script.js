const productsContainer = document.getElementById('products-container');
const cartItemsContainer = document.getElementById('cart-items');
const totalMrp = document.getElementById('total-mrp');
const totalAmount = document.getElementById('total-amount');
const discount = document.getElementById('discount');
const searchInput = document.getElementById('search-input');
const platformFee = 10;
const shippingFee = 20;

let products = [];
let cart = [];

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        products = data;
        displayProducts(products);
    });

function displayProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>☆ ${product.rating.rate}</p>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = '';
    let totalMrpAmount = 0;
    
    cart.forEach(item => {
        totalMrpAmount += item.price * item.quantity;
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div>
                <p>${item.title}</p>
                <p>₹${item.price}</p>
            </div>
            <div>
                <button onclick="updateQuantity(${item.id}, 'decrease')">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 'increase')">+</button>
            </div>
            <button onclick="removeFromCart(${item.id})">❌</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    const discountAmount = 50; // Example discount
    const totalAmountValue = totalMrpAmount - discountAmount + platformFee + shippingFee;

    totalMrp.innerText = `₹${totalMrpAmount}`;
    discount.innerText = `₹${discountAmount}`;
    totalAmount.innerText = `₹${totalAmountValue}`;
}


function updateQuantity(productId, action) {
    const cartItem = cart.find(item => item.id === productId);
    if (action === 'increase') {
        cartItem.quantity++;
    } else if (action === 'decrease' && cartItem.quantity > 1) {
        cartItem.quantity--;
    }
    updateCart();
}


searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );
    displayProducts(filteredProducts);
});
