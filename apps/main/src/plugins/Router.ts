import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import model from "model";
import WelcomeView from "../views/home/WelcomeView.vue";

Vue.use(VueRouter);

export const menus: Array<RouteConfig> = [
  {
    path: "bar_chart",
    name: "BarChart",
    component: () => import("mfe_chart/BarChart.vue"),
  },
];

export const details: Array<RouteConfig> = [
  {
    path: "bar_chart_detail/:day/:name",
    name: "BarChartDetail",
    component: () => import("mfe_chart/BarChartDetail.vue"),
    meta: {
      isMultipleTab: true,
    },
  },
];

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "welcome",
    name: "Home",
    component: HomeView,
    children: [
      {
        path: "welcome",
        name: "Welcome",
        component: WelcomeView,
      },
      ...menus,
      ...details,
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // 标签页逻辑
  model.dashboard.openTab(to);
  next();
});

router.onError((error) => {
  const pattern = /Loading chunk ([\S])+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  if (isChunkLoadFailed) {
    // 用路由的replace方法，并没有相当于F5刷新页面，失败的js文件并没有从新请求，会导致一直尝试replace页面导致死循环，而用 location.reload 方法，相当于触发F5刷新页面，虽然用户体验上来说会有刷新加载察觉，但不会导致页面卡死及死循环，从而曲线救国解决该问题
    location.reload();
  }
});

export default router;
