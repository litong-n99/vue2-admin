import BaseModel, { saveProp } from "./BaseModel";
import { CHANGE_APP_THEME } from "build-config/constants/Bus";
import { AppSize, AppTheme } from "@common-type/App";

/**
 * @description application info
 */
export default class App extends BaseModel {
  public static instance = new App();

  public readonly namespaced: string = "app";

  @saveProp()
  public size: AppSize = "Medium";

  @saveProp()
  public theme: AppTheme = "Blue";

  public setAppTheme() {
    this.emit(CHANGE_APP_THEME, this.theme);
  }

  public setAppSize() {
    let fz = 14;
    switch (this.size) {
      case "Small":
        fz = 12;
        break;
      case "Large":
        fz = 16;
        break;
      case "XLarge":
        fz = 18;
        break;

      default:
        break;
    }
    window.document.getElementsByTagName("html")[0].style.fontSize = `${fz}px`;
  }

  /**
   * @description clean information
   */
  public cleanModel() {
    // TODO clean
  }

  /**
   * @description init information
   */
  public initModelHook() {
    this.setAppSize();
  }
}
