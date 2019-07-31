const playgroundSelector = '& .Playground__StyledPreviewWrapper-hucttz';
const selectors = {
  wrapper: '& .Page__Wrapper-fZfVLY',
  main: '& .Page__Container-eUbTcM',
  logo: '& .Logo__LogoText-cJLgZg',
  menuArea: '& .Sidebar__Wrapper-dMteFe',
  innerMenuArea: '& .Sidebar__Content-ijXItf',
  menuItem:
    '& .MenuLink__Wrapper-bIIltX > a, & .MenuLink__Wrapper-bIIltX > a.active, & .MenuLink__Wrapper-bIIltX > a:visited',
  menuSubitemsArea: '& .MenuHeadings__Submenu-gcrNS',
  menuSubItem: '& .SmallLink__Link-jgOnXv, & .SmallLink__Link-jgOnXv:visited',
  menuBtn: '& .Hamburger__ToggleButton-hPUXGI',
  menuBtnShape: '& .Hamburger__IconLine-bUJqMY',
  mobileLogoArea: '& .Logo__Wrapper-bzwKYh.kYsbLl',
  mobileMenu: '& .Sidebar__Wrapper-dMteFe',
  playgroundWrapper: playgroundSelector,
  playgroundChildrens: `${playgroundSelector} > div`,
  headerTitle: '& .H1-ecIwba',

  /* Docz default elements (hidden) */

  editPageBtn: '& .Page__EditPage-jqcgPa',
  githubBtn: 'a[aria-label="View source on Github"]',
  builtDocz: '& .Sidebar__Footer-eORsBO',
  search: '& .Search__Wrapper-jMtieA',
  menuBlueTop: '& .Logo__Wrapper-bzwKYh:before',
  menuItemsBorder: '& .MenuLink__Wrapper-bIIltX:after',
  menuSubitemsBorder: '& .MenuLink__Wrapper-bIIltX.gUhHxl:after',
  headingIcon: '& .heading--Icon',
};

export default {
  styles: {
    body: `
      overflow: auto;
      line-height: 1.5;

      ${selectors.editPageBtn} {
        display: none;
      }

      ${selectors.githubBtn} {
        display: none;
      }

      ${selectors.builtDocz} {
        display: none;
      }

      ${selectors.search} {
        display: none;
      }

      ${selectors.menuBlueTop} {
        display: none;
      }

      ${selectors.menuItemsBorder} {
        display: none;
      }

      ${selectors.menuSubitemsBorder} {
        display: none;
      }

      ${selectors.headingIcon} {
        display: none;
      }

      ${selectors.wrapper} {
        background-image: var(--gradient-nebulosa);
        background-position: top;
        background-repeat: no-repeat;
        background-size: 100% 312px;
      }

      @media (min-width: 920px) {
        ${selectors.main} {
          width: 90%;
        }
      }

      @media (min-width: 768px) {
        ${selectors.main} {
          padding: 0 40px 40px 90px;
        }
      }

      ${selectors.logo} {
        height: 171px;
        width: 151px;
        margin: 46px 60px;
        background-image: url("/public/astro-logo.svg");
        background-size: 164px;
        background-position: center;
        background-repeat: no-repeat;
        text-indent: -999px;
      }

      & p {
        font: var(--font-secondary);
        color: var(--color-moon-900) !important;
      }

      a {
        color: var(--color-uranus-700);
      }

      ${selectors.menuArea} {
        background-color: var(--color-space-100);
        border-right: 1px solid var(--color-space-300);
        width: 280px;

        ${selectors.innerMenuArea} {
          width: 280px;
        }
      }

      ${selectors.menuItem} {
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 500;
        color: var(--color-moon-900);
        border-top: 1px solid var(--color-space-300);
        padding: 22px 50px;

        &:hover {
          color: var(--color-moon-300);
          font-weight: 500;
        }

        &::after {
          position: absolute;
          right: 32px;
          width: 32px;
          height: 32px;
          content: '';
          mask-image: url('public/drop-down.svg');
          background-color: var(--color-moon-900);
        }

        &.active::after {
          mask-image: url('public/drop-up.svg');
          background-color: var(--color-moon-900);
        }
      }

      @media (max-width: 1119px) {
        ${selectors.menuItem} {
          padding: 22px 39px;
        }
      }

      ${selectors.menuSubitemsArea} {
        margin: 5px 0 15px;
      }

      ${selectors.menuSubItem} {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 500;
        color: var(--color-moon-400);
        padding: 6px 50px;
        opacity: 1;

        &:hover {
          color: var(--color-moon-300);
        }

        &.active {
          color: var(--color-moon-900);
        }

        &::before {
          display: none;
        }
      }

      ${selectors.menuBtn} {
        background-color: transparent;

        &::before {
          display: none;
        }
      }

      ${selectors.menuBtnShape} {
        height: 0;
        border: 1px solid var(--color-space-100);
        border-radius: 3px;
        background-color: var(--color-space-100);
      }

      ${selectors.mobileLogoArea} {
        padding: 0;

        &::before {
          display: none;
        }
      }

      ${selectors.mobileMenu} {
        background-color: var(--color-space-100);
      }

      @media (max-width: 560px) {
        ${selectors.headerTitle} {
          font-size: 48px;
        }
      }

      ${selectors.playgroundWrapper} {
        padding: 16px;
        overflow-x: scroll;
      }

      ${selectors.playgroundChildrens} {
        & > * {
          box-sizing: border-box;
          margin: 12px;
        }

        & > .a-slider {
          margin-bottom: 22px;
        }

        @media (min-width: 780px) {
          &.md\\:two-columns {
            display: grid;
            grid-template-columns: auto auto;
          }
        }

        &.gradient-bg {
          background-image: var(--gradient-andromeda);
        }
      }
    `,
    h1: `
      font-family: 'Poppins', sans-serif;
      font-size: 64px;
      font-weight: 600;
      letter-spacing: normal;
      color: var(--color-space-100);
      margin: 103px 0 186px;

      ::before {
        display: 'none';
      }
    `,
    h2: `
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      font-weight: 600;
      color: var(--color-moon-500);
      border-bottom: none;
      margin: 0 0 15px;

      & a[href] {
        color: var(--color-uranus-700);
        text-decoration: underline;

        :hover {
          color: var(--color-uranus-500);
        }

        :active {
          color: var(--color-uranus-800);
        }
      }

      &#manifesto, &#get-started {
        font-size: 40px;
        color: var(--color-moon-900);
        margin-top: 64px;
      }
    `,
    h3: `
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 600;
      color: var(--color-moon-500);
    `,
    h4: `
      font-family: 'Lato', sans-serif;
      font-size: 22px;
      font-weight: 400;
      color: var(--color-moon-400);
      margin-bottom: 65px;
    `
  }
};
