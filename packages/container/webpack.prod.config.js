const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    publicPath: "http://rizzphones.com:8090/",
  },
  plugins: [
    new baseConfig.plugins[0].constructor({
      ...baseConfig.plugins[0].options,
      remotes: {
        products: "products@http://rizzphones.com:8091/products/remoteEntry.js",
        cart: "cart@http://rizzphones.com:8091/cart/remoteEntry.js",
      },
    }),
  ],
});
