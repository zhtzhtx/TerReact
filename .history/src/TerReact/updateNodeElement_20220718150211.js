export default function updateNodeElement(newElement, virtualDOM, oldVirtualDOM = {}) {
    const newProps = virtualDOM.props || {}
    const oldProps = oldVirtualDOM.props || {}
    // 判断属性更新情况
    Object.keys(newProps).forEach(propName => {
        // 获取属性值
        const newPropsValue = newProps[propName]
        const oldPropsValue = oldProps[propName]
        // 判断新旧props的值是否相同
        if (newPropsValue !== oldPropsValue) {
            // 判断属性是否为事件属性 onClick
            if (propName.slice(0, 2) === "on") {
                // 事件名称
                const eventName = propName.toLowerCase().slice(2)
                // 为元素添加事件
                newElement.addEventListener(eventName, newPropsValue)
                // 如果旧事件处理函数存在，需要卸载
                if (oldPropsValue) {
                    newElement.removeEventListener(eventName, oldPropsValue)
                }
            } else if (propName === "value" || propName === "checked") {
                newElement[propName] = newPropsValue
            } else if (propName !== "children") {
                if (propName === "className") {
                    newElement.setAttribute("class", newPropsValue)
                } else {
                    newElement.setAttribute(propName, newPropsValue)
                }
            }
        }

    })
    // 判断属性删除情况
    Object.keys(oldProps).forEach(propName => {
        const newPropsValue = newProps[propName]
        const oldPropsValue = oldProps[propName]
        // 如果新props中没有该属性，说明被删除
        if (!newPropsValue) {
            // 判断是否为事件处理函数
            if (propName.slice(0, 2) === "on") {
                const eventName = propName.toLowerCase().slice(2)
                newElement.removeEventListener(eventName, oldPropsValue)
            }
        } else if (propName !== "children") {
            console.log(newPropsValue)
            if (propName === "className") {
                newElement.removeAttribute("class")
            } else {
                newElement.removeAttribute(propName)
            }
        }
    })
}