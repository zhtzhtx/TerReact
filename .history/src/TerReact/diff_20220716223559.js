import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";

export default function diff(virtualDOM, container, oldDOM) {
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
    // 判断 oldDOM 是否存在
    if (!oldDOM) {
        mountElement(virtualDOM, container)
    }else if(oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type){
        if(virtualDOM.type === "text"){
            // 更新内容
            updateTextNode(virtualDOM,oldVirtualDOM,oldDOM)
        }else{
            // 更新元素属性
        }
    }
}