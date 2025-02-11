const express = require("express");
const connectDB = require("../config/db");
require('dotenv').config();

const userRoute = require("../routes/userRoute");
const errorMiddleware = require("../middlewares/error");

const app = express();
const PORT = 8000;

app.use(express.json());

// Routes
app.use("/api/v1/user", userRoute);

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
