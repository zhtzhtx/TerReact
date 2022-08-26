import diff from "./diff"

// 每一个JSX组件都有一个父元素
export default function render(virtualDOM, container, oldDOM = container.firstChild) {
    diff(virtualDOM, container, oldDOM)
}