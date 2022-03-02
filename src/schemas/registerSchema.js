import joi from "joi";

const registerSchema = joi.object({
  nome: joi.string().required(),
  email: joi.string().email().required(),
  senha: joi.string().required()
});

export default registerSchema;