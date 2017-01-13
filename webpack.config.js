const webpack = require('webpack');
const path = require('path').posix;

const root = process.env.PWD;
const app = path.join(root, 'app');


module.exports = {

    entry: {
      "index": path.join(app, 'index.js')
    },

    output: {
      path: path.join(root, 'public'),
      filename: "[name].js",
      library: "[name]"
    },

    watch: true,

    watchOptions: {
      aggregateTimeout: 100
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js'],
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {
      loaders: [
        {
          test: /\.js/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query: {
            presets: [
              'es2015',
              'stage-1',
              'react'
            ]
          }
        }
      ]
    },

    devServer: {
		    port: 8080,
	      contentBase: __dirname + '/public',
        hot: true
    },

    debug: true
};
