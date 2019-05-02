module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-css-variables')({
      preserve: 'computed'
    }),
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    }),
    require('postcss-url')({
      url: 'rebase',
      assetsPath: '../'
    })
  ]
};
