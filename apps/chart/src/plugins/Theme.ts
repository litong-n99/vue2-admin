import { CHANGE_APP_THEME } from "build-config/constants/Bus";
import models from "model";
import genChangeColor from "build-config/theme/Theme";
import ports from "build-config/Port.json";

/**
 * @description 根据输入颜色更换antd的颜色
 * @param newColor {string} 输入色
 */
export const changeColor = genChangeColor(function (cssUrl: string) {
  return process.env.NODE_ENV === "development"
    ? `http://127.0.0.1:${ports.apps.chart}/${cssUrl}`
    : `./subapp/bms-report/${cssUrl}`;
});

// 是否有钩子检查
let hasHook = false;
export function hookTheme() {
  changeColor(models.app.theme);
  if (hasHook) return;
  hasHook = true;
  models.app.on(CHANGE_APP_THEME, changeColor);
}
