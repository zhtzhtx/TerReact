export default function updateTextNode(virtualDOM, oldVirtualDOM, oldDOM) {
    if(virtualDOM.props.textContent !== oldVirtualDOM.props.textContent){
        oldDOM.textContent
    }
}