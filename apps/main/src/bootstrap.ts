import Vue from "vue";
import App from "./App.vue";
import "common-bootstrap";
import { hookTheme } from "./plugins/Theme";
import router from "./plugins/Router";
import { ModelUtil } from "model";

(async () => {
  await ModelUtil.initModels();
  hookTheme();
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
})();
