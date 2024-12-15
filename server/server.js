import express from "express";
import connectionDb from "./config/dbConnection.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import createPostRoute from "./routes/postRoute.js";
import commentsRoute from "./routes/commentsRoute.js";

dotenv.config();
const app = express();

// CORS middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
const port = process.env.PORT || 5000;

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Welcome to the Blog Hub App");
});

// ROUTES
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", createPostRoute);
app.use("/api/comment", commentsRoute);

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
