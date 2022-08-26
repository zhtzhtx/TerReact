import isFunction from "./isFunction"

export default function isFunctionComponent(virtualDOM) {
    const type = virtualDOM.type
    // 如果VNode的type属性是函数，且原型上不具有render属性，则是一个函数组件
    return type && isFunction(virtualDOM) && !(type.prototype && type.prototype.render)
}