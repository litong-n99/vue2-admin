<template>
  <div :class="$style.wrapper">
    <BarChart />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BarChart from "./exposes/BarChart.vue";

@Component({
  name: "HomeView",
  components: {
    BarChart,
  },
})
export default class Header extends Vue {}
</script>
<style lang="scss" module>
.wrapper {
  height: 100%;
}
</style>
