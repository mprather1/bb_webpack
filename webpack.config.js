const webpack = require("webpack");

var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: 'index.html',
  inject: 'body'
});

var path = {
  ENTRY: "./app/main.js",
  OUTPUT_FILENAME: "bundle.js",
  OUTPUT_PATH: __dirname + "/dist"
};

module.exports = {
  entry: [
    path.ENTRY
  ],
  resolve: {
    alias: {
      "marionette": "backbone.marionette"
    }
  },
  module: {
    loaders: [
      {test: /\.html/, include: __dirname + '/app', loader: "underscore-template-loader"}
    ]
  },
  output: {
    filename: path.OUTPUT_FILENAME,
    path: path.OUTPUT_PATH
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore'
    })  
  ]
};