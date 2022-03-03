import { Router } from "express";
import { resgisterProduct, deleteProduct, updateProduct, getProduct } from "../controllers/productController.js";
import validateProductSchemaMiddleware from "../middlewares/validateProductSchemaMiddleware.js";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";

const productRouter = Router();

productRouter.use(validateTokenMiddleware);

productRouter.post('/products/register', validateProductSchemaMiddleware, resgisterProduct);
productRouter.delete('/products/delete/:id', deleteProduct);
productRouter.put('/products/update/:id', updateProduct);
productRouter.get('/products/get', getProduct);

export default productRouter;