<template>
  <div>
    <router-link
      :class="$style['menu-item']"
      v-for="item in menus"
      :key="item.name"
      :to="{ name: item.name }"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { menus } from "../../plugins/Router";

@Component({
  name: "AppMenu",
  components: {},
})
export default class AppMenu extends Vue {
  public get menus() {
    return menus;
  }
}
</script>
<style lang="scss" module>
.menu-item {
  border-bottom: 1px solid $color-border;
  text-decoration: none;
  padding: 12px;
  display: block;
}
</style>
