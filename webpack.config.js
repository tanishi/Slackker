const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  target: 'electron',
  entry: './app/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: './app/src/static/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

module.exports = config;
