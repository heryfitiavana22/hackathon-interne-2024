import { createData } from '../helpers/repository';
import {
  AccessTokenPersistence,
  RefreshTokenPersistence,
} from './auth.persistence';
import { LoginValue, LoginResponse } from './auth.type';

export class AuthService {
  static async login(data: LoginValue) {
    const response = await createData<LoginResponse>('/auth/login', data);
    if (response.status === 200 && response.data) {
      AccessTokenPersistence.save(response.data.access_token);
      RefreshTokenPersistence.save(response.data.refresh_token);
    }

    return response;
  }

  static async logout() {
    const refreshToken = RefreshTokenPersistence.get();
    AccessTokenPersistence.remove();
    RefreshTokenPersistence.remove();
    const response = await createData('/auth/logout', { refreshToken });

    return response;
  }
}
