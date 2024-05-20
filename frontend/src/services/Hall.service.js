import { RepositoryFactory } from 'repositories';


export default class HallService extends Object {

  constructor() {
    super();
    this.repository = RepositoryFactory.createHallRequestRepository();
  }

  request(oModel) {
    return new Promise((resolve, reject) => {
      var tData = {'params': {}};
      this.repository.insert(oModel).then(models => {
        resolve(true);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
