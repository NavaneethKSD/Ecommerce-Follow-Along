const path = require("path");
const bcrypt = require("bcrypt"); // Added bcrypt
const User = require("../models/userModel");
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Create user (Signup)
const createUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userEmail = await User.findOne({ email });
    if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
    }

    // Hash Password Before Storing
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password Before Storing:", hashedPassword); // Debugging

    // const filename = req.file.filename;
    // const fileUrl = path.join(filename);

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

    // 1. Check if the user exists
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("User does not exist", 404));
    }

    console.log("Stored Hashed Password:", user.password); // Debugging
    console.log("Entered Password:", password); // Debugging

    // 2. Compare Passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match:", isPasswordMatch); // Debugging

    if (!isPasswordMatch) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    // **Remove password before sending the response**
    user.password = undefined;

    // 3. Send Response
    res.status(200).json({
        success: true,
        message: "Login successful",
        user
    });
});

module.exports = { createUser, loginUser }; // Export both functions
