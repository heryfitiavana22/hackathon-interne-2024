let SERVER_URL = 'http://localhost:3000';

export class RemoteUrl {
  static image(uri: string) {
    return `${SERVER_URL}/static/${uri}`;
  }

  static alert(uri: string) {
    return RemoteUrl.image(uri);
  }
}
