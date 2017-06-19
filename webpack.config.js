const path = require('path');

const config = {
  entry: './main.ts',
  output: {
    path: path.reolve(__dirname, 'dist'),
  }
  module: {
    rules: [
      {test: /\.ts$/, use: 'ts-loader'}
    ],
  }
}

module.exports = config;
