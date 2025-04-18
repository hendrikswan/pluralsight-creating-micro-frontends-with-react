const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true,
              },
              transform: {
                react: {
                  runtime: "automatic",
                },
              },
              target: "es2022",
            },
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    // always keep this plugin at index 0 - the environment overrides need the index
    new ModuleFederationPlugin({
      name: "container",
      filename: "remoteEntry.js",
      exposes: {},
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
