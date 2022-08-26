import diff from "./diff"

export default function render(virtualDOM, container, oldDOM) {
    console.log(container)
    diff(virtualDOM, container, oldDOM)
}