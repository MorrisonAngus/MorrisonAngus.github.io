const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './dist/thisDayInHistory.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // or 'html-loader' if you prefer
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
    },
  },
  // Set the target environment to 'web'
  target: 'web',
  plugins: [
    new Dotenv(),
  ],
};
