import productSchema from "../schemas/productSchema.js";

export default function validateProductSchemaMiddleware(req, res, next) {
  const validation = productSchema.validate(req.body, { abortEarly: true });
  if(validation.error){
    res.sendStatus(422);
    return;
  }

  next();
}