const webpack = require("webpack");
const path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'app', 'index.html'),
  filename: 'index.html',
  inject: 'body'
});

var paths = {
  ENTRY: path.join(__dirname, 'app', 'main.js'),
  OUTPUT_FILENAME: "bundle.js",
  OUTPUT: path.join(__dirname, "dist"),
  APP: path.join(__dirname, 'app')
};

module.exports = {
  entry: [
    paths.ENTRY
  ],
  resolve: {
    alias: {
      "marionette": "backbone.marionette"
    }
  },
  module: {
    loaders: [
      {test: /\.html/, include: paths.APP, loader: "underscore-template-loader"}
    ]
  },
  output: {
    filename: paths.OUTPUT_FILENAME,
    path: paths.OUTPUT
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore'
    })  
  ]
};