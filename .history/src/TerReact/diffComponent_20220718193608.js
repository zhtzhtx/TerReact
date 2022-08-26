// 判断是否是同一个组件
function isSameComponent(virtualDOM, oldComponent) {
    return oldComponent && virtualDOM.type === oldComponent
}

export default function diffComponent(virtualDOM, oldComponent, oldDOM, container) {
    console.log(virtualDOM, oldComponent)
}