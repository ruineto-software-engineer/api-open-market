import { Router } from "express";
import { registerCategory } from "../controllers/categoryController.js";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";
import validadeCategorySchemaMiddleware from "../middlewares/validateCategorySchemaMiddleware.js";

const categoryRouter = Router();

categoryRouter.use(validateTokenMiddleware);

categoryRouter.post('/category/register', validadeCategorySchemaMiddleware, registerCategory);

export default categoryRouter;