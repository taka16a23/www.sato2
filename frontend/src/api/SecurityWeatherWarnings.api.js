import API from "./API";
import AliasRoutes from 'routes/AliasRoutes';


export default class WeatherWarningsAPI extends API {

  static PATH = AliasRoutes.API_SecurityWeatherWarnings;

  constructor() {
    super(process.env.REACT_APP_API_URL, WeatherWarningsAPI.PATH);
  }
}
