export default function isFunctionComponent (virtualDOM){
    const type = virtualDOM.type
    return type && isFunction(virtualDOM) && (type.prototype && type)
}