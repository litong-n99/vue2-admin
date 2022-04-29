import { Component, Vue, Prop, Provide, Watch } from 'vue-property-decorator';
import Models from 'model';
import assigninwith from 'lodash.assigninwith';
import { CreateElement } from 'vue/types/vue';

@Component({
  name: 'Auth',
})
export default class Auth extends Vue {
  // 组件操作码
  @Prop({ type: String, required: true })
  private authCode!: string;

  // 向下暴露是否可用
  @Provide('isAuthUsable')
  private isProvideUsable: { info: boolean } = { info: false };

  // 当前操作码信息
  private get opCodeInfo() {
    return Models.app.authCodes[this.authCode];
  }

  // 当前操作码是否可见
  private get computedIsVisible() {
    return this.opCodeInfo?.isVisible ?? false;
  }

  // 当前操作码是否可用
  private get computedIsUsable() {
    return this.opCodeInfo?.isUsable ?? false;
  }

  /**
   * @description 设置同步属性
   */
  @Watch('computedIsUsable')
  private setSyncedAndProvideProps() {
    this.isProvideUsable.info = this.computedIsUsable;
  }

  private created() {
    this.setSyncedAndProvideProps();
  }

  private getDeleteFieldObj(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    obj: { [key: string]: any },
    fields: string[]
  ) {
    const newObj = { ...obj };
    fields.forEach(field => {
      newObj[field] = undefined;
    });
    return newObj;
  }

  private render(h: CreateElement) {
    let propsData = this.$vnode.componentOptions?.propsData;
    if (propsData) {
      propsData = this.getDeleteFieldObj(propsData, ['authCode']);
    }
    const slots =
      this.$slots.default?.map(item => {
        if (item.componentOptions && this.$vnode.componentOptions) {
          assigninwith(item.componentOptions.propsData, propsData, function(
            objVal,
            srcVal
          ) {
            if (objVal) return objVal;
            return srcVal;
          });
          assigninwith(
            item.componentOptions.listeners,
            this.$vnode.componentOptions.listeners,
            function(objVal, srcVal) {
              if (objVal) return objVal;
              return srcVal;
            }
          );
        }
        return item;
      }) ?? [];
    if (this.computedIsVisible) {
      return slots.length === 1 ? slots[0] : h('div', slots);
    } else {
      return null;
    }
  }
}
