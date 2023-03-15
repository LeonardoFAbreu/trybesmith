import express from 'express';

import productsRouter from './routes/products.router';
import ordersRouter from './routes/orders.router';
import usersRouter from './routes/users.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/orders', ordersRouter);

app.use('/users', usersRouter);

export default app;
