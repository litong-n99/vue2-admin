<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">Vue2 Admin</h1>
    <div :class="$style['tools-wrapper']">
      <vxe-select
        :class="$style['tools-item-select']"
        v-model="appModel.theme"
        @change="appModel.setAppTheme()"
      >
        <vxe-option value="Blue" label="Blue"></vxe-option>
        <vxe-option value="Green" label="Green"></vxe-option>
        <vxe-option value="Orange" label="Orange"></vxe-option>
        <vxe-option value="Gray" label="Gray"></vxe-option>
        <vxe-option value="BlueGray" label="BlueGray"></vxe-option>
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

      <a
        :class="$style['github-icon']"
        href="https://github.com/litong-n99/vue2-admin"
        target="_blank"
      >
        <svg
          version="1.1"
          width="32"
          height="32"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </a>
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
.github-icon {
  vertical-align: middle;
  margin-left: 16px;
}
</style>
