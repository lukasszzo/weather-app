module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },watch: true,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ["*" ,".js", ".jsx"]
  },
  devServer: {
    contentBase: "./"
  }}
