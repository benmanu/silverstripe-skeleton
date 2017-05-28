const mix = require('laravel-mix');

// vendor js files
mix.extract(['vue'], 'themes/default/dist/vendor.js');

// js
mix
  .js('themes/default/src/js/app.js', 'themes/default/dist/');

// css
mix
  .sass('themes/default/src/scss/app.scss', 'themes/default/dist/')
  .sass('themes/default/src/scss/editor.scss', 'themes/default/dist/');

mix.options({
  processCssUrls: false,
});

// dev environments
if (process.env.NODE_ENV === 'development') {
  // linting
  mix.webpackConfig({
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
      ],
    },
  });
}
