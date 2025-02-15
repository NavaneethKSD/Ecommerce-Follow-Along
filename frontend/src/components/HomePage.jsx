import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

const HomePage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 15",
      image: "https://via.placeholder.com/150",
      price: 79999,
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      image: "https://via.placeholder.com/150",
      price: 69999,
    },
    {
      id: 3,
      name: "OnePlus 11",
      image: "https://via.placeholder.com/150",
      price: 55999,
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      
      {/* Product Input Form */}
      <ProductForm addProduct={addProduct} />

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
