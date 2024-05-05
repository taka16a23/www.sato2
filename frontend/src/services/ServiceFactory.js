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
}
