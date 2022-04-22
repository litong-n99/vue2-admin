import { CHANGE_APP_THEME } from "build-config/constants/Bus";
import Models from "model";
import genChangeColor from "build-config/theme/Theme";

/**
 * @description 根据输入颜色更换antd的颜色
 * @param newColor {string} 输入色
 */
export const changeColor = genChangeColor();

// 是否有钩子检查
export function hookTheme() {
  changeColor(Models.app.theme);
  Models.app.on(CHANGE_APP_THEME, changeColor);
}
