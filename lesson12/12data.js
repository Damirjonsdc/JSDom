document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsContainer = document.getElementById('cart-items');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('h3').textContent;
            const price = button.parentElement.querySelector('p').textContent;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${productName}</span>
                <span>${price}</span>
                <button class="remove-from-cart-btn">❌</button>
            `;
            cartItemsContainer.appendChild(cartItem);

            const removeButtons = document.querySelectorAll('.remove-from-cart-btn');
            removeButtons.forEach(removeButton => {
                removeButton.addEventListener('click', () => {
                    removeButton.parentElement.remove();
                    if (cartItemsContainer.children.length === 0) {
                        document.getElementById('cart').style.display = 'none';
                    }
                });
            });

            document.getElementById('cart').style.display = 'block';
        });
    });
});
