export interface User {
  id: number;
  name: string;
  pseudo: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserWithoutPassword extends Omit<User, 'password'> {}

export interface FindUserInput {
  where?: Partial<UserWithoutPassword>;
}

export interface CreateUserInput
  extends Pick<User, 'name' | 'password' | 'pseudo'> {}

export interface UpdateUserInput {
  id: number;
  name?: string;
  pseudo?: string;
}

export interface UserUI extends UserWithoutPassword {}
