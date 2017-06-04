const autoprefixer = require('autoprefixer');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const globEntries = require('webpack-glob-entries');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CSS_MAPS = global.ENV !== 'production';
const PATHS = {
  src: path.join(__dirname, '/assets/'),
  build: path.join(__dirname,'/public/'),
};

const sassLoaders = [
  'css',
  'postcss',
  'resolve-url',
  'sass',
]

const config = {
  entry: ["./src/index.js"],
  output: {
    path: PATHS.build,
    // name will be the key of the entry property (eg.: signupForm)
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.jsx', '.json', '.js', '.scss', '.sass'],
    root: [path.join(__dirname, './assets')]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract('style?singleton', sassLoaders.join('!'))
        // loader: ExtractTextPlugin.extract('style?singleton', [
        //   `css?sourceMap=${CSS_MAPS}`,
        //   'postcss',
        //   'resolve-url',
        //   `sass?sourceMap=${CSS_MAPS}`,
        // ].join('!')),
      },
      {
        test: /\.(xml|html|txt|md)$/,
        loader: 'raw',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file?prefix=img/',
      },
    ]
  },
  postcss: () => [
    autoprefixer({ browsers: 'last 2 versions' }),
  ],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules'),
      path.join(PATHS.src, 'ui'),
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'exports?global.Promise!es6-promise',
      fetch: 'exports?self.fetch!whatwg-fetch',
    }),
    new ExtractTextPlugin('[name].css', {
      allChunks: true,
    }),
  ],
}

module.exports = config
