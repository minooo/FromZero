const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
    print: "./src/print.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "../dist", // 告诉服务器从哪里获取内容
    compress: true, // 启用gzip压缩
    port: 9527,
    clientLogLevel: "none", // 当使用内联模式，在控制台显示消息，有时这会很繁琐
    watchContentBase: true, // 告诉服务器观察由 contentBase 提供的文件
    hot: true, // 启用模块热替换特性
    quiet: false,// 除了初始启动信息之外的任何内容都不会被打印到控制台
    historyApiFallback: {
      // Paths with dots should still use the history fallback.
      // See https://github.com/facebookincubator/create-react-app/issues/387.
      disableDotRule: true,
    },
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], { root: path.resolve(__dirname, "..") }),
    new HtmlWebpackPlugin({
      title: "my titile"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve("dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(gif|jpe?g|png|ico|eot|svg|ttf|woff)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 15000
            }
          }, {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  }
}
