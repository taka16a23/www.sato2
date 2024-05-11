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

  // Emergency
  static createEmergencyRepository() {
    if(!RepositoryFactory._cache['EmergencyRepository']) {
      let klass = require('./Emergency.repository').default;
      RepositoryFactory._cache['EmergencyRepository'] = new klass();
    }
    return RepositoryFactory._cache['EmergencyRepository'];
  }

  // SecurityKnowledge
  static createSecurityKnowledgeRepository() {
    if(!RepositoryFactory._cache['SecurityKnowledge']) {
      let klass = require('./SecurityKnowledge.repository').default;
      RepositoryFactory._cache['SecurityKnowledge'] = new klass();
    }
    return RepositoryFactory._cache['SecurityKnowledge'];
  }

  // SatoFormats
  static createSatoFormatsRepository() {
    if(!RepositoryFactory._cache['SatoFormats']) {
      let klass = require('./SatoFormats.repository').default;
      RepositoryFactory._cache['SatoFormats'] = new klass();
    }
    return RepositoryFactory._cache['SatoFormats'];
  }
}
