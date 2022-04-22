import Vue from "vue";
import App from "./App.vue";
import "./plugins/VxeTable";
import { hookTheme } from "./plugins/Theme";
import router from "./plugins/Router";
import { ModelUtil } from "model";

import "style/styles/app.scss";

Vue.config.productionTip = false;

(async () => {
  await ModelUtil.initModels();
  hookTheme();
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
})();
