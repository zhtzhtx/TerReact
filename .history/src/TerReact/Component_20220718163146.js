export default class Component {
    constructor(props) {
        this.props = props
    }
    setState(state) {
        this.state = Object.assign({}, this.state, state)
        // 获取最新的要渲染的 virtualDOM 对象
        let virtualDOM = this.render()
        // 获取旧的 virtualDOM 对象，进行比对
        let 
    }
    setDOM(dom) {
        this._dom = dom
    }
    getDOM() {
        return this._dom
    }
}