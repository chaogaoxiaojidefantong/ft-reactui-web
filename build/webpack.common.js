 const path = require('path');
 const { CleanWebpackPlugin } = require("clean-webpack-plugin");
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const VueLoaderPlugin = require('vue-loader/lib/plugin')
 module.exports = {
  resolve: {
    // 将 `.ts` 添加为一个可解析的扩展名。
    extensions: ['.ts', '.js']
  },
   entry: {
     app: './src/index.js'
   },
   plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Production'
     })
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     publicPath:'/'
   },
   module: {
         rules: [
           {
             test: /\.css$/,
             use: ['style-loader', 'css-loader']
           },
           {
            test: /\.js$/,
            loader: 'babel-loader'
          },
           {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: { appendTsSuffixTo: [/\.vue$/] }
          }
         ]
       },
 };