/**
 *  ------------------
 * | interface IVnode |
 *  ------------------
 * target: the parent node which you want to mount on.
 * tag: the node`s tag which you want to create, such as 'div'.
 */

export interface IVnode {
  tag: string,
  parent: string,
  attr: {
    id: string,
    style?: object,
    className?: string,
  },
  children?: Array<IVnode>
}