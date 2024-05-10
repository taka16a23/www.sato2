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
}
