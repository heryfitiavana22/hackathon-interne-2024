import { CreateUserInput, User } from './interfaces/user.interface';
import { USERS } from './user.mock';

export class UserService {
  private users: User[] = USERS;

  findById = (id: number) => {
    return this.users.find((user) => user.id == id);
  };

  findByPseudo = (pseudo: string) => {
    return this.users.find((user) => user.pseudo == pseudo);
  };

  create = (user: CreateUserInput) => {
    const newUser = {
      ...user,
      id: Math.random(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  };

  deleteById = (id: number) => {
    return this.users.filter((user) => user.id !== id);
  };
}
