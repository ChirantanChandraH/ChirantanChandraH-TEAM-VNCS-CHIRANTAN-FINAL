// Global Variables
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
    initializeFilters();
});
// Category Management
function showCategory(category) {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
	 // Scroll to featured section
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

// Cart Functions
function addToCart(id, price, name) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }
