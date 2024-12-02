const asusMonitor = [
  {
    name: "ASUS VZ279HEG1R",
    description:
      "ASUS VZ279HEG1R Gaming Monitor – 27 inch Full HD (1920 x 1080), IPS, 75Hz, 1ms MPRT, Extreme Low Motion Blur™, FreeSync™, Ultra-slim",
    price: "$199",
    imageUrl: "../Assets/asusMonitor/m1.jpg",
    productId: "asusM1",
  },
  {
    name: "TUF Gaming VG32UQA1A",
    description:
      "TUF Gaming VG32UQA1A Gaming Monitor –32 inch (31.5 inch viewable) 4K (3840 x 2160), Overclock to 160Hz (above 144Hz), ELMB Sync, Freesync Premium™, 1ms (MPRT), Variable Overdrive, 120% sRGB, DisplayHDR™ 400",
    price: "$569.99",
    imageUrl: "../Assets/asusMonitor/m2.jpg",
    productId: "asusM2",
  },
  {
    name: "TUF Gaming VG27vqa1A",
    description:
      "TUF Gaming VG27VQM Curved Gaming Monitor – 27 inch Full HD (1920x1080), 240Hz, Extreme Low Motion Blur™, Adaptive-sync, Freesync™ Premium, 1ms (MPRT)",
    price: "$364",
    imageUrl: "../Assets/asusMonitor/m3.png",
    productId: "asusM3",
  },
  {
    name: "ROG Swift PG38UQ",
    description:
      "ROG Swift PG38UQ 4K 144Hz gaming monitor ― 38-inch 4K UHD (3840 x 2160), 144Hz, 1ms, Fast IPS, G-Sync compatible, FreeSync Premium Pro, DisplayHDR™ 600, 98% DCI-P3, DisplayWidget Center, HDMI 2.1",
    price: "$754.99",
    imageUrl: "../Assets/asusMonitor/m4.jpg",
    productId: "asusM4",
  },
  {
    name: "C2221HF",
    description:
      "ASUS ExpertCenter C2221HF Business Monitor – 22-inch (21.45-inch viewable), Full HD(1920x1080), IPS, 100Hz, Frameless, HDMI, Eye Care, Low Blue Light, Flicker Free, Wall Mountable",
    price: "$99.99",
    imageUrl: "../Assets/asusMonitor/m5.png",
    productId: "asusM5",
  },
];

const dellMonitor = [
  {
    name: "Dell 32 Curved Gaming Monitor - S3222DGM",
    description:
      "31.5 inch, QHD 2560 x 1440, 165 Hz, AMD FreeSync™ Premium Technology,2 ms (gray-to-gray); 1 ms (MPRT)",
    price: "$329.99",
    imageUrl: "../Assets/dellMonitor/m1.png",
    productId: "dellM1",
  },
  {
    name: "Dell 32 4K UHD Gaming Monitor - G3223Q",
    description:
      "premium 32inch Dell monitor built for your next PC or console gaming experience. With the power of HDMI 2.1 connectivity, experience native 4K UHD resolution, next-level refresh rates, and exceptional color accuracy.",
    price: "$499.99",
    imageUrl: "../Assets/dellMonitor/m2.jpg",
    productId: "dellM2",
  },
  {
    name: "Dell 27 Gaming Monitor - G2724D",
    description:
      "27inch QHD Fast IPS monitor with VESA DisplayHDR™ 400, versatile connectivity options and lifelike details for incredibly immersive gaming.",
    price: "$1499.99",
    imageUrl: "../Assets/dellMonitor/m3.webp",
    productId: "dellM3",
  },
  {
    name: "Alienware 32 4K QD-OLED Gaming Monitor - AW3225QF",
    description:
      "An unrivaled viewing experience in every scene with our 32-inch QD-OLED monitor, featuring a 4K resolution, curved panel, Dolby Vision and 240Hz refresh rate.",
    price: "$899.99",
    imageUrl: "../Assets/dellMonitor/m4.jpg",
    productId: "dellM4",
  },
  {
    name: "Dell 27 USB-C® Hub Monitor - P2725HE",
    description: "Connect to productivity. Certified by TÜV for 4-star eye comfort, this 27-inch FHD hub monitor offers enhanced visual comfort and offers up to 90W of power delivery.",
    price: "$279.99",
    imageUrl: "../Assets/dellMonitor/m5.jpg",
    productId: "dellM5",
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
      const product = [...asusMonitor, ...dellMonitor].find(
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

renderProducts(asusMonitor, "asus-monitor");
renderProducts(dellMonitor, "dell-monitor");
