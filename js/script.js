

////////////////////////////////////////////////////////////////////


function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}


////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const userIcon = document.getElementById('user-info');
    const but = document.querySelector('.MyAccount')

    const user = document.getElementById('usericon')
    const Display = document.getElementById('display')

    if (isLoggedIn === 'true') {
        
        but.style.display = 'none';
        userIcon.style.display = 'inline';

        user.addEventListener('click', () => {
            Display.style.display = 'block'
        })
        
        Display.querySelector('i').addEventListener('click', () => {
            Display.style.display = 'none'
        })

    } else {

        but.style.display = 'inline';
        userIcon.style.display = 'none';
    }

    Display.querySelector('p').addEventListener('click', () => {
        localStorage.setItem('isLoggedIn', 'false'); 
        window.location.reload();

    })
        
})

function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');

    if (cartContainer) {
        cartContainer.innerHTML = '';

        cart.forEach(product => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" width="50">
                <p>${product.name} - ${product.quantity}x - $${(product.price * product.quantity).toFixed(2)}</p>
            `;
            cartContainer.appendChild(itemElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    if (document.getElementById('cart-items')) {
        loadCartItems();
    }
});


function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('#cart span');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}