export default function updateNodeElement(newElement, virtualDOM, oldVirtualDOM) {
    const newProps = virtualDOM.props || {}
    const oldProps = oldVirtualDOM.props || {}
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
                if(oldPropsValue){
                    
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
}