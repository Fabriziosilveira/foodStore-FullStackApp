document.addEventListener('DOMContentLoaded', async() => {
    const cartCountElement = document.getElementById('cartCount');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cartCount');
    const cartButton = document.getElementById('cartButton');
    
    try {
        const response = await fetch('http://localhost:3100/menu/products', {
            method: 'POST'
        });
        if (!response.ok) {
            throw new Error('Falha ao criar produtos');
        }
    } catch (error) {
        console.error('Error:', error);
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            let currentCount = parseInt(cartCountElement.textContent, 10);
            cartCountElement.textContent = currentCount + 1;
        });
    });

    const loadCartCount = () => {
        const count = localStorage.getItem('cartCount');
        cartCount.innerText = count ? count : '0';
    };
    
    loadCartCount();

    cartButton.addEventListener('click', () => {
        window.location.href = '../checkoutPage/checkout.html';
    });

});