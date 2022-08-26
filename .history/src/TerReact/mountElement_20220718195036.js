import isFunction from "./isFunction"
import mountNativeElement from "./mountNativeElement"
import mountComponent from "./mountComponent"

export default function mountElement(virtualDOM, container,) {
    // 判断是否为组件
    if (isFunction(virtualDOM)) {
        // Component
        mountComponent(virtualDOM, container)
    } else {
        // NativeElement
        mountNativeElement(virtualDOM, container)
    }
}