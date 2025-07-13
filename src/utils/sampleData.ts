import Product from '../models/Product';
import User from '../models/User';

export const sampleProducts = [
  // Clothes
  {
    sku: "SKU001",
    name: "Classic White T-Shirt",
    description: "Premium cotton classic white t-shirt perfect for everyday wear. Comfortable fit and breathable fabric.",
    price: 29.99,
    category: "clothes",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 50,
    isActive: true
  },
  {
    sku: "SKU002",
    name: "Denim Jacket",
    description: "Stylish denim jacket with a modern fit. Perfect for layering and casual outings.",
    price: 89.99,
    category: "clothes",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 25,
    isActive: true
  },
  {
    sku: "SKU003",
    name: "Casual Hoodie",
    description: "Comfortable and warm hoodie made from premium cotton blend. Perfect for cool weather.",
    price: 59.99,
    category: "clothes",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 30,
    isActive: true
  },
  {
    sku: "SKU004",
    name: "Formal Shirt",
    description: "Elegant formal shirt suitable for business meetings and special occasions.",
    price: 79.99,
    category: "clothes",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 20,
    isActive: true
  },

  // Accessories - Leather Belts
  {
    sku: "SKU005",
    name: "Classic Leather Belt",
    description: "Premium genuine leather belt with classic buckle design. Perfect for formal and casual wear.",
    price: 49.99,
    category: "accessories",
    subCategory: "leather-belts",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 40,
    isActive: true
  },
  {
    sku: "SKU006",
    name: "Reversible Leather Belt",
    description: "Versatile reversible leather belt with two-tone design. Black and brown sides for maximum flexibility.",
    price: 69.99,
    category: "accessories",
    subCategory: "leather-belts",
    image: "https://images.unsplash.com/photo-1624222247344-9a5dbb6d93c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 25,
    isActive: true
  },

  // Accessories - Leather Office Bags
  {
    sku: "SKU007",
    name: "Professional Leather Briefcase",
    description: "Elegant leather briefcase perfect for business professionals. Multiple compartments and laptop sleeve.",
    price: 199.99,
    category: "accessories",
    subCategory: "leather-office-bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 15,
    isActive: true
  },
  {
    sku: "SKU008",
    name: "Leather Messenger Bag",
    description: "Stylish leather messenger bag with adjustable strap. Perfect for daily commute and work.",
    price: 149.99,
    category: "accessories",
    subCategory: "leather-office-bags",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 20,
    isActive: true
  },

  // Accessories - Women's Purses
  {
    sku: "SKU009",
    name: "Elegant Leather Handbag",
    description: "Sophisticated leather handbag with gold hardware. Perfect for evening events and special occasions.",
    price: 179.99,
    category: "accessories",
    subCategory: "women-purse",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 12,
    isActive: true
  },
  {
    sku: "SKU010",
    name: "Crossbody Leather Bag",
    description: "Practical crossbody leather bag with adjustable strap. Ideal for daily use and travel.",
    price: 89.99,
    category: "accessories",
    subCategory: "women-purse",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 18,
    isActive: true
  },

  // Accessories - Men's Wallets
  {
    sku: "SKU011",
    name: "Classic Leather Wallet",
    description: "Traditional leather wallet with multiple card slots and coin pocket. Timeless design.",
    price: 39.99,
    category: "accessories",
    subCategory: "mens-wallet",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 35,
    isActive: true
  },
  {
    sku: "SKU012",
    name: "Slim Leather Wallet",
    description: "Minimalist slim leather wallet with RFID protection. Perfect for modern lifestyle.",
    price: 49.99,
    category: "accessories",
    subCategory: "mens-wallet",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 28,
    isActive: true
  }
];

export const sampleUsers = [
  {
    name: "Admin User",
    email: "admin@urbanstrap.com",
    password: "pass123",
    isAdmin: true
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    isAdmin: false
  }
];

export const seedDatabase = async () => {
  try {
    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});

    // Insert sample products
    await Product.insertMany(sampleProducts);

    // Insert sample users
    for (const userData of sampleUsers) {
      const user = new User(userData);
      await user.save();
    }

    console.log('Database seeded successfully!');
    console.log(`Created ${sampleProducts.length} products`);
    console.log(`Created ${sampleUsers.length} users`);
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}; 