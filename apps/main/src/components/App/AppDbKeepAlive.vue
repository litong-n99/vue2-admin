<script lang="tsx">
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { VNode, VNodeComponentOptions } from "vue";
import { Component, Vue, Prop } from "vue-property-decorator";
import model from "model";

type VNodeCache = { [key: string]: VNode | null };

const _toString = Object.prototype.toString;

function isRegExp(v: any): boolean {
  return _toString.call(v) === "[object RegExp]";
}

export function isDef(v: any): boolean {
  return v !== undefined && v !== null;
}

function isAsyncPlaceholder(node: VNode): boolean {
  // @ts-ignore
  return node.isComment && node.asyncFactory;
}

function getFirstComponentChild(children?: Array<VNode>): VNode | undefined {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/**
 * Remove an item from an array.
 */
function remove(arr: Array<any>, item: any): Array<any> | void {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

function getComponentName(opts?: VNodeComponentOptions): string {
  // @ts-ignore
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(
  pattern: string | RegExp | Array<string>,
  name: string
): boolean {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === "string") {
    return pattern.split(",").indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  return false;
}

function pruneCacheEntry(
  cache: VNodeCache,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
  const cached = cache[key];
  if (cached?.componentInstance && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

function pruneCache(keepAliveInstance: any, filter: (name: string) => unknown) {
  const { cache, keys, _vnode } = keepAliveInstance;
  for (const key in cache) {
    const cachedNode: VNode = cache[key];
    if (cachedNode) {
      const name: string = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

// 将props和model透传
@Component({
  name: "AppDbKeepAlive",
})
export default class AppDbKeepAlive extends Vue {
  @Prop([String, Number])
  private max!: string | number;

  private cache!: VNodeCache;
  private keys!: string[];

  private get include() {
    return model.dashboard.currentTagRouteNames;
  }

  private get dashBoardKeys() {
    return model.dashboard.tabs.map((item) => {
      return item.key;
    });
  }

  private created() {
    this.cache = Object.create(null);
    this.keys = [];
  }

  private destroyed() {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  }

  private mounted() {
    this.$watch("include", (val) => {
      pruneCache(this, (name: string) => matches(val, name));
    });
    this.$watch(
      "dashBoardKeys",
      (val: string[]) => {
        const removeKeys = this.keys.filter((key) => !val.includes(key));
        removeKeys.forEach((key) => {
          const vNode = this.cache[key];
          vNode?.componentInstance?.$destroy();
          this.cache[key] = null;
        });
        this.keys = this.keys.filter((key) => !removeKeys.includes(key));
      },
      {
        deep: true,
      }
    );
  }

  private render() {
    const slot = this.$slots.default;
    const vnode = getFirstComponentChild(slot);
    const componentOptions = vnode && vnode.componentOptions;
    if (vnode && componentOptions) {
      // check pattern
      const name: string = getComponentName(componentOptions);
      const { include } = this;
      if (
        // not included
        include &&
        (!name || !matches(include, name))
      ) {
        return vnode;
      }

      const { cache, keys } = this;
      const key = vnode.key as string;
      if (cache[key]) {
        vnode.componentInstance = cache[key]?.componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key as string);
      } else {
        cache[key] = vnode;
        keys.push(key as string);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max as string)) {
          // @ts-ignore
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      if (vnode?.data) vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0]);
  }
}
</script>
