const express = require("express");
const router = express.Router();
const { loginAdmin, registerAdmin } = require("../controllers/authController");

router.post("/login", loginAdmin);

// Only expose this during dev/testing
// router.post("/register", registerAdmin);

module.exports = router;
