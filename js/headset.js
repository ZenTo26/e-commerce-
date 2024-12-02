const razerHeadset = [
  {
    name: "Razer Moray in-Ear Monitor for All-Day Streaming",
    description:
      " Clear, Full-Range Audio - Comfortable Fit - Low Profile Design - Sound Isolating Earbuds - Detachable Over-Ear Wire - Custom Ear Tips & Case - Black",
    price: "$129.99",
    imageUrl: "../Assets/RazerHeadset/E11.jpg",
    productId: "razerH1",
  },
  {
    name: "Razer BlackShark V2 X Gaming Headset",
    description:
      "7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - For PC, PS4, PS5, Switch - 3.5mm Audio Jack - Black",
    price: "$34.99",
    imageUrl: "../Assets/RazerHeadset/E22.jpg",
    productId: "razerH2",
  },
  {
    name: "Razer Hammerhead True Wireless",
    description:
      "(2nd Gen) Bluetooth Gaming Earbuds: Chroma RGB Lighting -60ms Low-Latency- Active Noise Cancellation - Dual Environmental Noise Cancelling Microphones- Classic Black",
    price: "$98.99",
    imageUrl: "../Assets/RazerHeadset/E33.jpg",
    productId: "razerH3",
  },
  {
    name: "Razer Kraken X Ultralight Gaming Headset",
    description:
      "7.1 Surround Sound - Lightweight Aluminum Frame - Bendable Cardioid Microphone - for PC, PS4, PS5, Switch, Xbox One, Xbox Series X|S, Mobile - Black",
    price: "$83.99",
    imageUrl: "../Assets/RazerHeadset/E1010.jpg",
    productId: "razerH10",
  },
  {
    name: "Razer BlackShark V2 Pro Wireless Gaming Headset",
    description:
      "THX 7.1 Spatial Surround Sound - 50mm Drivers - Detachable Mic - for PC, PS5, PS4, Switch, Black",
    price: "$179.99",
    imageUrl: "../Assets/RazerHeadset/E99.jpg",
    productId: "razerH9",
  },
];

const logitecgHeadset = [
  {
    name: "Logitech G432 Wired Gaming Headset",
    description:
      "7.1 Surround Sound, DTS Headphone:X 2.0, Flip-to-Mute Mic, PC (Leatherette) Black/Blue",
    price: "$37.99",
    imageUrl: "../Assets/LogitechHeadset/E1.jpg",
    productId: "logitechH1",
  },
  {
    name: "Logitech G335 Wired Gaming Headset",
    description:
      "with Flip to Mute Microphone, 3.5mm Audio Jack, Memory Foam Earpads, Lightweight, Compatible with PC, PlayStation, Xbox, Nintendo Switch - White",
    price: "$48.99",
    imageUrl: "../Assets/LogitechHeadset/E2.jpg",
    productId: "logitechH2",
  },
  {
    name: "Logitech G333 VR Earphones",
    description:
      " for Oculus Quest 2 - Oculus Ready - Custom-length Cable and Straps - Dual Driver Audio Designed for Gaming - Durable Aluminum Housing - Low-Latency 3.5 mm Aux",
    price: "$16.99",
    imageUrl: "../Assets/LogitechHeadset/E10.jpg",
    productId: "logitechH10",
  },
  {
    name: "Logitech G PRO Gaming Headset ",
    description:
      " for Oculus Quest 2 - Oculus Ready - Custom-length Cable - PRO-G Precision Gaming Audio Driver - Steel and Aluminum Build - Low-Latency 3.5 mm Aux Connection",
    price: "$61.99",
    imageUrl: "../Assets/LogitechHeadset/E6.jpg",
    productId: "logitechH6",
  },
  {
    name: "Logitech G FITS True Wireless Gaming Earbuds",
    description:
      "Custom Molded Fit, Lightspeed + Bluetooth, Four Beamforming Microphones, PC, Mac, PS5, PS4, Mobile, Nintendo Switch - White",
    price: "$189.99",
    imageUrl: "../Assets/LogitechHeadset/E8.jpg",
    productId: "logitechH8",
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
      const product = [...razerHeadset, ...logitecgHeadset].find(
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
    productDetailContainer.innerHTML = "<p>Product details not found.</p>";
  }
});

// Call the function to render Razer and Logitech products
renderProducts(razerHeadset, "razer-headset");
renderProducts(logitecgHeadset, "logitech-headset");
renderProducts(Alienware, "Alienware-products");
