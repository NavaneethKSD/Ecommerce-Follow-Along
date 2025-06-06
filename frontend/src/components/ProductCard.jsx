import React from "react";

const ProductCard = ({ product }) => {
  const { name, images, price } = product;
  const image = images.length > 0 ? images[0] : "default_image_url"; // Use a default image if none provided

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-gray-700 font-medium">₹{price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;