const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prod = process.argv.indexOf('-p') !== -1;

const postcssImport = require('postcss-import');
const precss = require('precss');
const cssnext = require('postcss-cssnext');

const config = {
  entry: './src/index.js',
  output: {
    path: 'build',
    filename: 'bundle.[hash].js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // Required for generator and async/await functionality
        loader: 'babel',
        query: prod? {}:{
          plugins: [
            ["react-transform", {
              "transforms": [{
                "transform": "react-transform-hmr",
                "imports": ["react"],
                "locals": ["module"]
              }]
            }]
          ]
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: [
          'style',
          'css'
        ]
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        loaders: [
          'style?sourceMap&singleton',
          'css?modules&importLoaders=1&camelCase&localIdentName='+(!prod?'[local]___':'')+'[hash:base64:6]',
          'postcss'
        ]
      },
      {
        test: /\.cson/,
        loader: 'cson'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: prod? '"production"':'"development"'
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.pug'
    })
  ],
  postcss(runtime) {
    return [
      postcssImport({
        addDependencyTo: runtime,
        path: [
          'src'
        ]
      }),
      precss({import: {disable: true}}),
      cssnext()
    ];
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ]
  }
};

if (prod) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true
    }
  }));
}

module.exports = config;
