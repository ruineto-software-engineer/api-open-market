import categorySchema from "../schemas/categorySchema.js";

export default function validateLoginSchemaMiddleware(req, res, next) {
  const validation = categorySchema.validate(req.body, { abortEarly: true });
  if(validation.error){
    res.sendStatus(422);
    return;
  }

  next();
}