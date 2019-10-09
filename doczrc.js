import { css } from 'docz-plugin-css';
import astroTheme from './docs/theme';

export default {
  base: '/',
  src: './docs',
  public: './public',
  plugins: [
    css({
      preprocessor: 'postcss' /* stylelint-disable-line */
    })
  ],
  modifyBabelRc: babelrc => ({
    ...babelrc,
    plugins: [...babelrc.plugins, 'babel-plugin-inline-import']
  }),
  indexHtml: 'public/docz.html',
  htmlContext: {
    favicon: 'public/favicon.png'
  },
  themeConfig: astroTheme,
  menu: [
    'home',
    'colors',
    'buttons',
    'controls & toggles',
    'iconography',
    'inputs',
    'typography'
  ],
  codeSandbox: false
};
