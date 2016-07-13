const path = require('path')
const webpack = require('webpack')
const extractTextPlugin = require('extract-text-webpack-plugin')

const _project = 'NgzkBlogArchive'
const _src = 'src'
const _dist = 'dist'
const _stylesheets = 'stylesheets'
const _static = 'static'

module.exports = {
  entry: {
    app: `./${_src}/main.js`,
    vendor: ['vue', 'vue-resource', 'vue-router', 'bulma', 'font-awesome/scss/font-awesome']
  },
  output: {
    path: path.resolve(__dirname, `./${_dist}`),
    publicPath: `/${_dist}/`,
    filename: 'js/[name].js'
  },
  resolveLoader: {
    root: [path.join(__dirname, 'node_modules')]
  },
  resolve: {
    root: path.join(__dirname, `${_src}`),
    extensions: ['', '.js' , '.scss' , '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jade$/,
        loader: 'jade'
      },
      {
        test: /\.(sass|scss)$/,
        loader: extractTextPlugin.extract('css!sass')
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: `file?name=${_static}/[name].[ext]`
      },
      {
        test: /\.(svg|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: `file?name=${_static}/[name].[ext]`
      },
      {
        test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: `file?name=${_static}/[name].[ext]`
      }
    ]
  },
  plugins: [
      new extractTextPlugin(`${_stylesheets}/[name].css`),
      new webpack.ProvidePlugin({
        Vue: 'vue',
        VueResource: 'vue-resource',
        VueRouter: 'vue-router'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#eval'
  module.exports.output.publicPath = `/${_project}/${_dist}/`
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}