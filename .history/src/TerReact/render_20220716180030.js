import diff from "./diff"

export default function render(virtualDOM, container, oldDOM = container) {
    diff(virtualDOM, container, oldDOM)
}