import { watcher } from '../utils/index';
import { IVnode } from '../interface/vnode';
import updateCurrentMoveableElement from './moveable';

const initMixin = (Happy) => {
  Happy.prototype._init = function(dom: IVnode) {
    const vdom:Array<string | IVnode> = [dom];
    const currentMoveableElem: HTMLElement = null;

    this.vdom = vdom;
    this.currentMoveableId = 'root';
    this.currentMoveableElem = currentMoveableElem;

    watcher(this, 'currentMoveableId', 'root', (newV) => {
      this.currentMoveableElem = null;
      this.currentMoveableElem = updateCurrentMoveableElement(newV, this.vdom);
    });
  };
};

export default initMixin;