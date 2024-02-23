import { getData } from '../helpers/repository';
import { User } from './user.type';

export class UserService {
  static me() {
    return getData<User>('/me');
  }
}
