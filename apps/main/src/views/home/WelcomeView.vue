<template>
  <div :class="$style.wrapper">
    <h2>What I can do?</h2>
    <h3>Monorepo - Turborepo</h3>
    <h3>Faderation</h3>
    <h3>Custom store machine</h3>
    <h3>KeepAlive with same component</h3>
    <h3>Change theme</h3>
    <h3>Change app size</h3>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "WelcomeView",
  components: {},
})
export default class WelcomeView extends Vue {}
</script>
<style lang="scss" module>
.wrapper {
  padding: 16px;
}
</style>
