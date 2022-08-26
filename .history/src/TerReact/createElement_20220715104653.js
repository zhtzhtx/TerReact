export default function createElement(type, props, ...children) {

    [].concat(...children).map(child=>{
        if(child instanceof Object){
            return child
        }else{
            createElement("text",{textContent:})
        }
    })

    return {
        type,
        props,
        children
    }
}