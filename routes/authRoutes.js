import express from "express";

import rateLimiter from "express-rate-limit";

import { login, register, updateUser } from "../controllers/authController.js";
import authUser from "../middleware/auth.js";
import testUser from "../middleware/testUser.js";

const router = express.Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authUser, testUser, updateUser);

export default router;
