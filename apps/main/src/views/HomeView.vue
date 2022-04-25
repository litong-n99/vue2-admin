<template>
  <div :class="$style.wrapper">
    <header :class="$style.header">
      <AppHeader />
    </header>
    <aside :class="$style.sider">
      <AppMenu />
    </aside>
    <article :class="$style['content-wrapper']">
      <AppDashboardTabs :class="$style['content-tabs']" />
      <div :class="$style.content">
        <AppDbKeepAlive :include="dashboardModel.currentTagRouteNames">
          <router-view :key="routeViewKey" />
        </AppDbKeepAlive>
      </div>
    </article>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import AppHeader from "../components/App/AppHeader.vue";
import AppDashboardTabs from "../components/App/AppDashboardTabs.vue";
import AppDbKeepAlive from "../components/App/AppDbKeepAlive.vue";
import AppMenu from "../components/App/AppMenu.vue";

import model from "model";

@Component({
  name: "HomeView",
  components: {
    AppHeader,
    AppMenu,
    AppDashboardTabs,
    AppDbKeepAlive,
  },
})
export default class Header extends Vue {
  public dashboardModel = model.dashboard;

  /**
   * @description 当前路由的唯一key
   */
  public routeViewKey: number | null = null;

  @Watch("$route", { deep: true })
  public handleRouteChange() {
    this.routeViewKey = this.dashboardModel.currentTabKey;
  }

  /**
   * @description 初始化
   */
  public created() {
    this.handleRouteChange();
  }
}
</script>
<style lang="scss" module>
.wrapper {
  height: 100%;
  background: black;
}
.header {
  height: $header-height;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
$sider-width: 260px;
.sider {
  background-color: #fff;
  width: $sider-width;
  position: absolute;
  top: $header-height;
  left: 0;
  bottom: 0;
  border-right: 1px solid $color-border;
}
.content-tabs {
  border-bottom: 1px solid $color-border;
  flex: 0 0 auto;
}
.content-wrapper {
  padding-left: $sider-width;
  padding-top: $header-height;
  background-color: bisque;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  height: 100%;
  flex: auto;
  overflow-y: auto;
  background: white;
}
</style>
