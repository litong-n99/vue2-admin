import { Dictionary } from 'vue-router/types/router';

/**
 * @description 面板上面的tab
 */
export interface DashboardTab {
  key: number;
  name: string;
  query: Dictionary<null | string | (string | null)[]>;
  params: Dictionary<string>;
  isMultipleTab: boolean;
  title: string;
}

/**
 * @description 更换面板上Tab的信息
 */
 export interface DashboardTabExchangeInfo {
  name?: string;
  query?: Dictionary<null | string | (string | null)[]>;
  params?: Dictionary<string>;
  title?: string;
}
