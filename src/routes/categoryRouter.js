import { Router } from "express";
import { updateCategory, deleteCategory, registerCategory, getCategories } from "../controllers/categoryController.js";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";
import validadeCategorySchemaMiddleware from "../middlewares/validateCategorySchemaMiddleware.js";

const categoryRouter = Router();

categoryRouter.use(validateTokenMiddleware);

categoryRouter.post('/categories/register', validadeCategorySchemaMiddleware, registerCategory);
categoryRouter.delete('/categories/delete/:id', deleteCategory);
categoryRouter.put('/categories/update/:id', updateCategory);
categoryRouter.get('/categories', getCategories);

export default categoryRouter;