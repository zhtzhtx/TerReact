import diff from "./diff"

export default function updateComponent(virtualDOM, oldComponent, oldDOM, container) {
    oldComponent.componentWillReceiveProps(virtualDOM.props)
    // 判断组件是否应该更新
    if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
        // 未更前前的props
        let prevProps = oldComponent.props
        oldComponent.componentWillUpdate(virtualDOM.props)
        // 组件更新
        oldComponent.updateProps(virtualDOM.props)
        let nextVirtualDOM = oldComponent.render()
        nextVirtualDOM.component = oldComponent
        diff(nextVirtualDOM, container, oldDOM)
        oldComponent.componentDidUpdate(prevProps)
    }
}