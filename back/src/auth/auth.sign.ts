import * as jwt from 'jsonwebtoken';
import { AUTH_CONFIG } from './auth.config';
import { TruckUI } from '../truck/interfaces/truck.interface';

export class AccessToken {
  static sign(payload: TruckUI) {
    return jwt.sign(payload, AUTH_CONFIG.ACCESS_TOKEN_SECRET, {
      // expiresIn: "",
    });
  }

  static verify(token: string) {
    return jwt.verify(token, AUTH_CONFIG.ACCESS_TOKEN_SECRET) as TruckUI;
  }
}

export class RefreshToken {
  static sign(payload: TruckUI) {
    return jwt.sign(payload, AUTH_CONFIG.REFRESH_TOKEN_SECRET, {
      expiresIn: '2 days',
    });
  }

  static verify(token: string) {
    return jwt.verify(token, AUTH_CONFIG.REFRESH_TOKEN_SECRET) as TruckUI;
  }
}
