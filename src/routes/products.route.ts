import { Router } from "express";
import { createProduct, getProduct } from "../controllers/product.controller";

export const ProductsRouter: Router = Router();

ProductsRouter.get("/", getProduct);
ProductsRouter.get("/:name", getProduct);
ProductsRouter.post("/", createProduct);
