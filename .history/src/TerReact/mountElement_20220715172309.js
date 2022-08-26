import isFunction from "./isFunction"
import mountNativeElement from "./mountNativeElement"

export default function mountElement(virtualDOM, container) {
    // 判断是否为组件
    if(isFunction(virtualDOM)){
        // Component
    }
    // Component vs NativeElement
    mountNativeElement(virtualDOM, container)
}