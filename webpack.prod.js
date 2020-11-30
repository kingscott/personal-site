const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: '[name].[contenthash].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: /\node_modules/,
        extractComments: true,
      }),
    ],
    removeEmptyChunks: true,
  },
});
