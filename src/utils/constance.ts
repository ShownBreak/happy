import { IVnode } from '../interface/vnode';

export const example: IVnode = {
  tag: 'div',
  parent: 'root',
  attr: {
    id: 'root',
    style: {
      width: '1280px',
      height: '768px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#eee',
      border: '1px dashed #999',
      overflow: 'auto'
    },
    className : '',
  },
  children: [
    {
      tag: 'div',
      parent: 'root',
      attr: {
        id: 'children',
        style: {
          width: '100px',
          height: '100px',
          backgroundColor: 'red',
          border: '1px dashed #999'
        },
        className : '',
      },
      children: []
    }
  ]
};