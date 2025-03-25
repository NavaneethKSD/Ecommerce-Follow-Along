import { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(productData);
    setProductData({ name: "", price: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={productData.name}
        onChange={handleChange}
        className="w-full p-2 border mb-2 rounded"
      />

      <input
        type="text"
        name="price"
        placeholder="Product Price"
        value={productData.price}
        onChange={handleChange}
        className="w-full p-2 border mb-2 rounded"
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={productData.image}
        onChange={handleChange}
        className="w-full p-2 border mb-2 rounded"
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
