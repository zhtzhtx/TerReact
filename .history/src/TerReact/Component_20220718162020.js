export default class Component {
    constructor(props) {
        this.props = props
    }
    setState(state) {
        this.state = Object.assign({}, this.state, state)
        // 获取
        this.render()
    }
}