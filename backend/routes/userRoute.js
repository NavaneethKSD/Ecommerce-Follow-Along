const express = require("express");
const { createUser } = require("../controllers/userController");
const { upload } = require("../multer");

const router = express.Router();

router.post("/create-user", upload.single("file"), createUser);

module.exports = router;
