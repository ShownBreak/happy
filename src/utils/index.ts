import { IVnode } from '../interface/vnode';
import { ICallbackFunction } from '../interface/function';

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

export const watcher = (vm: object, key: string, val: string, cb: ICallbackFunction<string>) => {
  Object.defineProperty(vm, key, {
    enumerable: true,
    configurable: false,
    get(){
      return val;
    },
    set(newVal){
      const oldVal = val;
      if(oldVal !== newVal){
        val = newVal;
        cb(newVal, oldVal);
      }
    }
  });
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