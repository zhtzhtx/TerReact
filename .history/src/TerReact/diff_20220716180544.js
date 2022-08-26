import mountElement from "./mountElement";

export default function diff(virtualDOM, container, oldDOM) {
    const oldVirtualDOM = oldDOM && 
    // 判断 oldDOM 是否存在
    if (!oldDOM) {
        mountElement(virtualDOM, container)
    }
}