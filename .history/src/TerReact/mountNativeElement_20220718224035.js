import createDOMElement from "./createDomElement"
import unmountNode from "./unmountNode"

export default function mountNativeElement(virtualDOM, container, oldDOM) {
    let newElement = createDOMElement(virtualDOM)
    if (oldDOM) {
          // 判断旧的DOM对象是否存在，如果存在，将新DOM插入到旧DOM之前，再删除旧DOM
        container.insertBefore(newElement, oldDOM)
        unmountNode(oldDOM)
    } else {
        // 将真实DOM元素放在父元素中
        container.appendChild(newElement)
    }
  

    // 获取组件的实例对象,在mountComponent.js中挂载的该属性
    let component = virtualDOM.component

    if (component) {
        component.setDOM(newElement)
    }
}