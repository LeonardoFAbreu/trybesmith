import { NewProduct, Product } from '../interfaces/product';
import ProductsModel from '../models/products.model';

const createProduct = async (product: NewProduct): Promise<Product> => {
  const newProduct = await ProductsModel.createProduct(product);
  return newProduct;
};

const getAll = async (): Promise<Product[]> => {
  const products = await ProductsModel.getAll();
  return products;
};

const ProductsService = { 
  createProduct, 
  getAll,
};

export default ProductsService;