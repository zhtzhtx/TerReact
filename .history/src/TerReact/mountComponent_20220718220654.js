import isFunctionComponent from "./isFunctionComponent";
import isFunction from "./isFunction";
import mountNativeElement from "./mountNativeElement";


function buildFunctionComponent(virtualDOM) {
    const nextVirtualDOM = virtualDOM.type(virtualDOM.props || {})
    return nextVirtualDOM
}

function buildClassComponent(virtualDOM) {
    const component = new virtualDOM.type(virtualDOM.props || {})
    const nextVirtualDOM = component.render()
    // 获取组件的实例对象
    nextVirtualDOM.component = component
    return nextVirtualDOM
}

export default function mountComponent(virtualDOM, container, oldDOM) {
    let nextVirtualDOM = null
    let component = null
    // 判断组件是类组件还是函数组件
    if (isFunctionComponent(virtualDOM)) {
        // 如果是函数组件
        // 获取组件的虚拟DOM
        nextVirtualDOM = buildFunctionComponent(virtualDOM)
    } else {
        // 如果是类组件
        nextVirtualDOM = buildClassComponent(virtualDOM)
        component = nextVirtualDOM.component
    }
    // 判断类组件有没有ref属性
    if(component){
        if(component && component.props.ref){
            component.props.ref(component)
        }
    }
    // 可能存在组件嵌套的情况，需要判断是否为子组件
    if (isFunction(nextVirtualDOM)) {
        // 如果是子组件
        mountComponent(nextVirtualDOM, container, oldDOM)
    } else {
        // 如果是DOM
        mountNativeElement(nextVirtualDOM, container, oldDOM)
    }
}

