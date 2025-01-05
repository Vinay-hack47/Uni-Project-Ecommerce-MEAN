import React from 'react';
import { Link } from 'react-router-dom';  // Import Link

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$100',
      imageUrl: 'https://ecommercephotography.in/assets/images/product-photography.jpg',
      description: 'A brief description of the product.',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$200',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqk2CqhhWlP_HhMXPoYj_qZFxDdT1-gA5FiA&s',
      description: 'A brief description of the product.',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$150',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8p-X99n8XqViggfX0p-wUsSdCzM9nMEK0g&s',
      description: 'A brief description of the product.',
    },
    // Add more products here
  ];

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-700">Elevate Commerce</div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-500">Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>  {/* Update this */}
            <div className="relative">
              <Link to="/cart" className="text-gray-700 hover:text-blue-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-3 14H6L3 3z"></path>
                </svg>
              </Link>
              <span className="absolute top-0 right-0 block w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full text-center">3</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full py-3 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="absolute left-3 top-3 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18l6-6m0 0a7.978 7.978 0 001.322-4.41A7.992 7.992 0 0010 2a8 8 0 100 16z"></path>
          </svg>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-700">{product.price}</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-md py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          <p>&copy; 2025 Elevate Commerce, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
