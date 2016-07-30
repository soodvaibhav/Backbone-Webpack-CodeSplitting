var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
