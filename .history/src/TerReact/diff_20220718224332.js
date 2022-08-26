import createDOMElement from "./createDomElement";
import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";
import updateTextNode from "./updateTextNode"
import unmountNode from "./unmountNode";
import diffComponent from "./diffComponent";


export default function diff(virtualDOM, container, oldDOM) {
    // 如果是初次加载，即使在Root节点中有子节点，子节点上也没有_virtualDOM属性
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
    // 获取旧组件的实例对象,在mountComponent.js中挂载的该属性
    const oldComponent = oldVirtualDOM && oldVirtualDOM.component
    // 判断 oldDOM 是否存在，如果存在说明是更新操作，不存在说明是初次加载
    if (!oldDOM) {
        // 将虚拟DOM节点转化为真实DOM，并挂载到父节点上
        mountElement(virtualDOM, container)
    } else if (virtualDOM.type !== oldVirtualDOM.type && typeof virtualDOM.type !== "function") {
        // 如果新旧节点都是DOM节点且标签不同
        const newElement = createDOMElement(virtualDOM)
        oldDOM.parentNode.replaceChild(newElement, oldDOM)
    } else if (typeof virtualDOM.type === "function") {
        // 如果新旧节点都是组件
        diffComponent(virtualDOM, oldComponent, oldDOM, container)
    } else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
        // 如果新旧节点的类型相同
        if (virtualDOM.type === "text") {
            // 更新内容
            updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
        } else {
            // 更新元素属性
            updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
        }

        // 将拥有key属性的子元素放置在一个单独的对象中
        let keyedElements = {}
        for (let i = 0, len = oldDOM.childNodes.length; i < len; i++) {
            let domElement = oldDOM.childNodes[i]
            if (domElement.nodeType === 1) {
                let key = domElement.getAttribute("key")
                if (key) {
                    keyedElements[key] = domElement
                }
            }
        }

        // 判断是否有带key的子元素
        let hasNoKey = Object.keys(keyedElements).length === 0

        if (hasNoKey) {
            // 如果没有，直接diff
            virtualDOM.children.forEach((child, i) => {
                diff(child, oldDOM, oldDOM.childNodes[i])
            })
        } else {
            // 循环virtualDOM的子元素，获取子元素的key属性 
            virtualDOM.children.forEach(child => {
                let key = child.props.key
                if (key) {
                    let domElement = keyedElements[key]
                    if (domElement) {
                        // 判断位置的元素是否发生改变
                        if (oldDOM.childNodes[i] && oldDOM.childNodes[i] !== domElement) {
                            oldDOM.insertBefore(domElement, oldDOM.childNodes[i])
                        }
                    } else {
                        // 新增元素
                        mountElement(child, oldDOM, oldDOM.childNodes[i])
                    }
                }
            })
        }

        // 删除节点
        // 获取旧节点
        let oldChildNodes = oldDOM.childNodes
        // 判断旧节点的数量
        if (oldChildNodes.length > virtualDOM.children.length) {
            // 判断是否有带key的子元素
            if (hasNoKey) {
                // 有节点需要被删除
                for (let i = oldChildNodes.length - 1; i > virtualDOM.children.length - 1; i--) {
                    unmountNode(oldChildNodes[i])
                }
            }else{
                // 通过key属性删除节点
                for(let i = 0;i<oldChildNodes.length;i++){
                    let 
                }
            }
        }

    }
}