import { css } from 'docz-plugin-css';

export default {
  hashRouter: true,
  base: '/',
  plugins: [
    css({
      preprocessor: 'postcss'
    })
  ],
  modifyBabelRc: babelrc => ({
    ...babelrc,
    plugins: [...babelrc.plugins, 'babel-plugin-inline-import']
  }),
  indexHtml: 'public/docz.html',
  themeConfig: {
    styles: {
      body: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 16,
        lineHeight: 1.5
      },
      h1: {
        fontFamily: "'Poppins', sans-serif"
      },
      playground: {
        padding: 16,
        '& > *': {
          boxSizing: 'border-box',
          margin: 12
        },
        '& > .a-slider': {
          marginBottom: 22
        }
      }
    }
  }
};
