<template>
  <div>BarChartCool: {{ appModel.size }}</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import model from "model";

@Component({
  name: "BarChart",
  components: {},
})
export default class BarChart extends Vue {
  public appModel = model.app;
}
</script>
<style lang="scss" scoped></style>
