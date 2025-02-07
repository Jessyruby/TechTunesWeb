function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name') || 'Unknown Product',
        image: params.get('image') || '',
        price: parseFloat(params.get('price')) || 0.00,
        description: params.get('description') || 'No description available.'
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const product = getQueryParams();

    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('product-description').textContent = product.description;

    updateCartCount();
});

document.querySelector('.cart-button').addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = getQueryParams();

    let existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    if (document.getElementById('cart-items')) {
        loadCart();
    }
});
