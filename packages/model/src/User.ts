import { UserInfo } from "@common-type/User";
import BaseModel, { saveProp } from "./BaseModel";

/**
 * @description user model
 */
export default class User extends BaseModel {
  public static instance = new User();

  public readonly namespaced: string = "user";

  // user information
  @saveProp()
  public userInfo: UserInfo | null = new UserInfo();
}
