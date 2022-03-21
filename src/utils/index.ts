import { IVnode } from '../interface/vnode';

/**
 * json格式的style转化为inline style
 * @param attr object style
 * @param split string 分隔符
 * @returns string
 */
export const convertJsontoStyle = (attr: object, split: string): string => {
  const keys = Object.keys(attr);
  if (!keys.length) return '';
  return keys.map(key => {
    return humpConvert(key) + ':' + attr[key];
  }).join(split);
};

/**
 * humpConvert 驼峰转短横线
 * @param str 驼峰str
 * @returns 短横线str
 */
export const humpConvert = (str: string): string => {
  if (!str) return '';
  return str.split(/(?=[A-Z])/g).join('-').toLowerCase();
};

export const findVdomTargetbyId = (id: string, vdom: Array<IVnode>): IVnode => {
  let result: IVnode | null = null;
  while(vdom.length) {
    const target = vdom[0];
    if (target.attr.id === id) {
      result = { ...target };
      break;
    }
    if (target.children.length) {
      vdom = [ ...vdom.slice(1), ...target.children ];
    }
  }
  return result;
};