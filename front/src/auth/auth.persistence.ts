export class AccessTokenPersistence {
  static get() {
    return localStorage.getItem('@rejwt-at');
  }

  static save(token: string) {
    return localStorage.setItem('@rejwt-at', token);
  }

  static remove() {
    return localStorage.removeItem('@rejwt-at');
  }
}

export class RefreshTokenPersistence {
  static get() {
    return localStorage.getItem('@rejwt-rt');
  }

  static save(token: string) {
    return localStorage.setItem('@rejwt-rt', token);
  }

  static remove() {
    return localStorage.removeItem('@rejwt-rt');
  }
}
