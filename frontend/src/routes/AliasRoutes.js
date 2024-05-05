export default class AliasRoutes {
  static Top = "/";
  static Api = "/api";
  static API_Publish = AliasRoutes.Api + "/publish";
  static API_News = AliasRoutes.API_Publish + "/news";
  static Info = "/info";
  static Security = "/security";
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
