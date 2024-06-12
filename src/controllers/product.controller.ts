import { Request, Response } from "express";
import { createProductValidation } from "../validations/product.validation";
import { logger } from "../utils/logger";

export const getProduct = (req: Request, res: Response) => {
  const { name } = req.params;

  const products = [
    {
      name: "T-Shirt",
      price: 75000,
    },
    {
      name: "Shoes",
      price: 300000,
    },
  ];

  if (name) {
    const filterProduct = products.filter((product) => {
      if (product.name === name) {
        return product;
      }
    });

    if (filterProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Product ${name} not found`,
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: filterProduct[0],
    });
  }

  return res.status(200).json({
    success: true,
    message: "Product fetched successfully",
    data: products,
  });
};

export const createProduct = (req: Request, res: Response) => {
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
};
