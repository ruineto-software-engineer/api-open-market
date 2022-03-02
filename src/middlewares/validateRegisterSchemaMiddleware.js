import registerSchema from "../schemas/registerSchema.js";

export default function validateRegisterSchemaMiddleware(req, res, next) {
  const validation = registerSchema.validate(req.body, { abortEarly: true });
  if(validation.error){
    res.sendStatus(422);
    return;
  }

  next();
}