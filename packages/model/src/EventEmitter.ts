/* eslint-disable @typescript-eslint/no-explicit-any */
export type ListenerFn = (...args: any[]) => any;
interface EventEmitterI {
  on(event: string, listener: ListenerFn): void;
  once(event: string, listener: ListenerFn): void;
  off(event: string, listener: ListenerFn): void;
  offAll(event: string): void;
  listeners(event: string): EE[] | undefined;
  emit(event: string, ...args: any[]): void;
}
class EE {
  public fn?: ListenerFn;
  public once?: boolean;

  constructor(fn: ListenerFn, once = false) {
    this.fn = fn;
    this.once = once;
  }
}
export default class EventEmitter implements EventEmitterI {
  private handlers: { [key: string]: EE[] } = {};

  /**
   * @description 监听事件
   * @param event 事件名
   * @param listener 监听器
   */
  public on(event: string, listener: ListenerFn): void {
    const listenerList = this.handlers[event];
    if (listenerList) {
      listenerList.push(new EE(listener));
    } else {
      this.handlers[event] = [new EE(listener)];
    }
  }
  public once(event: string, listener: ListenerFn): void {
    const listenerList = this.handlers[event];
    if (listenerList) {
      listenerList.push(new EE(listener, true));
    } else {
      this.handlers[event] = [new EE(listener, true)];
    }
  }
  public off(event: string, listener: ListenerFn): void {
    const listenerList = this.handlers[event];
    if (listenerList) {
      this.handlers[event] = listenerList.filter(item => item.fn !== listener);
    }
  }
  public offAll(event: string): void {
    if (this.handlers[event]) {
      delete this.handlers[event];
    }
  }
  public listeners(event: string): EE[] | undefined {
    return this.handlers[event];
  }
  public emit(event: string, ...args: any[]): void {
    const listenerList = this.handlers[event];
    if (!listenerList) {
      return;
    }
    const onceEE: EE[] = [];
    listenerList.forEach(item => {
      if (item.fn) {
        item.fn(...args);
      }
      if (item.once) {
        onceEE.push(item);
      }
    });
    this.handlers[event] = listenerList.filter(item => {
      return !onceEE.find(onceItem => item === onceItem);
    });
  }
}
