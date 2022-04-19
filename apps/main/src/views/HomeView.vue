<template>
  <div :class="$style.wrapper">
    <header :class="$style.header">
      <AppHeader />
    </header>
    <aside :class="$style.sider">
      <AppMenu />
    </aside>
    <article :class="$style['content-wrapper']">
      <div :class="$style.content">
        <router-view />
      </div>
    </article>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppHeader from "../components/App/AppHeader.vue";
import AppMenu from "../components/App/AppMenu.vue";

@Component({
  name: "HomeView",
  components: {
    AppHeader,
    AppMenu,
  },
})
export default class Header extends Vue {}
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
}
.content-wrapper {
  padding-left: $sider-width;
  padding-top: $header-height;
  background-color: bisque;
  height: 100%;
}
.content {
  padding: 20px;
}
</style>
