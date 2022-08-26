import diff from "./diff"

export default function updateComponent(virtualDOM, oldComponent, oldDOM, container) {
    oldComponent.compon
    // 组件更新
    oldComponent.updateProps(virtualDOM.props)
    let nextVirtualDOM = oldComponent.render()
    nextVirtualDOM.component = oldComponent
    diff(nextVirtualDOM, container, oldDOM)
}