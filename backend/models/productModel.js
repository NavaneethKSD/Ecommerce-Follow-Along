// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Product name is required"],
//     },
//     description: {
//         type: String,
//         required: [true, "Product description is required"],
//     },
//     price: {
//         type: Number,
//         required: [true, "Product price is required"],
//     },
//     images: [
//         {
//             public_id: String,
//             url: String,
//         },
//     ],
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// const Product = mongoose.model("Product", productSchema);

// module.exports = Product;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
    },
    description: {
        type: String,
        required: [true, "Product description is required"],
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
    },
    images: [
        {
            public_id: String,
            url: String,
        },
    ],
    email: {
        type: String,
        required: [true, "User email is required"], // Add email field
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
