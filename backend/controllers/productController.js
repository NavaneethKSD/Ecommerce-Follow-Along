const Product = require("../models/productModel");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Create Product (Add Product)
const createProduct = catchAsyncErrors(async (req, res, next) => {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return next(new ErrorHandler("All fields are required", 400));
    }

    const product = await Product.create({
        name,
        description,
        price,
        images: req.body.images || [],
    });

    res.status(201).json({
        success: true,
        message: "Product added successfully",
        product,
    });

});

// Get All Products by User Email
const getProductsByUserEmail = catchAsyncErrors(async (req, res, next) => {
    const { email } = req.params;

    if (!email) {
        return next(new ErrorHandler("Email is required", 400));
    }

    const products = await Product.find({ userEmail: email });

    res.status(200).json({
        success: true,
        products,
    });

});

module.exports = { createProduct, getProductsByUserEmail };
