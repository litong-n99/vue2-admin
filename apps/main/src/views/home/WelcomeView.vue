<template>
  <div>
    <h2>What I can do?</h2>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "WelcomeView",
  components: {},
})
export default class WelcomeView extends Vue {
  private mounted() {
    console.log("WelcomeView", "mounted");
  }
}
</script>
<style lang="scss" module></style>
