import TerReact from "./TerReact"

const root = document.getElementById("root")

const virtualDOM = (
  <div className="container">
    <h1>你好 Ter React</h1>
    <h2 data-test="test">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
)

const modifyDOM = (
  <div className="container">
    <h1>已经改变</h1>
    <h2 data-test="test123">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h6>(观察: 这个将会被改变)</h6>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <button onClick={() => alert("你好!!!!!")}>点击我</button>
    <input type="text" value="13" />
  </div>
)

// class Heart extends TerReact.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         {this.props.title}
//         &hearts;
//       </div>
//     )
//   }
// }

// class Demo extends TerReact.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>Hello</div>
//     )
//   }
// }

function Heart(props) {
  return (
    <div onClick={()=>console.log(this)}>
      {props.title}
      &hearts;
    </div>
  )
}

function Demo() {
  return <div>Hello</div>
}

TerReact.render(<Heart title="Hello React" />, root)
// setTimeout(() => {
//   TerReact.render(<Heart title="Hello" />, root)
// }, 2000)

// TerReact.render(virtualDOM, root)

// setTimeout(() => {
//   TerReact.render(modifyDOM, root)
// }, 2000)