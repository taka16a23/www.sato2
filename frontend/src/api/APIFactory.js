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

  // SecurityEmergency
  static createSecurityEmergencyAPI() {
    if(!APIFactory._cache['SecurityEmergencyAPI']) {
      let klass = require('./SecurityEmergency.api.js').default;
      APIFactory._cache['SecurityEmergencyAPI'] = new klass();
    }
    return APIFactory._cache['SecurityEmergencyAPI'];
  }

  // SecurityKnowledge
  static createSecurityKnowledgeAPI() {
    if(!APIFactory._cache['SecurityKnowledgeAPI']) {
      let klass = require('./SecurityKnowledge.api.js').default;
      APIFactory._cache['SecurityKnowledgeAPI'] = new klass();
    }
    return APIFactory._cache['SecurityKnowledgeAPI'];
  }

  // SatoFormats
  static createSatoFormatsAPI() {
    if(!APIFactory._cache['SatoFormatsAPI']) {
      let klass = require('./SatoFormats.api.js').default;
      APIFactory._cache['SatoFormatsAPI'] = new klass();
    }
    return APIFactory._cache['SatoFormatsAPI'];
  }

  // OtherFormats
  static createOtherFormatsAPI() {
    if(!APIFactory._cache['OtherFormatsAPI']) {
      let klass = require('./OtherFormats.api.js').default;
      APIFactory._cache['OtherFormatsAPI'] = new klass();
    }
    return APIFactory._cache['OtherFormatsAPI'];
  }

  // Rules
  static createRulesAPI() {
    if(!APIFactory._cache['RulesAPI']) {
      let klass = require('./Rules.api.js').default;
      APIFactory._cache['RulesAPI'] = new klass();
    }
    return APIFactory._cache['RulesAPI'];
  }

  // HallRequest
  static createHallRequestAPI() {
    if(!APIFactory._cache['HallRequestAPI']) {
      let klass = require('./HallRequest.api.js').default;
      APIFactory._cache['HallRequestAPI'] = new klass();
    }
    return APIFactory._cache['HallRequestAPI'];
  }

  // FrequentlyQuetionAnswer
  static createFrequentlyQuetionAnswerAPI() {
    if(!APIFactory._cache['FrequentlyQuetionAnswerAPI']) {
      let klass = require('./FrequentlyQuetionAnswer.api.js').default;
      APIFactory._cache['FrequentlyQuetionAnswerAPI'] = new klass();
    }
    return APIFactory._cache['FrequentlyQuetionAnswerAPI'];
  }

}
