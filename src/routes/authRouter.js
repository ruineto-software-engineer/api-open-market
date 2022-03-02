import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import validateLoginSchemaMiddleware from "../middlewares/validateLoginSchemaMiddleware.js";
import validateRegisterSchemaMiddleware from "../middlewares/validateRegisterSchemaMiddleware.js";

const authRouter = Router();

authRouter.post('/sign-in', validateLoginSchemaMiddleware, signIn);
authRouter.post('/sign-up', validateRegisterSchemaMiddleware, signUp);

export default authRouter;