import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const newProduct = await ProductsService.createProduct(product);

  return res.status(201).json(newProduct);
};

const getAll = async (req: Request, res: Response) => {
  const products = await ProductsService.getAll();
  
  return res.status(200).json(products);
};

const ProductsController = { 
  createProduct,
  getAll,
};

export default ProductsController;