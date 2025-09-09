const Products = [
  {
    id: 1,
    title: "Asus ProArt GeForce RTX 4070",
    price: 999.99,
    category: "Graphic Cards",
    description: "The SFF-ready ProArt GeForce RTX 4070 SUPER OC Edition 12GB GDDR6X brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX 40 SUPER Series performance.",
    image: "https://m.media-amazon.com/images/I/71JZN38n2UL._UF1000,1000_QL80_.jpg" 
  },
  {
    id: 2,
    title: "MSI GeForce RTX 4060 Ti VENTUS 2X BLACK",
    price: 2299.99,
    category: "Graphic Cards",
    description: "VENTUS brings a fundamentally solid experience to users looking for performance. TORX FAN 4.0 lets VENTUS breeze through tasks.",
    image: "https://m.media-amazon.com/images/I/71FPIhwplIL.jpg"
  },
  {
    id: 3,
    title: "Dell S3222DGM 32” Curved Monitor",
    price: 329.99,
    category: "Monitors",
    description: "32-inch curved QHD LCD with crisp visuals and AMD Freesync, ideal for immersive gaming.",
    image: "https://m.media-amazon.com/images/I/812AIpsZmDS.jpg"
  },
  {
    id: 4,
    title: "Samsung Odyssey OLED G8",
    price: 1499.99,
    category: "Monitors",
    description: "First OLED monitor with 240Hz refresh for next-gen visuals and gaming speed.",
    image: "https://m.media-amazon.com/images/I/81eLDCu76cL.jpg"
  },
  {
    id: 5,
    title: "Crucial Pro DDR5 32GB (2x16GB)",
    price: 199.99,
    category: "RAM",
    description: "DDR5 high-performance memory kit for heavy multitasking and gaming.",
    image: "https://m.media-amazon.com/images/I/41sD+yg0zKL.jpg"
  },
  {
    id: 6,
    title: "Corsair Dominator Platinum DDR5 7200",
    price: 249.99,
    category: "RAM",
    description: "Premium DDR5 RAM with RGB, for advanced desktop builds and heavy tasks.",
    image: "https://m.media-amazon.com/images/I/61Ry4NxmHRL.jpg"
  },
  {
    id: 7,
    title: "Kingston Fury Beast DDR5-5600",
    price: 179.99,
    category: "RAM",
    description: "Fast DDR5 RAM suitable for gaming and multitasking.",
    image: "https://m.media-amazon.com/images/I/71f5U0DS6qL.jpg"
  },
  {
    id: 8,
    title: "Gigabyte Z790 AORUS Elite AX",
    price: 229.99,
    category: "Motherboards",
    description: "Advanced Intel Z790 motherboard for next-gen PCs and overclocking.",
    image: "https://m.media-amazon.com/images/I/61T1P18owDL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 9,
    title: "Samsung 980 Pro 1TB NVMe SSD",
    price: 139.99,
    category: "Storage",
    description: "PCIe Gen4 NVMe SSD delivers exceptional speed and reliability for gaming.",
    image: "https://m.media-amazon.com/images/I/71qA45tWZ5L._UF1000,1000_QL80_.jpg"
  },
  {
    id: 10,
    title: "Seagate Barracuda 2TB HDD",
    price: 59.99,
    category: "Storage",
    description: "Reliable high-capacity hard drive for long-term desktop storage.",
    image: "https://m.media-amazon.com/images/I/91-ZZ7WGjNL._UF350,350_QL80_.jpg"
  },
  {
    id: 11,
    title: "Cooler Master Hyper 212 RGB Black",
    price: 49.99,
    category: "Cooling",
    description: "Popular air cooler for efficient heat dissipation.",
    image: "https://m.media-amazon.com/images/I/81B-HuW8ydL.jpg"
  },
  {
    id: 12,
    title: "NZXT H510 Elite Case",
    price: 129.99,
    category: "Cases",
    description: "Stylish mid-tower case with tempered glass, optimized airflow.",
    image: "https://techstore.co.in/cdn/shop/products/41tk9pyqVgL._SX300_SY300_QL70_FMwebp.webp?v=1670073267"
  },
  {
    id: 13,
    title: "Corsair RM850x 850W PSU",
    price: 109.99,
    category: "Power Supply",
    description: "Fully modular power supply with platinum efficiency.",
    image: "https://m.media-amazon.com/images/I/71dj+5GQwEL.jpg"
  },
  {
    id: 14,
    title: "Logitech G Pro X Keyboard",
    price: 129.99,
    category: "Keyboard",
    description: "Mechanical gaming keyboard with hot-swappable switches and RGB.",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/4/IZ/QB/YX/22684647/logitech-g-pro-x-mechanical-gaming-keyboard-2.jpg"
  },
  {
    id: 15,
    title: "Razer DeathAdder V3 Mouse",
    price: 59.99,
    category: "Mouse",
    description: "Ergonomic gaming mouse with ultra-fast response and customizable DPI.",
    image: "https://m.media-amazon.com/images/I/51HNNPbYdML.jpg"
  },
  {
    id: 16,
    title: "BenQ GW2786TC Monitor",
    price: 239.99,
    category: "Monitors",
    description: "27-inch IPS monitor, sharp visuals ideal for office and multimedia.",
    image: "https://m.media-amazon.com/images/I/71gnYDWo7WL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 17,
    title: "ASUS TUF Gaming B650-PLUS Motherboard",
    price: 209.99,
    category: "Motherboards",
    description: "AMD B650 ATX motherboard built for gaming.",
    image: "https://m.media-amazon.com/images/I/81ogi-krqkL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 18,
    title: "Epson Perfection V39 Scanner",
    price: 89.99,
    category: "Peripherals",
    description: "Compact color scanner for documents and photos.",
    image: "https://m.media-amazon.com/images/I/71+raaZFsvL.jpg"
  },
  {
    id: 19,
    title: "LG UltraGear 27GN950-B Monitor",
    price: 699.99,
    category: "Monitors",
    description: "27-inch 4K UHD Nano IPS gaming monitor.",
    image: "https://m.media-amazon.com/images/I/514+13IUb8L._UF1000,1000_QL80_.jpg"
  },
  {
    id: 20,
    title: "ADATA XPG Gammix S70 Blade SSD",
    price: 99.99,
    category: "Storage",
    description: "Ultra-fast Gen4 NVMe SSD, 7400 MB/s read, slim design for desktops.",
    image: "https://m.media-amazon.com/images/I/61fvIUZ5gVL._UF350,350_QL80_.jpg"
  }
];



export default Products;
