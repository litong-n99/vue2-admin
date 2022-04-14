import Vue from "vue";
import App from "./App.vue";

import "style/styles/app.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
