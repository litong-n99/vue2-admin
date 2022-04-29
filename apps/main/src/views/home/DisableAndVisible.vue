<template>
  <div :class="$style.wrapper">
    <div>
      <h2>codeA:{{ codes.codeA }}</h2>
      <Auth authCode="codeA">
        <vxe-input></vxe-input>
      </Auth>
      <hr />
    </div>
    <div>
      <h2>codeB:{{ codes.codeB }}</h2>
      <Auth authCode="codeB">
        <vxe-input></vxe-input>
      </Auth>
      <hr />
    </div>
    <div>
      <h2>codeC:{{ codes.codeC }}</h2>
      <Auth authCode="codeC">
        <vxe-input></vxe-input>
      </Auth>
      <hr />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Models from "model";

@Component({
  name: "DisableAndVisible",
  components: {},
})
export default class DisableAndVisible extends Vue {
  public codes = Models.app.authCodes;
}
</script>
<style lang="scss" module>
.wrapper {
  padding: 16px;
}
</style>
