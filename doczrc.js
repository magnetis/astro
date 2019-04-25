import { css } from 'docz-plugin-css';

const selectors = {
  wrapper: '& .css-pw2o4y',
  main: '& .css-1i0fr1k',
  logo: '& .css-c9p757',
  menuArea: '& .css-wwgiek',
  innerMenuArea: '& .css-pccrlp',
  menuItem: '& .css-82rrzo, .css-82rrzo.active, .css-82rrzo:visited',
  menuSubitemsArea: '& .css-1qc5yjq',
  menuSubItem: '& .css-1l1jc95, .css-1l1jc95:visited',
  menuBtn: '& .css-6pue65, .css-15exo54',
  menuBtnShape: '& .css-14xo6fr, .css-1v3qlja',
  mobileLogoArea: '& .css-12xm67f',
  mobileMenu: '& .css-k33w14',

  /* Docz default elements (hidden) */

  editPageBtn: '& .css-p4m8gg',
  githubBtn: 'a[aria-label="View source on Github"]',
  builtDocz: '& .css-b4nn6f',
  search: '& .css-1pxi6pq',
  menuBlueTop: '& .css-y1r3ra:before',
  menuItemsBorder: '& .css-1ccg7te:after',
  menuSubitemsBorder: '& .css-1evit71:after'
};

export default {
  hashRouter: true,
  base: '/',
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
  themeConfig: {
    /* In this file, the font shorthand with variable only works if you'll use it whole don't need to alter any other font properties */
    styles: {
      body: {
        /* Hide Docz default elements */

        [selectors.editPageBtn]: {
          display: 'none'
        },
        [selectors.githubBtn]: {
          display: 'none'
        },
        [selectors.builtDocz]: {
          display: 'none'
        },
        [selectors.search]: {
          display: 'none'
        },
        [selectors.menuBlueTop]: {
          display: 'none'
        },
        [selectors.menuItemsBorder]: {
          display: 'none'
        },
        [selectors.menuSubitemsBorder]: {
          display: 'none'
        },

        /* Custom theme styles */

        [selectors.wrapper]: {
          /* Gradient header */
          backgroundImage: 'var(--gradient-nebulosa)',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 312px'
        },
        '@media (min-width: 920px)': {
          [selectors.main]: {
            width: '90%'
          }
        },
        '@media (min-width: 768px)': {
          [selectors.main]: {
            padding: '0 40px 40px 90px'
          }
        },
        [selectors.logo]: {
          height: 171,
          width: 151,
          margin: '46px 60px',
          backgroundImage: 'url("public/astro-logo.svg")',
          backgroundSize: 164,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          textIndent: -999
        },
        '& p': {
          font: 'var(--font-secondary)',
          color: 'var(--color-moon-900)!important'
        },
        a: {
          color: 'var(--color-uranus-700)'
        },
        [selectors.menuArea]: {
          backgroundColor: 'var(--color-space-100)',
          borderRight: '1px solid var(--color-space-300)',
          width: 320,
          [selectors.innerMenuArea]: {
            width: 320
          }
        },
        [selectors.menuItem]: {
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
        '@media (max-width: 1119px)': {
          [selectors.menuItem]: {
            padding: '22px 39px'
          }
        },
        [selectors.menuSubitemsArea]: {
          margin: '5px 0 15px'
        },
        [selectors.menuSubItem]: {
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
        [selectors.menuBtn]: {
          backgroundColor: 'transparent',
          '&:before': {
            display: 'none'
          }
        },
        [selectors.menuBtnShape]: {
          height: 0,
          border: '1px solid var(--color-space-100)',
          borderRadius: 3,
          backgroundColor: 'var(--color-space-100)'
        },
        [selectors.mobileLogoArea]: {
          padding: 0,
          '&:before': {
            display: 'none'
          }
        },
        [selectors.mobileMenu]: {
          backgroundColor: 'var(--color-space-100)'
        },
        '@media (max-width: 560px)': {
          '& h1.css-bdhje3': {
            /* Specificity hack for responsive h1 */
            fontSize: 48
          }
        }
      },
      h1: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 64,
        fontWeight: 600,
        letterSpacing: 'normal',
        color: 'var(--color-space-100)',
        margin: '103px 0 186px',
        ':before': {
          /* Removes bottom blue line */
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
        '& a[href]': {
          /* Selects download links in Typography page */
          color: 'var(--color-uranus-700)',
          textDecoration: 'underline',
          '&:hover': {
            color: 'var(--color-uranus-500)'
          },
          '&:active': {
            color: 'var(--color-uranus-800)'
          }
        },
        '&#manifesto, &#get-started': {
          /* Selects specific Homepage h2 headings */
          fontSize: 40,
          color: 'var(--color-moon-900)',
          marginTop: 64
        }
      },
      h3: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--color-moon-500)'
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
        overflowX: 'scroll',
        '& > *': {
          boxSizing: 'border-box',
          margin: 12
        },
        '& > .a-slider': {
          marginBottom: 22
        },
        '&.two-columns': {
          display: 'inline-grid',
          gridTemplateColumns: 'auto auto'
        },
        '&.gradient-bg': {
          backgroundImage: 'var(--gradient-andromeda)'
        }
      }
    }
  }
};
