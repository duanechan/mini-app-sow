import express from "express";
import * as productController from "../controllers/product.controller.js";

export const productRouter = express.Router();

productRouter.get("/", productController.getProductsByUser);
productRouter.post("/", productController.createProductByUser);
