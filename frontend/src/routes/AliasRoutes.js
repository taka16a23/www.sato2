export default class AliasRoutes {
  static Top = "/";
  static Favicon = "/favicon.png";
  static Api = "/api";
  static API_Publish = AliasRoutes.Api + "/publish";
  static API_News = AliasRoutes.API_Publish + "/news";
  static API_Security = AliasRoutes.Api + "/security";
  static API_SecurityWeatherWarnings = AliasRoutes.API_Security + "/weather_warnings";
  static API_SecurityEmergency = AliasRoutes.API_Security + "/emergencies";
  static Info = "/info";
  static Security = "/security";
  static SecurityPortal = AliasRoutes.Security + "/portal";
  static SecurityMap = AliasRoutes.Security + "/map";
  static SecurityKnowledge = AliasRoutes.Security + "/knowledge";
  static Board = "/board";
  static Form = "/form";
  static About = "/about";
  static AboutRule = AliasRoutes.About + "/rule";
  static AboutBook = AliasRoutes.About + "/book";
  static AboutFAQ = AliasRoutes.About + "/faq";
  static AboutQuery = AliasRoutes.About + "/query";
  static Error403 = "/errors/403";
}
