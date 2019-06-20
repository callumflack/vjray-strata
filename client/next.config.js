if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const webpack = require('webpack');

module.exports = {
  target: 'serverless',
  webpack: (cfg) => {
    cfg.plugins.push(
      new webpack.DefinePlugin({
        'process.env.SERVER_URI': JSON.stringify(process.env.SERVER_URI),
      })
    );

    return cfg;
  },
};

// https://zeit.co/docs/v2/deployments/official-builders/next-js-now-next/
// module.exports = {
//   target: 'serverless'
// }