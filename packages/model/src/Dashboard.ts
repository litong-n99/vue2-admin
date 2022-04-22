import BaseModel, { saveProp } from "./BaseModel";
import Router, { Route } from "vue-router/types";
import { isRouteSubObjEqual } from "./utils/Route";
import { DashboardTab, DashboardTabExchangeInfo } from "@common-type/Dashboard";

/**
 * @description 应用信息
 */
export default class Dashboard extends BaseModel {
  public static instance = new Dashboard();

  public readonly namespaced: string = "dashboard";

  /**
   * @description 当前tag所有的routename 方便keep-alive
   */
  public get currentTagRouteNames() {
    return Array.from(new Set(this.tabs.map((tab) => tab.name)));
  }

  // 面板的tabs
  @saveProp()
  public tabs: DashboardTab[] = [];

  // 面板的tabs栈
  @saveProp()
  public tabKeyStack: number[] = [];

  // 当前tab的key
  @saveProp()
  public currentTabKey: number | null = null;

  // 根据Key获取标签页
  public getTabByKey(key: number) {
    return this.tabs.find((item) => item.key === key);
  }

  // 当前标签页
  public getCurrentTab() {
    return this.getTabByKey(this.currentTabKey as number);
  }

  public getTabByRoute(route: Route) {
    // 判断tabs中是否有该tab
    return this.tabs.find((item) => {
      if (item.name === route.name) {
        if (!route.meta?.isMultipleTab) return true;
        else {
          return (
            isRouteSubObjEqual(item.params, route.params) &&
            isRouteSubObjEqual(item.query, route.query)
          );
        }
      }
    });
  }

  /**
   * @description 打开新tab
   */
  public openTab(route: Route) {
    // 判断新打开的页面是否在home的管控中
    if (!route.matched.find(({ name }) => name === "Home")) return;

    const tagTitle = route.query.__tag as string | undefined;

    const query = { ...route.query };
    Object.keys(query).forEach((key) => {
      if (key.indexOf("__") === 0) delete query[key];
    });

    const params = { ...route.params };
    Object.keys(params).forEach((key) => {
      if (key.indexOf("__") === 0) delete params[key];
    });

    const findTab = this.getTabByRoute({ ...route, query, params });

    this.emit("before-change-tag", this.currentTabKey);

    if (findTab) {
      // 有：切换对应tab
      if (tagTitle) {
        findTab.title = tagTitle;
      }
      this.currentTabKey = findTab.key;
    } else {
      // 无：添加该tab
      this.currentTabKey = Date.now();
      this.tabs.push({
        query,
        params,
        key: this.currentTabKey,
        name: route.name as string,
        isMultipleTab: route.meta?.isMultipleTab,
        title: tagTitle ?? route.name ?? `标签页${this.tabs.length}`,
      });
      this.tabs = [...this.tabs];
      this.emit("add-new-tag", this.currentTabKey);
    }
    this.tabKeyStack = [...this.tabKeyStack, this.currentTabKey];
    this.emit("after-change-tag", this.currentTabKey);
  }

  /**
   * @description 关闭对应key的tab
   * @param tabKey 要关闭的tab
   */
  public async closeTabByKey(tabKey: number, router: Router) {
    try {
      if (this.tabs.length <= 1) return;
      this.tabs = this.tabs.filter((item) => item.key !== tabKey);
      this.tabKeyStack = this.tabKeyStack.filter((item) => item !== tabKey);
      if (tabKey !== this.currentTabKey) return;
      let backTabKey = this.tabKeyStack.pop();
      if (backTabKey === tabKey) {
        backTabKey = this.tabKeyStack.pop();
      }
      let backTab: DashboardTab | undefined = this.tabs[this.tabs.length - 1];
      if (typeof backTabKey !== "undefined") {
        this.tabKeyStack = [...this.tabKeyStack];
        backTab = this.getTabByKey(backTabKey);
      }
      if (backTab) {
        router.push({
          name: backTab.name,
          params: backTab.params,
          query: backTab.query,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @description 关闭当前标签页
   * @param router 路由
   */
  public async closeCurrentTab(router: Router) {
    if (this.currentTabKey) {
      await this.closeTabByKey(this.currentTabKey, router);
    }
  }

  /**
   * @description 更改tab的信息
   * @param tabKey 修改tab信息对应的key
   * @param changeInfo 要更改的信息
   */
  public async changeTabInfoByKey(
    tabKey: number,
    changeInfo: DashboardTabExchangeInfo
  ) {
    const tabIndex = this.tabs.findIndex((item) => item.key === tabKey);
    if (tabIndex >= 0) {
      const tab = this.tabs[tabIndex];
      const query = {
        ...tab.query,
        ...changeInfo.query,
      };
      const params = {
        ...tab.params,
        ...changeInfo.params,
      };
      this.tabs[tabIndex] = {
        ...tab,
        ...changeInfo,
        query,
        params,
      };
      this.tabs = [...this.tabs];
    }
  }

  /**
   * @description 更改当前tab的信息
   * @param changeInfo 要更改的信息
   */
  public async changeCurrentTabInfo(
    changeInfo: DashboardTabExchangeInfo,
    router: Router
  ) {
    if (this.currentTabKey) {
      await this.changeTabInfoByKey(this.currentTabKey, changeInfo);
      const currentTab = this.getCurrentTab();
      router
        .replace({
          params: currentTab?.params,
          query: currentTab?.query,
        })
        .catch((err) => err);
    }
  }

  /**
   * @description 关闭所有标签
   */
  public async closeAllTab(router: Router) {
    try {
      this.tabs = this.tabs.filter((tabItem) => {
        if (tabItem.name === "Welcome") return true;
      });
      this.tabKeyStack = this.tabs.map((tab) => tab.key);
      if (router.currentRoute.name !== "Welcome") {
        router.push({ name: "Welcome" });
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @description 初始化模块时，监听尺寸变化
   */
  public initModelHook() {
    // TODO
  }
}
