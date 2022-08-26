import diff from "./diff"

export default function render(virtualDOM, container, oldDOM = container.first) {
    diff(virtualDOM, container, oldDOM)
}