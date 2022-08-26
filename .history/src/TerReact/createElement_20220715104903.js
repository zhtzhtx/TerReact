export default function createElement(type, props, ...children) {

    const childElements = [].concat(...children).map(child => {
        if (child instanceof Object) {
            return child
        } else {
            return createElement("text", { textContent: child })
        }
    })

    return {
        type,
        props,
        children
    }
}