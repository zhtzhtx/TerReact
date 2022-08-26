/**
 * 创建 Virtual DOM
 * @param {string} type 类型
 * @param {object | null} props 属性
 * @param  {createElement[]} children 子元素
 * @return {object} Virtual DOM
 */

export default function createElement(type, props, ...children) {
    // 判断是否为文本节点，如果是文本节点则手动创建VNode
    const childElements = [].concat(...children).reduce((result, child) => {
        // 判断子节点不为布尔类型或 null
        if (child !== false && child !== true && child !== null) {
            // 判断是否文本节点
            if (child instanceof Object) {
                result.push(child)
            } else {
                // 将其封装成文本节点的 Virtual DOM
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