import diff from "./diff"

// 每一个JSX组件都有一个父元素，所以旧DOM就是父元素的第一个子元素
export default function render(virtualDOM, container, oldDOM = container.firstChild) {
    diff(virtualDOM, container, oldDOM)
}