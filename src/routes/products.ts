import { Request, Response, Router } from "express";

export const ProductsRouter: Router = Router();

ProductsRouter.get("/", (req: Request, res: Response) => {
  res.status(200).json({
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
