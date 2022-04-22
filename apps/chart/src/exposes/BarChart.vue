<template>
  <div>
    <ul>
      <li v-for="item in details" :key="item.id">
        <router-link
          :to="{
            name: 'BarChartDetail',
            query: { __tag: `Bar Detail: ${item.title}` },
            params: { id: item.id },
          }"
        >
          Bar Detail: {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { initExpose } from "../plugins";
import model from "model";

initExpose();

@Component({
  name: "BarChart",
  components: {},
})
export default class BarChart extends Vue {
  public appModel = model.app;

  public details = [
    { title: "Jan Data", id: "1" },
    { title: "Feb Data", id: "2" },
    { title: "Mar Data", id: "3" },
  ];
}
</script>
<style lang="scss" scoped></style>
