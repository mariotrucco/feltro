const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const i18n_de = require('./src/i18n/de.json');
const i18n_en = require('./src/i18n/en.json');
const i18n_it = require('./src/i18n/it.json');

module.exports = {
  entry: ['./src/index.js','./src/scss/main.scss'],
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        lang: 'de',
        locale: 'de_DE',
        i18n: i18n_de
      }),
      new HtmlWebpackPlugin({
        filename: 'index_en.html',
        template: 'index.html',
        lang: 'en',
        locale: 'en_US',
        i18n: i18n_en
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
      new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader',
          'sass-loader',
        ]
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
  }
};

/*
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

*/