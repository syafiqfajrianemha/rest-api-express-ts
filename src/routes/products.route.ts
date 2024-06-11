import { Request, Response, Router } from "express";
import { createProductValidation } from "../Validation/product.validation";
import { logger } from "../utils/logger";

export const ProductsRouter: Router = Router();

ProductsRouter.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "Product fetched successfully",
    data: [
      {
        name: "T-Shirt",
        price: 75000,
      },
    ],
  });
});

ProductsRouter.post("/", (req: Request, res: Response) => {
  const { error, value } = createProductValidation(req.body);

  if (error) {
    logger.error(error.message);
    return res.status(422).json({
      success: false,
      message: error.message,
      data: null,
    });
  }

  return res.status(200).json({
    success: true,
    message: "Product created successfully",
    data: value,
  });
});
