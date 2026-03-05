// cart.js - කාට් එකේ සියලුම වැඩකෑලි මෙතන

// 1. පේජ් එක ලෝඩ් වෙද්දී කාට් එකේ කීයක් තියෙනවද බලන්න ඕනේ
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

// 2. බඩු කාට් එකට දාන ෆන්ෂන් එක
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    
    // දැනටමත් මේ බඩුව කාට් එකේ තියෙනවද බලනවා
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1; // තියෙනවා නම් ගාණ වැඩි කරනවා
        showNotification("Quantity updated!", "success");
    } else {
        product.quantity = 1; // අලුත් එකක් නම් ප්‍රමාණය 1 ක් විදිහට දානවා
        cart.push(product);
        showNotification("Added to Cart!", "success");
    }

    // ආයේ මෙමරි එකට සේව් කරනවා
    localStorage.setItem('myCart', JSON.stringify(cart));
    updateCartCount(); // හෙඩර් එකේ අංකෙ වෙනස් කරනවා
}

// 3. හෙඩර් එකේ කාට් අයිකන් එකේ නම්බර් එක වෙනස් කිරීම
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('myCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // index.html සහ category.html වල කාට් අයිකන් එකට ID එකක් දෙන්න ඕනේ "cart-count" කියලා
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = totalItems;
        countElement.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// 4. Notification (අපි කලින් හදපු එකමයි)
function showNotification(message, type = 'success') {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    
    // ස්ටයිල් ටික JS එකෙන්ම දෙමු (ලේසියට)
    Object.assign(toast.style, {
        position: 'fixed', top: '20px', right: '20px',
        background: type === 'success' ? '#2ecc71' : '#e74c3c',
        color: 'white', padding: '15px', borderRadius: '5px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)', zIndex: '9999'
    });

    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}