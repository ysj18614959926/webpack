const path = require('path')
module.exports = {
  entry: './src/index.js', //打包的入口
  mode: 'development', //development:开发模式，没有优化速度快--production:生成模式，有优化，速度慢，默认生成模式
  output: {
    path: path.join(__dirname, './dist'), //将打包的结果放到dist目录中
    filename: 'main.js' //自定义打包结果的文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|jpe?g|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ]
  }
}