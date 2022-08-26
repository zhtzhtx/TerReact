export default function createElement(type, props, ...children) {

    [].concat(...children)

    return {
        type,
        props,
        children
    }
}