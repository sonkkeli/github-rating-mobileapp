import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'githubRatingAppAuth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(`${this.namespace}:accessToken`);
    return accessToken ? accessToken : '';
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:accessToken`, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;