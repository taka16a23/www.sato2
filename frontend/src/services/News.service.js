import { RepositoryFactory } from 'repositories';


export default class NewsService extends Object {

  constructor() {
    super();
    this.news_repository = RepositoryFactory.createNewsRepository();
    this._news_cache = {};
  }

  listNews(a_oParams={}) {
    return new Promise((resolve, reject) => {
      var tData = {'params': a_oParams};
      this.news_repository.get(tData).then(models => {
        let result = models.map(model => {
          if(this._news_cache[model.id] === undefined) {
            this._news_cache[model.id] = model;
          }
          Object.assign(this._news_cache[model.id], model);
          return this._news_cache[model.id];
        })
        resolve(result);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
