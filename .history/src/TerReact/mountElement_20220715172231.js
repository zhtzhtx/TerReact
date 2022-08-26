import isFunction from "./isFunction"
import mountNativeElement from "./mountNativeElement"

export default function mountElement(virtualDOM, container) {
    if(isFunction(virtualDOM)){
        
    }
    // Component vs NativeElement
    mountNativeElement(virtualDOM, container)
}