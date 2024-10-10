const express = require("express");
const {
  createPost,
  getPosts,
  deletePost,
  updatePost,
} = require("../controllers/postController");
const { verifyToken } = require("../utils/verifyUser");
const router = express.Router();

router.post("/create", verifyToken, createPost);
router.get("/getposts", getPosts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletePost);
router.put("/updatepost/:postId/:userId", verifyToken, updatePost);

module.exports = router;
