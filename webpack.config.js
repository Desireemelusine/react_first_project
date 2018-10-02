// module bumpler: take all those modules and combine into one single file
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//export the object that describes our webpack configuration settings
module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      //  /\ any js file/module  , go ahead babel and transform
      { test: /\.(js)$/, use: 'babel-loader' },
      //  /\ any css file/module  , go ahead babel, transform, run and insert inside the page
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      /*here comes the moment that we need to create a index.html, create
      the div id = "app" , so we can make the link and it can justify the index.js/document.getElementbyId('app')
      */
      template: 'app/index.html'
    })
  ]
};
