const dellProducts = [
    {
      name: "Ultra Laptop",
      description: "Powerful laptop for professionals",
      price: "$1299.99",
      imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
      productId: "ultra-laptop"
    },
    {
      name: "Gaming Mouse",
      description: "High precision gaming mouse",
      price: "$59.99",
      imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
      productId: "gaming-mouse"
    },
    {
        name: "Gaming Mouse",
        description: "High precision gaming mouse",
        price: "$59.99",
        imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
        productId: "gaming-mouse"
      },
      {
        name: "Gaming Mouse",
        description: "High precision gaming mouse",
        price: "$59.99",
        imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
        productId: "gaming-mouse"
      }
  ];
  
  const asusProducts = [
    {
      name: "Wireless Keyboard",
      description: "Comfortable wireless keyboard",
      price: "$79.99",
      imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
      productId: "wireless-keyboard"
    },
    {
      name: "Bluetooth Headset",
      description: "Noise-cancelling Bluetooth headset",
      price: "$99.99",
      imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
      productId: "bluetooth-headset"
    }
  ];

  
  // Function to render products
  function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear the container before adding new products
  
    products.forEach(product => {
      const productCard = `
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100 product-card" tabindex="0" data-product-id="${product.productId}" style="cursor: pointer;">
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}" />
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="price">${product.price}</p>
              <button class="btn btn-danger w-100" aria-label="Add ${product.name} to cart">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += productCard;
    });
  
    // Attach event listeners to each product card
    const productCards = container.querySelectorAll('.product-card');
    productCards.forEach(card => {
      card.addEventListener('click', () => {
        const productId = card.getAttribute('data-product-id');
        const product = [...dellProducts, ...asusProducts].find(p => p.productId === productId);
  
        // Save product data to localStorage
        localStorage.setItem('selectedProduct', JSON.stringify(product));
  
        // Navigate to product-detail.html
        window.location.href = `product-detail.html`;
      });
    });
  }
  // Load product details from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const productDetailContainer = document.getElementById('product-detail-container');
    const productData = localStorage.getItem('selectedProduct');
  
    if (productData) {
      const product = JSON.parse(productData);
  
      const productDetailHTML = `
        <div class="card">
          <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h3 class="card-title">${product.name}</h3>
            <p class="card-text">${product.description}</p>
            <h4 class="price">${product.price}</h4>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      `;
      productDetailContainer.innerHTML = productDetailHTML;
    } else {
      productDetailContainer.innerHTML = '<p>Product details not found.</p>';
    }
  });
  
  // Call the function to render Razer and Logitech products
  renderProducts(dellProducts, 'dell-PC');
  renderProducts(asusProducts, 'Asus-PC');

  