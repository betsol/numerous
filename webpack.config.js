
const path = require('path');

const isDev = (process.env.NODE_ENV === 'development');

module.exports = {
  entry: path.resolve(`${__dirname}/src/index.js`),
  mode: (isDev ? 'development' : 'production'),
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
