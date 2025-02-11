const path = require("path");
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

    // const filename = req.file.filename;
    // const fileUrl = path.join(filename);

    const user = await User.create({
        name,
        email,
        password,
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

module.exports = { createUser };
