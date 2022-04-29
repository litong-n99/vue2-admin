import { Input } from 'vxe-table';
import { Component, Model, Watch, Prop } from 'vue-property-decorator';
import VxeFormInput from './VxeFormInput';
import { CreateElement, VNode } from 'vue';

@Component({
  name: 'VxeInput',
  // @ts-ignore
  props: { ...Input.props },
  // @ts-ignore
  model: { ...Input.model }
})
export default class VxeInput extends VxeFormInput {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private onChange(arg: { value: string, $event: Event }) {
    this.emitUserInput(arg.$event);
    this.$emit('change', arg.value);
  }

  private render(h: CreateElement) {
    const slots = Object.entries(this.$slots)
      .reduce<VNode[]>((arr, [, val]) => {
        return arr.concat(val as VNode[]);
      }, [])
      .map(vnode => {
        vnode.context = this.$vnode.context;
        return vnode;
      });

    return h(
      Input,
      {
        on: {
          ...this.$listeners,
          change: this.onChange
        },
        class: this.$vnode.data?.class,
        staticClass: this.$vnode.data?.staticClass,
        props: this.deleteUndefinedProp(
          {
            ...this.$props,
            disabled: this.computedDisabled
          },
          'value'
        ),
        scopedSlots: this.$scopedSlots
      },
      slots
    );
  }
}
