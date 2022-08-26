import isFunctionComponent from "./isFunctionComponent";
import isFunction from "./isFunction";
import mountNativeElement from "./mountNativeElement";


function buildFunctionComponent(virtualDOM){
    return virtualDOM.type()
}

export default function mountComponent(virtualDOM,container){
    // 判断组件是类组件还是函数组件
    if(isFunctionComponent(virtualDOM)){
        // 如果是函数组件
        // 获取组件的虚拟DOM
        nextVirtualDOM = buildFunctionComponent(virtualDOM)
    }
    if(isFunction(nextVirtualDOM)){
        mountComponent(nextVirtualDOM,container)
    }else{
        mountNativeElement()
    }
}

