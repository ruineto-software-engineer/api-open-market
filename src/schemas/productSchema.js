import joi from "joi";

const productSchema = joi.object({
  nome: joi.string().required(),
  preco: joi.number().integer().required()
});

export default productSchema;