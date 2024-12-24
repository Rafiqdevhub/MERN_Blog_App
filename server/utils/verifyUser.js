import jwt from "jsonwebtoken";
import { errorHandler } from "./errors.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    console.log("No token found in cookies");
    return next(errorHandler(401, "Unauthorized"));
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    console.log("User authenticated:", user);
    req.user = user;
    next();
  } catch (err) {
    console.log("JWT verification failed:", err.message);
    return next(errorHandler(403, "Token is invalid"));
  }
};
