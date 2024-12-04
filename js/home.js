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

const asusProducts = [
  {
    name: "ASUS TUF Gaming A15 Gaming Laptop",
    description:
      "15.6” FHD 144Hz, 100% sRGB Display, GeForce RTX 4060, AMD Ryzen 5 7535HS, 16GB DDR5, 512GB PCIe SSD, Wi-Fi 6, Windows 11, FA507NV-EH53",
    price: "$899.99",
    imageUrl: "../Assets/ASUSPIC/Pic1.jpg",
    productId: "asus1",
  },
  {
    name: "TUF Gaming A16 Laptop",
    description:
      "16” FHD+ 165Hz 7ms 100% sRGB AMD Octa-core Ryzen 7 7735HS 32GB RAM 1TB SSD Radeon RX 7600S 8GB Graphic (>RTX 4060) Backlit USB-C USB4 Fast Charging Win11 +HDMI Cable",
    price: "$1049.99",
    imageUrl: "../Assets/ASUSPIC/Pic2.jpg",
    productId: "asus2",
  },
  {
    name: "Asus TUF F15 (2023) Gaming Laptop",
    description:
      "15.6” FHD 144Hz FHD IPS-Type Display, NVIDIA GeForce RTX 4070, Intel Core i7-12700H, 32GB DDR4, 1TB PCIe SSD,Wi-Fi 6, Windows 11 Home, Backlit Keyboard, Gray/OLY",
    price: "$1349.99",
    imageUrl: "../Assets/ASUSPIC/Pic4.jpg",
    productId: "asus4",
  },
  {
    name: "ASUS ROG StrixG18",
    description:
      "G814JVR-N6014W Volt-GREEN- i9-14900HX-16GB-1TB-RTX™4060 8GB-18” QHD-Wi11-3Y",
    price: "$1699.99",
    imageUrl: "../Assets/ASUSPIC/Pic6.png",
    productId: "asus6",
  },
  {
    name: "ASUS ROG Zephyrus Duo16",
    description:
      "Duo16 GX650PY-NM042W Black-R9-7945HX-32G(16*2)-2TB-16” QHD-RTX4090 16G-MS-Bag-2Y",
    price: "$3999.99",
    imageUrl: "../Assets/ASUSPIC/Pic8.png",
    productId: "asus8",
  },
];

const alienwareProducts = [
  {
    name: "Alienware X16 R2 Gaming Laptop",
    description:
      "16-inch QHD+ 240Hz 3ms Display, Intel Core Ultra 7-155H, 16GB LPDDR5X RAM, 1TB SSD, NVIDIA GeForce RTX 4070 8GB GDDR6, Windows 11 Home, Onsite Service - Lunar Silver",
    price: "$2,299",
    imageUrl: "../Assets/AlienwarePIC/A1.jpg",
    productId: "alienware1",
  },
  {
    name: "Alienware M16 R2 Gaming Laptop",
    description:
      " Intel Ultra 7-155H, 64 GB DDR5 Ram, 2 TB PCle SSD, 16-inch QHD+ (2560x1600), Nvidia Geforce RTX 4070, W11 Home, Black",
    price: "$2,799",
    imageUrl: "../Assets/AlienwarePIC/A2.jpg",
    productId: "alienware2",
  },
  {
    name: "Alienware x14 R2 Gaming Laptop",
    description:
      "13th Generation Intel® Core™ i7-13620H (24 MB cache, 10 cores, up to 4.90 GHz Turbo)",
    price: "$2,499",
    imageUrl: "../Assets/AlienwarePIC/A4.jpg",
    productId: "alienware4",
  },
  {
    name: "Alienware m15 Gaming Laptop",
    description:
      "13th Generation Intel® Core™ i7-13620H (24 MB cache, 10 cores, up to 4.90 GHz Turbo)",
    price: "$2299",
    imageUrl: "../Assets/AlienwarePIC/A9.jpg",
    productId: "alienware9",
  },
  {
    name: "Alienware M17R5 Gaming Laptop",
    description:
      "17.3-inch FHD 480Hz Display, AMD Ryzen 9-6900HX, 32GB DDR5 RAM, 1TB SSD, NVIDIA GeForce RTX 3080 GDDR6, Windows 11 Home, 1 Year Support - Dark Side of the Moon, Black",
    price: "$1299.99",
    imageUrl: "../Assets/AlienwarePIC/A8.jpg",
    productId: "gaming-mouse",
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
      const product = [
        ...razerProducts,
        ...logitechProducts,
      ].find((p) => p.productId === productId);

      // Save product data to localStorage
      localStorage.setItem("selectedProduct", JSON.stringify(product));

      // Navigate to product-detail.html
      window.location.href = `./components/product-detail.html`;
    });
  });
}
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
renderProducts(razerProducts, "razer-products");
renderProducts(asusProducts, "asus-products");
