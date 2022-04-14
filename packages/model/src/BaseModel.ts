/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import { debounce } from "xe-utils";
import EventEmitter from "@model/EventEmitter";
import { saveModel } from "./ModelUtil";

/**
 * @description decorator: which field need storage
 */
export function saveProp() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (target: any, propertyName: string) => {
    if (!target.__saveProps__) {
      target.__saveProps__ = [];
    }
    if (!target.__saveProps__.find((item: string) => item === propertyName)) {
      target.__saveProps__.push(propertyName);
    }
  };
}

/**
 * @description basic model
 */
export default abstract class BaseModel extends EventEmitter {
  /**
   * @description debounce save
   */
  private debounceSave = debounce(() => this.save(), 300);

  public abstract namespaced: string;

  /**
   * @description init model
   */
  public init() {
    Vue.observable(this);
    Object.entries(this).forEach(([key]) => {
      // if start with $ or _, dont handle that field
      if (key.startsWith("$") || key.startsWith("_") || key.endsWith("$")) {
        return;
      }
      const descriptor = Object.getOwnPropertyDescriptor(this, key) || {};

      // dont handle methods
      if (typeof descriptor.value === "function") {
        return;
      }

      // @ts-ignore
      if (this.__saveProps__ && this.__saveProps__.includes(key)) {
        const propDescriptor = Object.getOwnPropertyDescriptor(this, key);
        if (propDescriptor) {
          const originSetter = propDescriptor.set;
          Object.defineProperty(this, key, {
            set: function (val) {
              originSetter && originSetter(val);
              this.debounceSave();
            },
          });
        }
      }
    });

    this.initModelHook();
  }

  /**
   * @description init props
   * @param {Object} modelObj model object
   */
  public initProps(modelObj: any) {
    for (const key in modelObj) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.hasOwnProperty(key)) {
        (this as any)[key] = modelObj[key];
      }
    }
  }

  /**
   * @description 转换为保存的对象
   */
  public toSaveObject(): object {
    const saveObj: { [key: string]: any } = {};
    // @ts-ignore
    if (!this.__saveProps__) {
      throw new Error(
        "模型中未设置保存的属性，请在想保存的属性上使用@saveProp装饰器"
      );
    }
    // @ts-ignore
    this.__saveProps__.forEach((key) => {
      saveObj[key] = (this as any)[key];
    });
    return JSON.parse(JSON.stringify(saveObj));
  }

  /**
   * @description 清空模型，用于注销等操作
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public cleanModel() {}

  /**
   * @description 初始化模型，实现类在初始化时的钩子
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected initModelHook() {}

  /**
   * @description 保存到localfrage
   */
  private save() {
    saveModel(this);
  }
}
