import createDOMElement from "./createDomElement";
import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";
import updateTextNode from "./updateTextNode"
import unmountNode from "./unmountNode";

export default function diff(virtualDOM, container, oldDOM) {
    // 如果是初次加载，即使在Root节点中有子节点，子节点上也没有_virtualDOM属性
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
    // 判断 oldDOM 是否存在，如果存在说明是更新操作，不存在说明是初次加载
    if (!oldDOM) {
        // 将虚拟DOM节点转化为真实DOM，并挂载到父节点上
        mountElement(virtualDOM, container)
    } else if (virtualDOM.type !== oldVirtualDOM.type && typeof virtualDOM.type !== "function") {
        // 如果新旧节点都是DOM节点且标签不同
        const newElement = createDOMElement(virtualDOM)
        oldDOM.parentNode.replaceChild(newElement, oldDOM)
    }else if (typeof virtualDOM.type === "function") {
        // 如果新旧节点都是组件
        diff
    }else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
        // 如果新旧节点的类型相同
        if (virtualDOM.type === "text") {
            // 更新内容
            updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
        } else {
            // 更新元素属性
            updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
        }

        virtualDOM.children.forEach((child, i) => {
            diff(child, oldDOM, oldDOM.childNodes[i])
        })

        // 删除节点
        // 获取旧节点
        let oldChildNodes = oldDOM.childNodes
        // 判断旧节点的数量
        if (oldChildNodes.length > virtualDOM.children.length) {
            // 有节点需要被删除
            for (let i = oldChildNodes.length - 1; i > virtualDOM.children.length - 1; i--) {
                unmountNode(oldChildNodes[i])
            }
        }
    }
}