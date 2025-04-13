const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
  },
  plugins: [
    new baseConfig.plugins[0].constructor({
      ...baseConfig.plugins[0].options,
      remotes: {
        products: "products@http://localhost:3001/remoteEntry.js",
        cart: "cart@http://localhost:3002/remoteEntry.js",
      },
    }),
  ],
});
