const { defineConfig } = require("@vue/cli-service");
const px2rem = require("postcss-plugin-px2rem");
const pkg = require("./package.json");
const { genFederationShared } = require("build-config/Federation");
const createThemeColorReplacerPlugin = require("build-config/theme/theme-plugin.config.js");
const port = require("build-config/Port.json").apps.chart;
const path = require("path");

const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const isProduction = process.env.NODE_ENV === "production";

module.exports = defineConfig({
  publicPath: isProduction ? "./subapp/chart/" : `http://127.0.0.1:${port}/`,
  devServer: {
    hot: true,
    port,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  chainWebpack: (config) => {
    config.optimization.splitChunks(false);
    config.resolve.alias
      .set("@chart", path.resolve(__dirname, "src"))
      .set("@common-type", "common-type/src");
    config
      .plugin("module-federation")
      .use(ModuleFederationPlugin)
      .tap((options) => {
        options[0] = {
          name: "mfe_chart",
          filename: "remoteEntry.js",
          exposes: {
            "./BarChart.vue": "./src/exposes/BarChart.vue",
            "./BarChartDetail.vue": "./src/exposes/BarChartDetail.vue",
          },
          shared: genFederationShared(pkg.dependencies),
        };
        return options;
      });
    config.plugin("theme-color-replacer").use(createThemeColorReplacerPlugin());
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import '~style/styles/variables.scss';`,
      },
      postcss: {
        postcssOptions: {
          plugins: [
            px2rem({
              rootValue: 14, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
              // unitPrecision: 5, //允许REM单位增长到的十进制数字。
              //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
              propBlackList: ["transform"], //黑名单
              // exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
              selectorBlackList: [/^html$/], //要忽略并保留为px的选择器
              // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
              // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
              mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
              minPixelValue: 2, //设置要替换的最小像素值(3px会被转rem)。 默认 0
            }),
          ],
        },
      },
    },
  },
});
