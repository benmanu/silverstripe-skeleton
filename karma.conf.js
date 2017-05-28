const webpackConf = require('./node_modules/laravel-mix/setup/webpack.config.js');

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    files: [
      'themes/default/dist/manifest.js',
      'themes/default/dist/vendor.js',
      'themes/**/*/*.spec.js',
    ],
    preprocessors: {
      'themes/**/*/*.spec.js': ['webpack'],
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true,
    },
    singleRun: true,
  });
};
