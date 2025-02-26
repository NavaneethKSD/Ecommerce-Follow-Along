import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch products from backend
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/product/get-products");
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.products);
      } else {
        throw new Error("Failed to load products");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* Display loading or error messages */}
      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Product Input Form */}
      <ProductForm addProduct={(newProduct) => setProducts([...products, newProduct])} />

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product._id} {...product} />)
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
