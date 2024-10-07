const express = require("express");
const connectionDb = require("./config/dbConnection");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/authRoute");

dotenv.config();

app.use(express.json());
const port = process.env.PORT || 3000;

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Welcome to the Blog Hub App");
});

// AUTH ROUTE
app.use("/api/auth", authRoute);

// 404 ROUTE
app.get("/*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(port, () => {
  connectionDb();
  console.log(`Server is running on http://localhost:${port}`);
});
