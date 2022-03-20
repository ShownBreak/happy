const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 删除打包缓存

module.exports = {
  mode: 'development',
  entry: {
    'happy-core-view': path.resolve(__dirname, '../src/core/index.ts')
  },
  devtool: "source-map",
  output: {
		library: "Happy",
		libraryTarget: "umd",
    libraryExport: 'Happy',
    path: path.resolve(__dirname, '../dist'),
    filename: 'happy.js'
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'tslint-loader',
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, '../tsconfig.json'),
              },
            },
          ],
          exclude: /node_modules/,
        },
    ],
},
  plugins: [
    new CleanWebpackPlugin()
  ]
};