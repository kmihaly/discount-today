const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// https://www.toptal.com/react/webpack-react-tutorial-pt-1
module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true,
    }),
  ],
  devServer: {
    port: 3003,
    historyApiFallback: true,
    open: true,
  },
  //devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", "jsx", ".js"],
  },
};
