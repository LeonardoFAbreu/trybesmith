import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const router = Router();

router.post('/', ProductsController.createProduct);

router.get('/', ProductsController.getAll);

export default router;