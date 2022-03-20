import Moveable from 'moveable';
import { IVnode } from '../interface/vnode';
import { info } from '../utils/console';
import { findVdomTargetbyId } from '../utils/index';


const updateCurrentMoveableElement = (id: string, vdom: Array<IVnode>) => {
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

export default updateCurrentMoveableElement;