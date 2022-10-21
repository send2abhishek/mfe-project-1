const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8081/",
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing", // this will act as gloabal var
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

// this will merge the commonConfig to development config
// here devConfig will take priority over the commonconfig
module.exports = merge(commonConfig, devConfig);
