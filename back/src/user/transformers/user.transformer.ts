import { User, UserUI } from '../interfaces/user.interface';

export class UserTransformer {
  static toUI(users: User[]): UserUI[] {
    return users.map((user) => UserTransformer.toUIone(user));
  }

  static toUIone(user: User): UserUI {
    const { password, ...rest } = user;
    return rest;
  }
}
