import mountElement from "./mountElement";

export default function diff(virtualDOM, container, oldDOM) {
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
    // 判断 oldDOM 是否存在
    if (!oldDOM) {
        mountElement(virtualDOM, container)
    }else if(oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type){
        
    }
}