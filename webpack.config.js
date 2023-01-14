const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  entry: './client/index.js',
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env",
               "@babel/preset-react"
              ]
            }
          }
        },
        {
            test: /\.css$/i,
            use: ["style-loader","css-loader", "sass-loader"]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        }
      ],
    },
    plugins: [
        new HTMLWebpackPlugin({
         template: './index.html',
         filename: './index.html',
        })
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },

  };