function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cart-items');
    let cartCount = document.querySelector('#cart span');

    cartContainer.innerHTML = "";
    let totalItems = 0;

    cart.forEach((product, index) => {
        totalItems += product.quantity;
        cartContainer.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>Price: $ ${(product.price * product.quantity).toFixed(2)}</p>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${product.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <button class="button-remove" onclick="removeItem(${index})">Remover</button>
            </div>
        `;
    });

    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
    updateCartCount();
}

document.addEventListener('DOMContentLoaded', loadCart);
