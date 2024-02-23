import * as jwt from 'jsonwebtoken';
import { AUTH_CONFIG } from './auth.config';
import { UserUI } from '../user/interfaces/user.interface';

export class AccessToken {
  static sign(payload: UserUI) {
    return jwt.sign(payload, AUTH_CONFIG.ACCESS_TOKEN_SECRET, {
      // expiresIn: "",
    });
  }

  static verify(token: string) {
    return jwt.verify(token, AUTH_CONFIG.ACCESS_TOKEN_SECRET) as UserUI;
  }
}

export class RefreshToken {
  static sign(payload: UserUI) {
    return jwt.sign(payload, AUTH_CONFIG.REFRESH_TOKEN_SECRET, {
      expiresIn: '2 days',
    });
  }

  static verify(token: string) {
    return jwt.verify(token, AUTH_CONFIG.REFRESH_TOKEN_SECRET) as UserUI;
  }
}
