export default function createElement(type, props, ...children) {
    // 判断是否为文本节点，如果是文本节点则手动创建VNode
    const childElements = [].concat(...children).reduce((result, child) => {
        if (child !== false && child !== true && child !== null) {
            if (child instanceof Object) {
                result.push(child)
            } else {
                result.push(createElement("text", { textContent: child }))
            }
        }
        return result
    }, [])

    return {
        type,
        props: Object.assign({ children: childElements }, props),
        children: childElements
    }
}