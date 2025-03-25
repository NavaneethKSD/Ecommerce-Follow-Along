const path = require("path");
const bcrypt = require("bcrypt"); // Added bcrypt
const jwt = require("jsonwebtoken"); // Added jwt
const User = require("../models/userModel");
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Create user (Signup)
const createUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    console.log("Received Signup Request:", req.body); // Debugging

    // Check if user already exists
    const userEmail = await User.findOne({ email });
    if (userEmail) {
        console.log("User already exists");
        return next(new ErrorHandler("User already exists", 400));
    }

    // Hash Password Before Storing
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password Before Storing:", hashedPassword); // Debugging

    const user = await User.create({
        name,
        email,
        password: hashedPassword, // Store Hashed Password
        avatar: {
            public_id: "default_id",
            url: "default_url"
        }
    });

    res.status(201).json({
        success: true,
        message: "User created successfully",
        user
    });
});

// User Login Function
const loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    console.log("Received Login Request:", req.body); // Debugging
    if (!email || !password) {
        return next(new ErrorHandler("Email and password are required", 400));
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        console.log("User does not exist"); // Debugging
        return next(new ErrorHandler("User does not exist", 404));
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        console.log("Invalid email or password"); // Debugging
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

    console.log("Generated JWT Token:", token); // Debugging

    // Remove password before sending the response
    user.password = undefined;

    // Send Response
    res.status(200).cookie('authToken', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 1000
    }).json({
        success: true,
        message: "Login successful",
        token,
        user
    });
});

module.exports = { createUser, loginUser }; // Export both functions