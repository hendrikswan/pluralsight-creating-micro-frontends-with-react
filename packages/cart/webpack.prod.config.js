const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    publicPath: "http://rizzphones.com:8091/cart/",
  },
  plugins: [
    new baseConfig.plugins[0].constructor({
      ...baseConfig.plugins[0].options,
      remotes: {
        cart: "cart@http://rizzphones.com:8091/cart/remoteEntry.js",
      },
    }),
  ],
});
