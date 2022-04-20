<template>
  <div>
    <h3>BarChart Detail Id: {{ $route.params.id }}</h3>
    <vxe-input v-model="value"></vxe-input>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "BarChartDetail",
  components: {},
})
export default class BarChartDetail extends Vue {
  public value = this.$route.params.id;
}
</script>
<style lang="scss" module></style>
