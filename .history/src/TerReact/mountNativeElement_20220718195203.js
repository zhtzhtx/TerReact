import createDOMElement from "./createDomElement"

export default function mountNativeElement(virtualDOM, container, oldDOM) {
    let newElement = createDOMElement(virtualDOM)

    // 判断
    // 将真实DOM元素放在父元素中
    container.appendChild(newElement)

    // 获取组件的实例对象,在mountComponent.js中挂载的该属性
    let component = virtualDOM.component

    if (component) {
        component.setDOM(newElement)
    }
}