import { Dictionary } from "vue-router/types/router";

/**
 * @description 删除为Falsz的属性
 * @param records 要操作的属性
 * @param exceptKey 除此之外的key
 */
export function deleteFalaszProp(
  records: Dictionary<null | string | (string | null)[]>,
  exceptKey?: string | string[]
) {
  const eks = Array.isArray(exceptKey) ? exceptKey : [exceptKey];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.entries(records).reduce<Record<string, any>>(
    (newProp, [key, val]) => {
      if (eks.includes(key) || !!val) newProp[key] = val;
      return newProp;
    },
    {}
  );
}

/**
 * 判断两个路由对象是否相同
 * @param o1 对象1
 * @param o2 对象2
 */
export function isRouteSubObjEqual(
  o1: Dictionary<null | string | (string | null)[]>,
  o2: Dictionary<null | string | (string | null)[]>
) {
  if (!o1 || !o2) return false;

  const newO1 = deleteFalaszProp(o1);
  const newO2 = deleteFalaszProp(o2);

  const props1 = Object.keys(newO1);
  const props2 = Object.keys(newO2);
  if (props1.length !== props2.length) {
    return false;
  }
  for (let i = 0, max = props1.length; i < max; i++) {
    const propName = props1[i];
    if (`${newO1[propName]}` !== `${newO2[propName]}`) {
      return false;
    }
  }
  return true;
}
