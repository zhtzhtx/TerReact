const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  // 入口文件
  entry: "./src/index.js",
  // 开发环境
  mode: "development",
  // 输出配置
  output: {
    // 输出路径
    path: path.resolve("dist"),
    // 输出文件名
    filename: "bundle.js"
  },
  // source-map
  devtool: "inline-source-map",
  // 使用 babel 编译 js 文件
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    // 在构建之前将dist文件夹清理掉
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dist"]
    }),
    // 指定HTML模板, 插件会将构建好的js文件自动插入到HTML文件中
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    // 指定开发环境应用运行的根据目录
    static: "./dist",
    // 不启动压缩
    compress: false,
    host: "localhost",
    port: 5000
  }
}
