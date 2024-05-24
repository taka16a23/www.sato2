export default class ServiceFactory {
  static _cache = {};

  // News
  static createNewsService() {
    if(!ServiceFactory._cache['NewsService']) {
      let klass = require('./News.service.js').default;
      ServiceFactory._cache['NewsService'] = new klass();
    }
    return ServiceFactory._cache['NewsService'];
  }

  // Security
  static createSecurityService() {
    if(!ServiceFactory._cache['SecurityService']) {
      let klass = require('./Security.service.js').default;
      ServiceFactory._cache['SecurityService'] = new klass();
    }
    return ServiceFactory._cache['SecurityService'];
  }

  // SecurityKnowledge
  static createSecurityKnowledgeService() {
    if(!ServiceFactory._cache['SecurityKnowledgeService']) {
      let klass = require('./SecurityKnowledge.service.js').default;
      ServiceFactory._cache['SecurityKnowledgeService'] = new klass();
    }
    return ServiceFactory._cache['SecurityKnowledgeService'];
  }

  // Formats
  static createFormatsService() {
    if(!ServiceFactory._cache['FormatsService']) {
      let klass = require('./Formats.service.js').default;
      ServiceFactory._cache['FormatsService'] = new klass();
    }
    return ServiceFactory._cache['FormatsService'];
  }

  // Rules
  static createRulesService() {
    if(!ServiceFactory._cache['RulesService']) {
      let klass = require('./Rules.service.js').default;
      ServiceFactory._cache['RulesService'] = new klass();
    }
    return ServiceFactory._cache['RulesService'];
  }

  // Hall
  static createHallService() {
    if(!ServiceFactory._cache['HallService']) {
      let klass = require('./Hall.service.js').default;
      ServiceFactory._cache['HallService'] = new klass();
    }
    return ServiceFactory._cache['HallService'];
  }

  // FrequentlyQuetionAnswer
  static createFrequentlyQuetionAnswerService() {
    if(!ServiceFactory._cache['FrequentlyQuetionAnswerService']) {
      let klass = require('./FrequentlyQuetionAnswer.service.js').default;
      ServiceFactory._cache['FrequentlyQuetionAnswerService'] = new klass();
    }
    return ServiceFactory._cache['FrequentlyQuetionAnswerService'];
  }
}
