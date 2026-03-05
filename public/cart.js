
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});


function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1; 
        showNotification("Quantity updated!", "success");
    } else {
        product.quantity = 1; 
        cart.push(product);
        showNotification("Added to Cart!", "success");
    }

    localStorage.setItem('myCart', JSON.stringify(cart));
    updateCartCount(); 
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('myCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = totalItems;
        countElement.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

function showNotification(message, type = 'success') {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;

    Object.assign(toast.style, {
        position: 'fixed', top: '20px', right: '20px',
        background: type === 'success' ? '#2ecc71' : '#e74c3c',
        color: 'white', padding: '15px', borderRadius: '5px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)', zIndex: '9999'
    });

    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
