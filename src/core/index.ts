/**
 * HAPPY.JS 完全的云上开发框架
 *
 * 1.操作模块
 * 1.1 可视化生成moveable元素能力
 * 1.2 moveable元素间排版能力
 * 1.3 可视化嵌入数据流以及可视化处理数据流的能力
 * 1.4 半自动化植入css能力
 *
 * 2.编译模块
 * 2.1 操作模块生成的配置文件编译为正常的html + css + js
 */

import initMixin from './init';
import renderMixin from './render';
import { IVnode } from '../interface/vnode';
import { error } from '../utils/console';

import { example } from '../utils/constance';


function Happy(root: IVnode | undefined) {
  if (!(this instanceof Happy)) {
    return error('Happy is a constructor and should be called with the `new` keyword');
  }
  root = root || example;
  this._init(root);
  this.render(this.vdom);
}

initMixin(Happy);
renderMixin(Happy);

export { Happy };
