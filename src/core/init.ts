import { IVnode } from '../interface/vnode';

const initMixin = (Happy) => {
  Happy.prototype._init = function(dom: IVnode) {
    const vdom:Array<string | IVnode> = [dom];

    this.vdom = vdom;
    this.currentMoveableId = 'root';
    this.currentMoveableElem = null;
  };
};

export default initMixin;