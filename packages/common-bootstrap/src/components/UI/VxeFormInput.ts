/**
 * @description antdform组件输入框的扩展
 */
 import { Component, Vue, Prop, Inject } from 'vue-property-decorator';
 import Models from 'model';

 @Component
 export default class VxeFormInput extends Vue {
  // 禁用信息
  @Prop({ type: Boolean, default: false })
  private disabled!: boolean;

  // 禁用权限
  @Prop({ type: Boolean, default: false })
  private disableAuth!: boolean;

  // 是否启用编辑时触发事件
  @Prop({ type: Boolean, default: true })
  private isEmitUserInput!: boolean;

  // 禁用组件(是否可用)
  @Inject({
    default: undefined
  })
  private isAuthUsable!: { info: boolean };

   // 计算后的disabled
   protected get computedDisabled() {
    if (this.disableAuth) {
      return this.disabled;
    }

    const isAuthDisabled = this.isAuthUsable ? !this.isAuthUsable.info : false;
    return this.disabled || isAuthDisabled;
   }

  protected deleteUndefinedProp(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    records: Record<string, any>,
    exceptKey?: string | string[]
  ) {
    const eks = Array.isArray(exceptKey) ? exceptKey : [exceptKey];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.entries(records).reduce<Record<string, any>>(
      (newProp, [key, val]) => {
        if (eks.includes(key) || typeof val !== 'undefined') newProp[key] = val;
        return newProp;
      },
      {}
    );
  }

  /**
  * @description 触发用户输入
  */
  protected emitUserInput(event?: Event) {
    this.isEmitUserInput && Models.dashboard.emitUserInput(event);
  }
}
