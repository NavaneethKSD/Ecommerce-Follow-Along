const express = require("express");
const { createProduct } = require("../controllers/productController");

const router = express.Router();

// Route to create a product
router.post("/create-product", createProduct);

module.exports = router;
