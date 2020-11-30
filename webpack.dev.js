const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8000,
    publicPath: 'http://localhost:8000/dist/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Scott King Photography',
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
});
