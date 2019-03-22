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
  htmlContext: {
    favicon: 'public/favicon.png',
  },
  themeConfig: {
    styles: {
      body: {
        '& .css-pw2o4y': { /* Selects page wrapper div for gradient header */
          backgroundImage: 'var(--gradient-nebulosa)',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 312px'
        },
        '@media (min-width: 420px)': { 
          '& .css-1i0fr1k': { /* Selects main content div */  
            padding: '0 40px 40px 100px'
          }
        },
        '& .css-c9p757': {
          height: 171,
          width: 151,
          margin: '46px 60px',
          backgroundImage: 'url("public/astro-logo.svg")',
          backgroundSize: 200,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          textIndent: -999
        },
        '& p': { /* Selects stubborn <p> elements */
          font: 'var(--font-secondary)', /* In this file, the font shorthand with variable only works if you use the whole and don't need to alter any other font properties */
          color: 'var(--color-moon-900)!important'
        },
        a: {
          color: 'var(--color-uranus-700)'
        },
        '& .css-p4m8gg': { /* Selects "Edit Page" button */
          display: 'none'
        },
        'a[aria-label="View source on Github"]': { /* Selects GitHub top-right button */
          display: 'none'
        },
        '& .css-b4nn6f': { /* Selects "Built with Docz" link on menu bottom */
          display: 'none'
        },
        '& .css-1pxi6pq': { /* Hides menu search area */
          display: 'none'
        },
        '& .css-y1r3ra:before': { /* Selects top blue border on menu */
          display: 'none'
        },
        '& .css-wwgiek': { /* Selects menu area */
          background: 'var(--color-space-100)',
          borderRight: '1px solid var(--color-space-300)',
          width: 320,
          '& .css-pccrlp': { /* Selects inner menu area */
            width: 320
          }
        },
        '& .css-82rrzo, .css-82rrzo.active, .css-82rrzo:visited': { /* Selects each menu item */
          fontFamily: "'Poppins', sans-serif",
          fontSize: 20,
          fontWeight: 500,
          color: 'var(--color-moon-900)',
          borderTop: '1px solid var(--color-space-300)',
          padding: '22px 50px',
          '&:hover': {
            color: 'var(--color-moon-300)',
            fontWeight: 500
          },
          '&:after': {
            position: 'absolute',
            right: 32,
            width: 32,
            height: 32,
            content: '""',
            maskImage: 'url("public/drop-down.svg")',
            backgroundColor: 'var(--color-moon-900)'
          },
          '&.active:after': {
            maskImage: 'url("public/drop-up.svg")',
            backgroundColor: 'var(--color-moon-900)'
          }
        },
        '& .css-1ccg7te:after': { /* Removes dashed left border on menu items */
          display: 'none'
        },
        '& .css-1qc5yjq': { /* Selects menu sub-item group area */
          margin: '5px 0 15px'
        },
        '& .css-1l1jc95, .css-1l1jc95:visited': { /* Selects each menu sub-item */
          fontFamily: "'Poppins', sans-serif",
          fontSize: 16,
          fontWeight: 500,
          color: 'var(--color-moon-400)',
          padding: '6px 50px',
          opacity: 1,
          '&:hover': {
            color: 'var(--color-moon-300)'
          },
          '&.active': {
            color: 'var(--color-moon-900)'
          },
          '&:before': {
            display: 'none'
          }
        },
        '& .css-1evit71:after': { /* Removes dashed left border on menu sub-items */
          display: 'none'
        }
      },
      h1: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 64,
        fontWeight: 600,
        color: 'var(--color-space-100)',
        margin: '103px 0 186px',
        ':before': { /* Removes bottom blue line */
          display: 'none' 
        }
      },
      h2: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 24,
        fontWeight: 600,
        color: 'var(--color-moon-500)',
        borderBottom: 'none',
        margin: '0 0 15px',
        '& a[href]': { /* Selects download links in Typography page */
          color: 'var(--color-uranus-700)',
          textDecoration: 'underline',
          '&:hover': {
            color: 'var(--color-uranus-500)'
          },
          '&:active': {
            color: 'var(--color-uranus-800)'
          }
        },
        '&#manifesto, &#get-started': { /* Selects specific Homepage h2 headings */
          fontSize: 40,
          color: 'var(--color-moon-900)',
          marginTop: 64
        },
      },
      h4: {
        fontFamily: "'Lato', sans-serif",
        fontSize: 22,
        fontWeight: 400,
        color: 'var(--color-moon-400)',
        marginBottom: 65
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
