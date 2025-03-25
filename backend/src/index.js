const express = require("express");
const connectDB = require("../config/db");
require('dotenv').config();
const cors = require("cors")

const userRoute = require("../routes/userRoute");
const productRoute = require("../routes/productRoute");
const errorMiddleware = require("../middlewares/error");


const Product = require("../models/productModel"); // Import Product model

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors())

// Routes
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);



app.get("/api/product/get-products", async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from MongoDB
        res.status(200).json({
            success: true,
            products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
            error: error.message
        });
    }
});

// Error Middleware
app.use(errorMiddleware);


app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Listening to port ${PORT}`);
    } catch (err) {
        console.log("Server failed to start", err);
    }
});


