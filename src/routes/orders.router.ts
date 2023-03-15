import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const router = Router();

router.get('/', OrdersController.getAll);

export default router;