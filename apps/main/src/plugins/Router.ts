import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WelcomeView from "../views/home/WelcomeView.vue";

Vue.use(VueRouter);

export const menus: Array<RouteConfig> = [
  {
    path: "bar_chart",
    name: "BarChart",
    component: () => import("mfe_chart/BarChart.vue"),
  },
];

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "welcome",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "welcome",
        name: "Welcome",
        component: WelcomeView,
      },
      ...menus,
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
