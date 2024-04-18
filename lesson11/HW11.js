document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const featuredItems = document.querySelector('.featured-items');
            data.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('item');
                itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span>$${item.price}</span>
                `;
                featuredItems.appendChild(itemElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
