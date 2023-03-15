import jwt, { SignOptions } from 'jsonwebtoken';
import UsersModel from '../models/users.model';
import { User } from '../interfaces/users';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '30m',
};

const createToken = (playload: User) => jwt.sign(playload, JWT_SECRET, JWT_CONFIG);

const createUser = async (user: User): Promise<string> => {
  const token = await createToken(user);
  UsersModel.createUser(user);

  return token;
};

const UsersService = {
  createUser,
};

export default UsersService;