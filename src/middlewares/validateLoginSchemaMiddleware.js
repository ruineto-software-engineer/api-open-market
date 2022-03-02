import loginSchema from "../schemas/loginSchema.js";

export default function validateLoginSchemaMiddleware(req, res, next) {
  const validation = loginSchema.validate(req.body, { abortEarly: true });
  if(validation.error){
    res.sendStatus(422);
    return;
  }

  next();
}