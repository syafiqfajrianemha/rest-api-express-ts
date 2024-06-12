import Joi from "joi";

interface ProductInterface {
  name: String;
  price: Number;
}

export const createProductValidation = (payload: ProductInterface) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
  });
  return schema.validate(payload);
};
