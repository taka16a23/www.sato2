export default class RepositoryFactory {
  static _cache = {};

  // News
  static createNewsRepository() {
    if(!RepositoryFactory._cache['NewsRepository']) {
      let klass = require('./News.repository').default;
      RepositoryFactory._cache['NewsRepository'] = new klass();
    }
    return RepositoryFactory._cache['NewsRepository'];
  }

  // WeatherWarnings
  static createWeatherWarningsRepository() {
    if(!RepositoryFactory._cache['WeatherWarningRepository']) {
      let klass = require('./WeatherWarning.repository').default;
      RepositoryFactory._cache['WeatherWarningRepository'] = new klass();
    }
    return RepositoryFactory._cache['WeatherWarningRepository'];
  }
}
