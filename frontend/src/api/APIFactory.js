export default class APIFactory {

  static _cache = {};

  // News
  static createNewsAPI() {
    if(!APIFactory._cache['NewsAPI']) {
      let klass = require('./News.api.js').default;
      APIFactory._cache['NewsAPI'] = new klass();
    }
    return APIFactory._cache['NewsAPI'];
  }

  // SecurityWeatherWarningsAPI
  static createSecurityWeatherWarningsAPI() {
    if(!APIFactory._cache['SecurityWeatherWarningsAPI']) {
      let klass = require('./SecurityWeatherWarnings.api.js').default;
      APIFactory._cache['SecurityWeatherWarningsAPI'] = new klass();
    }
    return APIFactory._cache['SecurityWeatherWarningsAPI'];
  }
}
