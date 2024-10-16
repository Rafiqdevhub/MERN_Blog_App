const express = require("express");
const {
  registerUser,
  loginUser,
  google,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google", google);

module.exports = router;
