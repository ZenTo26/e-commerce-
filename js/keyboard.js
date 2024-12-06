const razerProducts = [
  {
    name: "Razer Huntsman V2 Optical Gaming Keyboard",
    description:
      " Linear Optical Switches - 8000Hz Polling Rate - Doubleshot PBT Keycaps - Dedicated Media Keys & Dial - Ergonomic Wrist Rest - Snap Tap",
    price: "$199.99",
    imageUrl: "../Assets/RazerKeyboard/R1.jpg",
    productId: "razerK1",
  },
  {
    name: "Razer BlackWidow V4",
    description:
      "Yellow Switches Linear & Silent - 6 Macro Keys - Chroma RGB - Doubleshot ABS Keycaps - Roller & Media Keys - Snap Tap",
    price: "$69.99",
    imageUrl: "../Assets/RazerKeyboard/R2.jpg",
    productId: "razerK2",
  },
  {
    name: "Razer Huntsman Mini 60%",
    description:
      "Fast Keyboard Switches - Clicky Optical Switches - Chroma RGB Lighting - PBT Keycaps - Onboard Memory - Snap Tap - Black",
    price: "$99.99",
    imageUrl: "../Assets/RazerKeyboard/R3.jpg",
    productId: "razerK3",
  },
  {
    name: "Razer Ornata V3",
    description:
      "Low Profile Keys - Silent Membrane Switches - Spill Resistant - Chroma RGB Lighting - Ergonomic Wrist Rest - Snap Tap",
    price: "$34.99",
    imageUrl: "../Assets/RazerKeyboard/R4.jpg",
    productId: "razerK4",
  },
  {
    name: "Razer BlackWidow V4 Pro 75% Wireless Gaming Keyboard",
    description:
      "OLED Display - True 4K Hz Wireless - Bluetooth - Hot Swappable - Orange Tactile Switches - Command Dial - Snap Tap - Chroma RGB - Wrist Rest",
    price: "$299.99",
    imageUrl: "../Assets/RazerKeyboard/R8.jpg",
    productId: "razerK8",
  },
];

const logitechProducts = [
  {
    name: "Logitech ERGO K860 Wireless Ergonomic Qwerty Keyboard",
    description:
      "Split Keyboard, Wrist Rest, Natural Typing, Stain-Resistant Fabric, Bluetooth and USB Connectivity, Compatible with Windows/Mac,Black",
    price: "$94.99",
    imageUrl: "../Assets/LogitechKeyboard/L1.jpg",
    productId: "logitechK1",
  },
  {
    name: "Logitech MX Keys Mini Minimalist Wireless Illuminated Keyboard",
    description:
      "Compact, Bluetooth, Backlit, USB-C, Compatible with Apple macOS, iOS, Windows, Linux, Android, Metal Build - Graphite",
    price: "$79.99",
    imageUrl: "../Assets/LogitechKeyboard/L2.jpg",
    productId: "logitechK2",
  },
  {
    name: "Logitech MK540 Advanced Wireless Keyboard and Mouse",
    description:
      "Combo for Windows, 2.4 GHz Unifying USB-Receiver, Multimedia Hotkeys, 3-Year Battery Life, for PC, Laptop",
    price: "$54.99",
    imageUrl: "../Assets/LogitechKeyboard/L3.jpg",
    productId: "logitechK3",
  },
  {
    name: "Logitech G915 LIGHTSPEED RGB Mechanical Gaming Keyboard",
    description:
      " Low Profile GL Tactile Key Switch, LIGHTSYNC RGB, Advanced Wireless and Bluetooth Support - Tactile,Black",
    price: "$159.99",
    imageUrl: "../Assets/LogitechKeyboard/L4.jpg",
    productId: "logitechK4",
  },
  {
    name: "Logitech MX Mechanical Wireless Illuminated Performance Keyboard",
    description:
      "Clicky Switches, Backlit Keys, Bluetooth, USB-C, macOS, Windows, Linux, iOS, Android, Metal",
    price: "$154.99",
    imageUrl: "../Assets/LogitechKeyboard/L8.jpg",
    productId: "logitechK8",
  },
];

// Function to render products
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear the container before adding new products

  products.forEach((product) => {
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
  const productCards = container.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      const productId = card.getAttribute("data-product-id");
      const product = [...razerProducts, ...logitechProducts].find(
        (p) => p.productId === productId
      );

      // Save product data to localStorage
      localStorage.setItem("selectedProduct", JSON.stringify(product));

      // Navigate to product-detail.html
      window.location.href = `product-detail.html`;
    });
  });
}
// Load product details from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const productDetailContainer = document.getElementById(
    "product-detail-container"
  );
  const productData = localStorage.getItem("selectedProduct");

  if (productData) {
    const product = JSON.parse(productData);

    const productDetailHTML = `
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 h-100">
          <div class="card h-100 product-card" tabindex="0" data-product-id="${product.productId}" style="cursor: pointer;">
            <img src="${product.imageUrl}" class="card-img-top img-fluid" alt="${product.name}" />
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
    productDetailContainer.innerHTML = productDetailHTML;
  } else {
    productDetailContainer.innerHTML = "<p>Product details not found.</p>";
  }
});

// Call the function to render Razer and Logitech products
renderProducts(razerProducts, "razer-products");
renderProducts(logitechProducts, "logitech-products");
