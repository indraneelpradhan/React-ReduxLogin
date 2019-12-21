const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  // webpack will take the files from ./src/index
  entry: path.resolve(__dirname, 'src') + '/index.js',

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.jsx', '.js']
  },

  module: {
    rules: [

      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 3020,
    contentBase: './',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    })
  ]
};