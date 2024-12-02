

// Retrieve product details from localStorage
const productName = localStorage.getItem('productName');
const productImage = localStorage.getItem('productImage');
const productPrice = localStorage.getItem('productPrice');
const productDescription = localStorage.getItem('productDescription');

// Display the product details on the page
document.getElementById('product-name').textContent = productName;
document.getElementById('product-image').src = productImage;
document.getElementById('product-description').textContent = productDescription;
document.getElementById('product-price').textContent = productPrice;
