function updateTextNode(virtualDOM, oldVirtualDOM, oldDOM) {
    // 如果文本节点内容不同
    if (virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
        // 更新真实 DOM 对象中的内容
        oldDOM.textContent = virtualDOM.props.textContent
    }
    // 同步真实 DOM 对应的 Virtual DOM
    oldDOM._virtualDOM = virtualDOM
}