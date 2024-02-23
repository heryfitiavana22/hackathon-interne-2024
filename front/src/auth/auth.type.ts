import { User } from '../user/user.type';

export type LoginValue = {
  pseudo: string;
  password: string;
};

export type LoginResponse = User & Tokens;

export type Tokens = {
  access_token: string;
  refresh_token: string;
};

export type RefreshTokenResponse = {
  token: string;
};

export type AuthStatus = 'unknown' | 'guest' | 'authenticated';
export type UserAuth = User | null | undefined;
