let webpack = require('webpack');
let buildConfig = require('./webpack.config.js');


let build = (config) => {
  return new Promise((resolve, reject) => {
    webpack(config).run((err, stats) => {
      if(err) {
        return reject(err);
      }

      console.log(stats.toString(config.stats));
      return resolve();

    })
  })
}

let prodEnv = process.env && process.env.NODE_ENV !== 'development';

if(prodEnv) {
  build(buildConfig({ production: prodEnv }));
}
else {
  build(buildConfig(), false)
}
