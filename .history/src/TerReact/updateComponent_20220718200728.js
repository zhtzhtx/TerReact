import diff from "./diff"

export default function updateComponent(virtualDOM, oldComponent, oldDOM, container) {
    // 组件更新
    oldComponent.updateProps(virtualDOM.props)
    let nextVirtualDOM = oldComponent.render()
    nextVirtualDOM.component = old
    diff(nextVirtualDOM, container, oldDOM)
}