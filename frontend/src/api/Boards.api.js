import API from "./API";
import AliasRoutes from 'routes/AliasRoutes';


export default class BoardsAPI extends API {

  static PATH = AliasRoutes.API_Boards;

  constructor() {
    super(process.env.REACT_APP_API_URL, BoardsAPI.PATH);
  }
}
