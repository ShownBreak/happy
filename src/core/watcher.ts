import { ICallbackFunction } from '../interface/function';

const watcherMixin = (Happy) => {
  Happy.prototype.watch = function(key: string, cb: ICallbackFunction) {
    watcher(this, key, this[key], cb);
  };
};

const watcher = (vm: object, key: string, val: string, cb: ICallbackFunction) => {
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

export default watcherMixin;
