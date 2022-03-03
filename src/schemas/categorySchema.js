import joi from "joi";

const categorySchema = joi.object({
  nome: joi.string().required()
});

export default categorySchema;