const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')

const _project = 'NgzkBlogArchive'
const _src = 'src'
const _test = 'tests'
const _dist = 'dist'
const _stylesheets = 'stylesheets'
const _static = 'static'
const _publicPath = getPublicPath()

function isProduction () { return process.env.NODE_ENV === 'production' }
function getPublicPath () { return isProduction() ? `/${_project}/` : '/' }

module.exports = {
  entry: {
    app: `./${_src}/main.js`,
    vendor: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync', 'font-awesome/scss/font-awesome'],

  },
  output: {
    path: path.resolve(__dirname, `./${_dist}`),
    filename: isProduction() ? 'js/[name].[hash].js' : 'js/[name].js',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, _src),
      path.join(__dirname, 'node_modules'),
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': path.resolve(__dirname, './src'),
      'tests': path.resolve(__dirname, './tests'),
    },
    extensions: ['.js', '.sass', '.scss', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [
          path.resolve(__dirname, _src),
          path.resolve(__dirname, _test),
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: 'webpack-espower-loader',
        include: [
          path.resolve(__dirname, _test),
        ],
      },
      {
        test: /\.json$/,
        use: ['json-loader'],
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: extractTextPlugin.extract('css-loader?minimize!sass-loader?minimize'),
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          name: isProduction() ? `${_static}/[name].[hash].[ext]` : `${_static}/[name].[ext]`,
          publicPath: _publicPath,
        },
      },
      {
        test: /\.(svg|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: isProduction() ? `${_static}/[name].[hash].[ext]` : `${_static}/[name].[ext]`,
          publicPath: _publicPath,
        },
      },
      {
        test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: isProduction() ? `${_static}/[name].[hash].[ext]` : `${_static}/[name].[ext]`,
          publicPath: _publicPath,
        },
      },
    ],
  },
  plugins: [
    new extractTextPlugin({
      filename: isProduction() ? `${_stylesheets}/[name].[contenthash].css` : `${_stylesheets}/[name].css`,
    }),
    new webpack.ProvidePlugin({
      Vue: ['vue', 'default'],
      _: 'lodash',
    }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: `${_src}/${_static}/favicon.ico`,
      inject: true,
    }),
    new copyPlugin([
      './src/static/favicon.png',
      './src/static/apple-touch-icon.png',
      './manifest.json',
      {
        from: './src/static/icons/*.png',
        to: 'static',
        transformPath(targetPath) {
          return targetPath.replace('src/static/', '');
        },
      },
    ]),
    new workboxPlugin.GenerateSW({
      globDirectory: _dist,
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: new RegExp('https://ngzk-blog-archieve-resources.netlify.com/'),
        handler: 'CacheFirst',
        options: {
          cacheName: 'api-cache',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24 * 7 * 2,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      }]
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, _dist),
    historyApiFallback: true,
    noInfo: true,
  },
  devtool: '#source-map',
}

if (isProduction()) {
  module.exports.devtool = '#eval'
  // https://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ])
}
