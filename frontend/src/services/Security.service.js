import { RepositoryFactory } from 'repositories';
import { WeatherWarningModel } from 'models';


export default class SecurityService extends Object {

  constructor() {
    super();
    this.weather_warnings_repository = RepositoryFactory.createWeatherWarningsRepository();
  }

  getWeatherWarning() {
    return new Promise((resolve, reject) => {
      var tData = {'params': {}};
      this.weather_warnings_repository.get(tData).then(models => {
        let result = new WeatherWarningModel();
        if (1 <= models.length) {
          result = models[0];
        }
        resolve(result);
      }).catch(err => {
        reject(err);
      });
    });
  }

}
