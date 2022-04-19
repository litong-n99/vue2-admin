<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">Vue2 Admin</h1>
    <div :class="$style['tools-wrapper']">
      <vxe-select :class="$style['tools-item-select']" v-model="theme">
        <vxe-option value="Blue" label="Blue"></vxe-option>
        <vxe-option value="Green" label="Green"></vxe-option>
        <vxe-option value="Orange" label="Orange"></vxe-option>
      </vxe-select>
      <vxe-select
        @change="appModel.setAppSize()"
        :class="$style['tools-item-select']"
        v-model="appModel.size"
      >
        <vxe-option value="Small" label="Small"></vxe-option>
        <vxe-option value="Medium" label="Medium"></vxe-option>
        <vxe-option value="Large" label="Large"></vxe-option>
        <vxe-option value="XLarge" label="XLarge"></vxe-option>
      </vxe-select>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import model from "model";

@Component({
  name: "AppHeader",
  components: {},
})
export default class AppHeader extends Vue {
  public theme = "Blue";

  public appModel = model.app;
}
</script>
<style lang="scss" module>
.wrapper {
  height: 100%;
  background-color: $color-header-bg;
  color: #fff;
}
.title {
  display: inline-block;
  line-height: $header-height;
  margin: 0;
  font-size: 20px;
  padding-left: 24px;
}
.tools-wrapper {
  height: $header-height;
  float: right;
  padding-top: 12px;
  padding-right: 24px;
}
.tools-item-select {
  width: 100px;
  & + & {
    margin-left: 12px;
  }
}
</style>
