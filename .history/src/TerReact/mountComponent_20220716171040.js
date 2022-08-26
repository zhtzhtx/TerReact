import isFunctionComponent from "./isFunctionComponent";
import isFunction from "./isFunction";
import mountNativeElement from "./mountNativeElement";


function buildFunctionComponent(virtualDOM) {
    return virtualDOM.type(virtualDOM.props || {})
}

function buildClassComponent(virtualDOM){
    const component = new virtualDOM.type()
}

export default function mountComponent(virtualDOM, container) {
    let nextVirtualDOM = null
    // 判断组件是类组件还是函数组件
    if (isFunctionComponent(virtualDOM)) {
        // 如果是函数组件
        // 获取组件的虚拟DOM
        nextVirtualDOM = buildFunctionComponent(virtualDOM)
    }else{
        // 如果是类组件
        nextVirtualDOM = buildClassComponent(virtualDOM)
    }
    // 可能存在组件嵌套的情况，需要判断是否为子组件
    if (isFunction(nextVirtualDOM)) {
        // 如果是子组件
        mountComponent(nextVirtualDOM, container)
    } else {
        // 如果是DOM
        mountNativeElement(nextVirtualDOM, container)
    }
}

