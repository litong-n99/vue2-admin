<template>
  <div :class="$style.wrapper">
    <AppHeader />
    <aside>
      <BarChart />
    </aside>
    <article>
      <router-view />
    </article>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppHeader from "@main/components/App/AppHeader.vue";
const BarChart = () => import("mfe_chart/BarChart.vue");

@Component({
  name: "HomeView",
  components: {
    AppHeader,
    BarChart,
  },
})
export default class Header extends Vue {}
</script>
<style lang="scss" module>
.wrapper {
  height: 100%;
  background: black;
}
</style>
