// const express = require("express");
// const Product = require("../models/productModel");
// const { createProduct, getProductsByUserEmail } = require("../controllers/productController");

// const router = express.Router();

// // Route to get all products
// router.get("/get-products", async (req, res) => {
//     try {
//         const products = await Product.find(); // Fetch all products
//         res.status(200).json({
//             success: true,
//             products
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to fetch products",
//             error: error.message
//         });
//     }
// });

// // Route to fetch products by user email
// router.get("/user/:email", getProductsByUserEmail);

const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModel');

// Endpoint to get products by user email
router.get('/get-products-by-email', async (req, res) => {
  const { email } = req.query;

  try {
    const products = await Product.find({ userEmail: email });
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

// module.exports = router;