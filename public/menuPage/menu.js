document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cartCount');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            let currentCount = parseInt(cartCountElement.textContent, 10);
            cartCountElement.textContent = currentCount + 1;
        });
    });
});