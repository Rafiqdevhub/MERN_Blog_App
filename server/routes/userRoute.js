const express = require("express");
const {
  deleteUser,
  getUser,
  getUsers,
  signOut,
  updateUser,
} = require("../controllers/userController");
const { verifyToken } = require("../utils/verifyUser");

const router = express.Router();

router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signOut);
router.get("/getusers", verifyToken, getUsers);
router.get("/:userId", getUser);

module.exports = router;
