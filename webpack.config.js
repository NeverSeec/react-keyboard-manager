const path = require("path");

module.exports = ({ development }) => ({
  entry: "./src/index.ts",
  devtool: development ? "inline-source-map" : false,
  mode: development ? "development" : "production",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "react-keyboard-manager",
    libraryExport: "default",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "typeof self === 'undefined' ? this : self",
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.((ts|tsx))$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },
  externals: {
    react: "umd react",
    "react-dom": "umd react-dom",
  },
});
