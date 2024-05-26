import { RepositoryFactory } from 'repositories';


export default class BoardsService extends Object {

  constructor() {
    super();
    this.repository = RepositoryFactory.createBoardsRepository();
    this._cache = {};
  }

  listBoards(a_Year=null) {
    return new Promise((resolve, reject) => {
      let tYear = a_Year;
      if (!tYear) {
        tYear = (new Date()).getFullYear();
      }
      var tData = {'params': {'year': tYear}};
      this.repository.get(tData).then(models => {
        let result = models.map(model => {
          if(this._cache[model.id] === undefined) {
            this._cache[model.id] = model;
          }
          Object.assign(this._cache[model.id], model);
          return this._cache[model.id];
        })
        resolve(result);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
