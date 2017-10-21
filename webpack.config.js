const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

module.exports = {
  entry: ['./src/index.js','./src/scss/main.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
            })
          },
          {
              test: /\.(png|jpg|gif|css|html)$/,
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                                   name(file){
                                       if(file.indexOf('html')>=0){
                                           return '[name].[ext]';
                                       }                                      
                                       return '[path][name].[ext]';
                                   }
                               }  
                  }
              ]
           }
      ]
  },
  plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'Tether': 'tether',
        Popper: ['popper.js', 'default'],
      }),
      extractSass
  ]
};
