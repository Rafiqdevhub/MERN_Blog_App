const express = require("express");
const connectionDb = require("./config/dbConnection");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");

dotenv.config();
const app = express();

app.use(cookieParser());
app.use(express.json());
const port = process.env.PORT || 3000;

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Welcome to the Blog Hub App");
});

// AUTH ROUTE
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

// 404 ROUTE
app.get("/*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    message,
  });
});

app.listen(port, () => {
  connectionDb();
  console.log(`Server is running on http://localhost:${port}`);
});
