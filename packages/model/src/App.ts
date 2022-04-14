import BaseModel, { saveProp } from "./BaseModel";
import { AppSize } from "@common-type/App";

/**
 * @description application info
 */
export default class App extends BaseModel {
  public static instance = new App();

  public readonly namespaced: string = "app";

  @saveProp()
  public size: AppSize = "Medium";

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
