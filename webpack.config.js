const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

const i18n_de = require('./src/i18n/de.json');
const i18n_it = require('./src/i18n/it.json');

module.exports = {
  entry: ['./src/index.js','./src/scss/main.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
            test: /\.(scss|css)$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
            })
          },
          {
              test: /\.(png|jpg|gif|svg)$/,
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                                   name(file){                                    
                                       return '[path][name].[ext]';
                                   }
                               }  
                  }
              ]
           }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        lang: 'de',
        locale: 'de_DE',
        i18n: i18n_de
      }),
      new HtmlWebpackPlugin({
        filename: 'index_it.html',
        template: 'index.html',
        lang: 'it',
        locale: 'it_IT',
        i18n: i18n_it
      }),
      new webpack.ProvidePlugin({
        Popper: ['popper.js', 'default'],
      }),
      extractSass
  ]
};
