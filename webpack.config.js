const optimization = require("./webpack/config.optimization");
const path = require("path");
const plugins = require("./webpack/config.plugins");

module.exports = {
  entry: "./src/index.jsx",
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    filename: "declarer-sinistre.main.[hash].js",
    chunkFilename: "declarer-sinistre.chunk.[name].[hash].js",
    path: path.join(__dirname, "build", "static"),
    publicPath: "/",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/",
    hotOnly: true,
  },
  optimization: optimization,
  plugins: plugins,
};
