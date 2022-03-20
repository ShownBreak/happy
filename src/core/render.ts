import { IVnode } from '../interface/vnode';
import { warn } from '../utils/console';
import { convertJsontoStyle } from '../utils/index';

const renderMixin = (Happy) => {
  Happy.prototype.render = function(vdom: Array<IVnode>) {
    if (!vdom) return warn('dom列表为空');
    vdom.forEach(elem => {
      this.createCommonElement(elem);
      if (elem.children.length) {
        this.render(elem.children);
      }
    });
  };

  Happy.prototype.createCommonElement = function(vdom: IVnode) {
    const { tag, parent, attr } = vdom;
    const rdom = document.createElement(tag);

    // 装配attr
    attrFactory(rdom, attr);

    rdom.onclick = (e) => {
      e.stopPropagation();
      this.currentMoveableId = attr.id;
    };

    if (parent === 'root' && parent === attr.id) document.body.appendChild(rdom);
    else document.getElementById(parent).appendChild(rdom);
  };
};

/**
 * 节点属性装配车间
 * @param target 目标节点
 * @param attr 需要装配的属性
 */
const attrFactory = (target: HTMLElement, attr: object) => {
  Object.keys(attr).forEach(key => {
    if (key === 'style') {
      target.setAttribute(key, convertJsontoStyle(attr[key], ';'));
    } else {
      target.setAttribute(key, attr[key]);
    }
  });
};
// const eventFactory = () => {};

export default renderMixin;