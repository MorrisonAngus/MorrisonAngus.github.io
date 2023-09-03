const path = require('path');

module.exports = {
  entry: './index.html',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // Specify the target as 'module'
    environment: {
      module: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Add a rule to exclude HTML files
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // You can use 'html-loader' or another loader that can handle HTML files
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
