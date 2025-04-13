const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    publicPath: "http://rizzphones.com",
  },
  plugins: [
    new baseConfig.plugins[0].constructor({
      ...baseConfig.plugins[0].options,
      remotes: {
        products: "products@http://rizzphones.com/products/remoteEntry.js",
        cart: "cart@http://rizzphones.com/cart/remoteEntry.js",
      },
    }),
  ],
});
