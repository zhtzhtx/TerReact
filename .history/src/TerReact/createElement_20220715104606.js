export default function createElement(type, props, ...children) {

    [].concat(...children).map(child=>{
        if(child instanceof Object){
            return 
        }
    })

    return {
        type,
        props,
        children
    }
}