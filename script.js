// Global Variables
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
    initializeFilters();
});
