import client from 'webpack-theme-color-replacer/client';
import { AppTheme } from '@common-type/App';
// 注意：每种皮肤不能有重用颜色！
import themeColor from './ThemeColor.json';

/**
 * @description 生成根据输入颜色更换antd的颜色
 * @param newColor {string} 输入色
 */
export default function genChangeColor(
  changeUrl = (cssUrl: string) => `./${cssUrl}`
) {
  return function changeColor(theme: AppTheme) {
    const tColor = themeColor;
    const newColors = Object.entries(tColor).map(([key, val]) => {
      if (theme === 'Blue') return key;
      return val[theme];
    });
    const options = {
      newColors, // new colors array, one-to-one corresponde with `matchColors`
      changeUrl
    };
    return client.changer.changeColor(options, Promise);
  };
}
