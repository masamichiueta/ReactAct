var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.join(__dirname, 'src/js/app.js'),
    vendor: path.join(__dirname, 'src/js/vendor.js')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract( 'style', 'css?sourceMap!postcss' )
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract( 'style', "css?sourceMap!postcss!sass?sourceMap" )
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000&name=fonts/[name].[ext]"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, compress: { warnings: false }}),
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        'Tether': 'tether',
        'window.Tether': 'tether'
    }),
    new ExtractTextPlugin('[name].css'),
  ]
};
