import { ResultSetHeader } from 'mysql2';

import { User } from '../interfaces/users';
import connection from './connection';

const createUser = async (user: User) => {
  const { username, vocation, level, password } = user;

  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
};

const UsersModel = {
  createUser,
};

export default UsersModel;