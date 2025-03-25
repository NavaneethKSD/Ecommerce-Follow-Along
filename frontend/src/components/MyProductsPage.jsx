import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const MyProductsPage = () => {
  const [products, setProducts] = useState([]);
  const userEmail = "user@example.com"; // Replace with actual logged-in user email

  useEffect(() => {
    const fetchMyProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/product/my-products?email=${userEmail}`
        );
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchMyProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default MyProductsPage;
