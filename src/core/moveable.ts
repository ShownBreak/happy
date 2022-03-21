import Moveable from 'moveable';
import { IVnode } from '../interface/vnode';
import { info } from '../utils/console';
import { findVdomTargetbyId } from '../utils/index';

const moveableMixin = (Happy) => {
  Happy.prototype.moveableFactory = function(newV: string) {
    deleteMoveableElem(this.currentMoveableElem);
    this.currentMoveableElem = updateCurrentMoveableElement(newV, this.vdom);
  };
};

const updateCurrentMoveableElement = (id: string, vdom: Array<IVnode>): Moveable => {
  info('updateCurrentMoveableElement');
  const currentVdom = findVdomTargetbyId(id, vdom);
  if (!currentVdom || currentVdom.parent ===  currentVdom.attr.id) return;
  const parent = document.getElementById(currentVdom.parent);
  const target = document.getElementById(currentVdom.attr.id);
  const moveable = new Moveable(parent, {
    target,
    draggable: true
  });

  const frame = {
    translate: [0, 0],
  };
  moveable.on('dragStart', function(e) {
    console.log(e);
    e.set(frame.translate);
  }).on('drag', function(e) {
    frame.translate = e.beforeTranslate;
    e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
  }).on('dragEnd', function(e) {
    console.log('onDragEnd', e.target, e.isDrag);
  });

  return moveable;
};

const deleteMoveableElem = (dom: any) => {
  if (dom) {
    const styleId = dom.target.nextElementSibling.dataset.styledId;
    const self = document.querySelector(`div[data-styled-id=${styleId}]`);
    const parent = self.parentElement;
    parent.removeChild(self);
  }
};

export default moveableMixin;