/* eslint-disable @typescript-eslint/no-var-requires */
const ThemeColorReplacer = require('webpack-theme-color-replacer');
const themeColors = require('./ThemeColor.json');

// 需要与src/utils/Theme.ts中的coldColors相同
const customColors = Object.keys(themeColors);

const themePluginOption = {
  fileName: 'css/theme-colors-[contenthash:8].css',
  matchColors: customColors,
  changeSelector(selector) {
    return selector;
  }
};

const createThemeColorReplacerPlugin = () =>
  new ThemeColorReplacer(themePluginOption);

module.exports = createThemeColorReplacerPlugin;
