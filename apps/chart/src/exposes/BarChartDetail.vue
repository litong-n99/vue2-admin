<template>
  <div :class="$style.wrapper">
    <div :class="$style['info-wrapper']">
      <h3 :class="$style.title">
        Info: {{ $route.params.day }}-{{ $route.params.name }}
      </h3>
      <vxe-input placeholder="remark" v-model="remark"></vxe-input>
    </div>
    <div :class="$style['chart-ele']" ref="chart-ele"></div>
  </div>
</template>
<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import { initExpose } from "../plugins";
import * as echarts from "echarts";
import { getRandomOption } from "../fake_data/BarChartDetail";

initExpose();

@Component({
  name: "BarChartDetail",
  components: {},
})
export default class BarChartDetail extends Vue {
  public remark = "";
  @Ref("chart-ele")
  public chartEle!: HTMLDivElement;

  public chart?: echarts.ECharts;

  public mounted() {
    this.initChart();
  }

  public initChart() {
    this.chart = echarts.init(this.chartEle);
    this.chart.setOption(getRandomOption());
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
  flex: auto;
  overflow-y: auto;
}
.info-wrapper {
  flex: 0 0 auto;
  padding-left: 8px;
  margin-bottom: 12px;
}
.title {
  color: $color-primary;
  margin: 0;
  display: inline-block;
  margin-right: 12px;
}
.chart-ele {
  height: 100%;
  flex: auto;
  overflow-y: auto;
}
</style>
