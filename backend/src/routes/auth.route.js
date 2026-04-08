import express from "express";
import * as authController from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

export const authRouter = express.Router();

authRouter.post("/login", authController.login);
authRouter.post("/logout", authMiddleware, authController.logout);
authRouter.post("/me", authMiddleware, authController.me);
