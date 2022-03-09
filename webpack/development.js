const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成HTML 并插入指定js
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 避免缓存

module.exports = {
  mode: 'development',
  entry: {
    'happy-core-view': path.resolve(__dirname, '../src/js/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'happy-core-view.js'
  },
  devServer: {
    compress: true,
    port: 8080,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',//生成的文件名
      path: path.resolve(__dirname, "dist"),
      chunks: ['happy-core-view'],
      template: path.resolve(__dirname, '../src/page/index.html'),//指定打包压缩的文件
      minify:{
          removeComments:true,//清除注释
          collapseWhitespace:true//清理空格
      }
    }),
    
    new CleanWebpackPlugin()
  ]
};