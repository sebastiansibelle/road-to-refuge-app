const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CSS_MAPS = global.ENV !== 'production';

const BASE = '../src/ui';

module.exports = {
  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss']
  },
  module: {
    loaders: [
      { // transpile es2015 / JS
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      }
    ]
  },
  postcss: () => [
    autoprefixer({ browsers: 'last 2 versions' })
  ],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, BASE),
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'exports?global.Promise!es6-promise',
      fetch: 'exports?self.fetch!whatwg-fetch',
    }),
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
      disable: process.env.NODE_ENV !== 'production',
    }),
  ],
};
