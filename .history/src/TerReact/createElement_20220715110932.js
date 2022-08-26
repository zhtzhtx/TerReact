export default function createElement(type, props, ...children) {
    // 判断是否为文本节点，如果是文本节点则手动创建VNode
    const childElements = [].concat(...children).reduce((result, child) => {
        if(child !== false && child !== true)
        if (child instanceof Object) {
            return child
        } else {
            return createElement("text", { textContent: child })
        }
    }, [])

    return {
        type,
        props,
        children
    }
}