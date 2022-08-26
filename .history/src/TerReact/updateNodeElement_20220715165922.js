export default function updateNodeElement(newElement, virtualDOM){
    const newProps = virtualDOM.props
    Object.keys(newProps).forEach(propName=>{
        // 获取属性值
        const newPropsValue = newProps[propName]
        // 判断属性是否为事件属性 onClick
        if(propName.slice(0,2))

    })
}