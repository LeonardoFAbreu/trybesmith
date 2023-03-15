import { Request, Response } from 'express';
import UsersService from '../services/users.service';

const createUser = async (req: Request, res: Response) => {
  const token = await UsersService.createUser(req.body);

  return res.status(201).json({ token });
};

const UsersController = { createUser };

export default UsersController;