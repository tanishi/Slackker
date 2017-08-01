const path = require('path');
const FlowtypePlugin = require('flowtype-loader/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  target: 'electron',
  entry: './app/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
    },
    {
      test: /\.jsx?$/,
      loader: 'flowtype-loader',
      exclude: '/node_modules/',
    },
    {
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: '/node_modules/',
    }],
  },
  plugins: [
    new FlowtypePlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: './app/src/static/index.html',
    }),
  ],
};

module.exports = config;
