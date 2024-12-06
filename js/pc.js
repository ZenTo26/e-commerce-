const dellProducts = [
  {
    name: "Dell Inspiron Mini Tower 3910 -  Intel® Core i7-12700",
    description:
      "CPU / Processor : 12th Generation Intel® Core™ i7-12700 ( 2.10 GHz Up to 4.80 GHz Turbo, 12 cores, 20 threads, 25MB cache) Operating System : Windows 11 Home Single Languge (64Bit) Microsoft office: Microsoft® Office Home and Student 2021 (Word, excel & power point) (Not included outlook) RAM / Memory : 16GB DDR4 (3200MHz) (16GBx2) (2Slots) Storage : SSD512GB NVMe M.2 PCIe SSDGraphic : Intel® UHD Graphics 770",
    price: "$899.99",
    imageUrl: "../Assets/pcImage/pc1.jpg",
    productId: "set1",
  },
  {
    name: "Dell Vostro Mini Tower 3910 -  Intel® Core i5-12400",
    description:
      "CPU / Processor: 12th Gen Intel® Core™ i5-12400 (2.50 GHz to 4.40 GHz, Turbo, 18 MB cache, 6 cores, 12 threads), Operating System: Windows 11 Home Single Languge (64Bit), Microsoft office: Microsoft® Office Home and Student 2021 (Word, excel & power point) (Not included outlook), RAM / Memory: 8GB DDR4 (3200MHz) (8GBx1) (2Slots), Storage: SSD256GB NVMe M.2 PCIe SSD + 1TB SATA, Graphic: Intel® UHD Graphics, Optical Drive: None, Wireless: Intel® Wi-Fi 6 2×2 (Gig+) and Bluetooth",
    price: "$599.99",
    imageUrl: "../Assets/pcImage/pc2.jpg",
    productId: "set2",
  },
  {
    name: "Dell Precision T5820 Intel Xeon",
    description:
      "Processor :Intel Xeon Processor W-2223 (4C 3.6GHz 3.9GHz Turbo HT 8.25MB 120W DDR4-2666), Ram : 16GB 2x8GB DDR4 2933MHz RDIMM ECC Memory, Storage : M.2 1TB PCIe NVMe Class 40 Solid State Drive, Drive : DVD+/-RW 9.5mm Optical Disk Drive, Network : LAN Gigabit, Graphic : Nvidia T1000, 4GB, OS : W10P (up to 4 cores, Includes W11P), Other : MS116 & KB216",
    price: "$1499.99",
    imageUrl: "../Assets/pcImage/pc3.png",
    productId: "set3",
  },
  {
    name: "Dell Precision T3660 Intel i7-12700K",
    description:
      "Processor : Intel Core i7-12700K processor (25MB Cache, 12 Core (8P+4E),, 3.6GHz to 5.0GHz (125W) TDP, Ram :1x16GB, DDR5 up to 4400MHz UDIMM non-ECC memory, Storage :512GB SSD M.2 Pcle+ 2TB 7200rpm SATA 3.5 HDD, Drive : NoDVDRW, Network : LAN Gigabit, Graphic : Nvidia T1000 FH 4GB, OS : W10P (Includes W11P), English, Other : MS116 & KB216",
    price: "$1939",
    imageUrl: "../Assets/pcImage/pc4.png",
    productId: "set4",
  },
  {
    name: "Acer AIO Aspire",
    description:
      "Acer AIO Aspire C22-1600-ICQN5105-4G-SSD256GB-NO ODD-LED21.5 -WLAN-Card Reader-USB KB+M-Black",
    price: "$439",
    imageUrl: "../Assets/pcImage/pc5.png",
    productId: "set5",
  },
];

const alienwareProducts = [
  {
    name: "Dell Gaming Alienware Aurora 13 ",
    description:
      "CPU / Processor : 12th Gen Intel® Core™ i9 12900KF (3.2GHz to 5.2GHz with Turbo Boost Max 3.0 , 16-Core, 30MB Cache), Operating System : Windows 11 Home Single Languge (64Bit), Microsoft office: Microsoft® Office Home and Student 2021 (Word, excel & power point) (Not included outlook), RAM / Memory : 32GB Dual Channel DDR5 (4400MHz) (Support up to 128GB), Storage : 512GB NVMe M.2 PCIe SSD, Graphic : NVIDIA® GeForce RTX™ 3080 Ti 12GB GDDR6X",
    price: "$4489",
    imageUrl: "../Assets/pcImage/pc11.jpg",
    productId: "set11",
  },
  {
    name: "Dell Gaming Alienware Aurora 13 ",
    description:
      "CPU / Processor : 12th Gen Intel® Core™i7-12700KF (3.6GHz to 5.0GHz with Turbo Boost Max 3.0 , 12-Core, 25MB Cache), Operating System : Windows 11 Home Single Languge (64Bit), Microsoft office: Microsoft® Office Home and Student 2021 (Word, Excel & PowerPoint) (Not included outlook), RAM / Memory : 32GB Dual Channel DDR5 (4400MHz) (2 x 32 GB)(Support up to 128GB), Storage : 512GB NVMe M.2 PCIe SSD (Support one more SATA HDD +M.2), Graphic : NVIDIA® GeForce RTX™ 3080 Ti 12GB GDDR6X",
    price: "$4199",
    imageUrl: "../Assets/pcImage/pc22.jpg",
    productId: "set22",
  },
];

// Function to render products
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear the container before adding new products

  products.forEach((product) => {
    const productCard = `
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
    container.innerHTML += productCard;
  });

  // Attach event listeners to each product card
  const productCards = container.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      const productId = card.getAttribute("data-product-id");
      const product = [...dellProducts, ...alienwareProducts].find(
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
renderProducts(dellProducts, "dell-PC");
renderProducts(alienwareProducts, "Alienware-PC");
