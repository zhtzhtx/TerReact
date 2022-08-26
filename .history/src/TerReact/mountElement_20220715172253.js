import isFunction from "./isFunction"
import mountNativeElement from "./mountNativeElement"

export default function mountElement(virtualDOM, container) {
    // 判断是否为
    if(isFunction(virtualDOM)){
        // 
    }
    // Component vs NativeElement
    mountNativeElement(virtualDOM, container)
}