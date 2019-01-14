import { css } from 'docz-plugin-css';

const astro = {
  colors: {
    uranus600: '#147ec1',
    uranus700: '#1663a0'
  }
};

export default {
  hashRouter: true,
  base: '/astro', // TODO: Remove this if we move to a root domain like `astro.magnetis.com.br`.
  plugins: [
    css({
      preprocessor: 'postcss'
    })
  ],
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
        // Simulating hover and active state without showing code on the playground
        '&.button-states': {
          'button:nth-child(2)': {
            backgroundColor: astro.colors.uranus600,
            borderColor: astro.colors.uranus600
          },
          'button:nth-child(3)': {
            backgroundColor: astro.colors.uranus700,
            borderColor: astro.colors.uranus700
          }
        }
      }
    }
  }
};
