import { Order } from '../interfaces/orders';
import OrdersModel from '../models/orders.models';

const getAll = async (): Promise<Order[]> => {
  const orders = await OrdersModel.getAll();

  return orders;
};

const OrdersService = { 
  getAll,
};

export default OrdersService;