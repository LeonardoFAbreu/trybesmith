import { Request, Response } from 'express';

import OrdersService from '../services/orders.service';

import 'express-async-errors';

const getAll = async (req: Request, res: Response) => {
  const orders = await OrdersService.getAll();
  
  return res.status(200).json(orders);
};

const OrdersController = { 
  getAll,
};

export default OrdersController;