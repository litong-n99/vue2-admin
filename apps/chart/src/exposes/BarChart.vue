<template>
  <div :class="$style.wrapper">
    <div :class="$style['chart-ele']" ref="chart-ele"></div>
  </div>
</template>
<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import * as echarts from "echarts";
import { initExpose } from "../plugins";
import barChartFakeData from "../fake_data/BarChart";
import model from "model";

initExpose();

@Component({
  name: "BarChart",
  components: {},
})
export default class BarChart extends Vue {
  public appModel = model.app;

  @Ref("chart-ele")
  public chartEle!: HTMLDivElement;

  public chart?: echarts.ECharts;

  public mounted() {
    this.initChart();
  }

  public initChart() {
    this.chart = echarts.init(this.chartEle);
    this.chart.setOption(barChartFakeData);
    this.chart.on("click", "series", (event) => {
      event.name;
      event.seriesName;
      this.$router.push({
        name: "BarChartDetail",
        query: { __tag: `Bar Detail: ${event.name} - ${event.seriesName}` },
        params: { day: event.name, name: event.seriesName as string },
      });
    });
    new ResizeObserver(() => {
      this.chart?.resize();
    }).observe(this.chartEle);
  }
}
</script>
<style lang="scss" module>
.wrapper {
  padding: 40px;
  height: 100%;
}
.chart-ele {
  width: 100%;
  height: 100%;
}
</style>
