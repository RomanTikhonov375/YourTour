const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
    plugins: [{
      'postcss-preset-env': {
        browsers: 'last 2 versions',
      },
    },
    autoprefixer,
    cssnano({ preset: 'default' }),
  ]
  };