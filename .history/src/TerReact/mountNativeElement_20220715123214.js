export default function mountNativeElement(virtualDOM, container) {
    let newElement = null
    if (virtualDOM.type === "text") {
        // 文本节点
        newElement = document.createTextNode(virtualDOM.props)
    } else {
        // 元素节点
    }
}