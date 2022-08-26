export default function render(virtualDOM, container, oldDOM) {
    diff(virtualDOM, container, oldDOM)
}