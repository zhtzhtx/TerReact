import mountElement from "./mountElement";

export default function diff(virtualDOM, container, oldDOM) {
    const old
    // 判断 oldDOM 是否存在
    if (!oldDOM) {
        mountElement(virtualDOM, container)
    }
}