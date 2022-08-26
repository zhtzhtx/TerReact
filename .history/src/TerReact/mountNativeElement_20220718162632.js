import createDOMElement from "./createDomElement"

export default function mountNativeElement(virtualDOM, container) {
    let newElement = createDOMElement(virtualDOM)

    // 将真实DOM元素放在父元素中
    container.appendChild(newElement)

    // 获取组件的实例对象
    let component = virtualDOM
}