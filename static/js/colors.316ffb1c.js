(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docs/colors.mdx":function(e,t,a){"use strict";a.r(t);var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=a("./node_modules/react/index.js"),r=a.n(o),c=a("./node_modules/@mdx-js/react/dist/index.es.js"),i=(a("./src/index.css"),a("./docs/css/colors-collection.css"),[100,200,300,400,500,600,700,800,900,1e3]),l=function(e,t){return e<t?"var(--color-moon-1000)":"var(--color-space-100)"},s=function(e){var t=e.family,a=e.tint,n=e.textColor;return r.a.createElement("div",{className:"color-palette__swatch",style:{backgroundColor:"var(--color-".concat(t,"-").concat(a,")"),color:n}},r.a.createElement("span",null,a))},d=function(e){var t=e.family,a=e.lightTextStart;return r.a.createElement("div",{className:"color-palette"},i.map(function(e){return r.a.createElement(s,{key:"".concat(t).concat(e),family:t,tint:e,textColor:l(e,a)})}))};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"docs/components/ColorsCollection.jsx"}});var b=function(e){var t=e.gradient,a=e.darkText,n=void 0!==a&&a;return r.a.createElement("div",{className:"gradient-collection__swatch",style:{backgroundImage:"var(--gradient-".concat(t,")"),color:n?"var(--color-moon-900)":"var(--color-space-100)"}},r.a.createElement("span",null,t))};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GradientSwatch",filename:"docs/components/ColorsCollection.jsx"}});var m=function(e){var t=e.children;return r.a.createElement("div",{className:"gradient-collection"},t)};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GradientCollection",filename:"docs/components/ColorsCollection.jsx"}}),a.d(t,"default",function(){return h});var u={},p="wrapper";function h(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(p,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"colors"},"colors"),Object(c.b)("h4",{id:"bringing-our-concepts-and-the-very-essence-of-our-design-to-life-our-color-palette-provides-hierarchy-affordance-emotion-and-feedback-to-the-platforms-experience-color-should-be-used-in-meaningful-and-concrete-ways-in-order-to-create-visual-and-usability-patterns"},"Bringing our concepts and the very essence of our design to life, our color palette provides hierarchy, affordance, emotion and feedback to the platform\u2019s experience. Color should be used in meaningful and concrete ways in order to create visual and usability patterns."),Object(c.b)("h2",{id:"tints"},"tints"),Object(c.b)("p",null,"Colors have their variations that may be used depending on the contextual need."),Object(c.b)("h3",{id:"usage"},"Usage"),Object(c.b)("p",null,"Instead of declaring a hexadecimal code like ",Object(c.b)("inlineCode",{parentName:"p"},"#fff"),", you may access all our colors via variables named in this pattern: ",Object(c.b)("inlineCode",{parentName:"p"},"var(--color-space-100)")," (which is white, if you look in the Space palette below). If you need the darkest shade of green, for example, use ",Object(c.b)("inlineCode",{parentName:"p"},"var(--color-earth-1000)")," and so forth."),Object(c.b)("p",null,"If you do that, you should also convert the variables in your build to hexadecimal code, since CSS variables have ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://caniuse.com/#feat=css-variables"}),"limited browser support"),". We recommend the plugin ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/MadLittleMods/postcss-css-variables"}),"PostCSS CSS Variables"),"."),Object(c.b)("br",null),Object(c.b)("h3",{id:"earth"},"earth"),Object(c.b)(d,{family:"earth",lightTextStart:500,mdxType:"ColorPalette"}),Object(c.b)("h3",{id:"venus"},"venus"),Object(c.b)(d,{family:"venus",lightTextStart:400,mdxType:"ColorPalette"}),Object(c.b)("h3",{id:"uranus"},"uranus"),Object(c.b)(d,{family:"uranus",lightTextStart:400,mdxType:"ColorPalette"}),Object(c.b)("h3",{id:"moon"},"moon"),Object(c.b)(d,{family:"moon",lightTextStart:400,mdxType:"ColorPalette"}),Object(c.b)("h3",{id:"mars"},"mars"),Object(c.b)(d,{family:"mars",lightTextStart:400,mdxType:"ColorPalette"}),Object(c.b)("h3",{id:"sun"},"sun"),Object(c.b)(d,{family:"sun",lightTextStart:600,mdxType:"ColorPalette"}),Object(c.b)("h3",{id:"space"},"space"),Object(c.b)(d,{family:"space",lightTextStart:500,mdxType:"ColorPalette"}),Object(c.b)("h2",{id:"gradients"},"gradients"),Object(c.b)("p",null,"Based on our brand guideline, they are normally used in main actions and macrostructures of the platform."),Object(c.b)("h3",{id:"usage-1"},"Usage"),Object(c.b)("p",null,"Instead of declaring a gradient code like ",Object(c.b)("inlineCode",{parentName:"p"},"linear-gradient(47.32deg, #d991e0 0%, #00c6d4 60.06%, #00ea60 100%)"),", you may access all our gradients via variables named in this pattern: ",Object(c.b)("inlineCode",{parentName:"p"},"var(--gradient-nebulosa)"),". If you need the Andromeda gradient, for example, use ",Object(c.b)("inlineCode",{parentName:"p"},"var(--gradient-andromeda)")," and so forth."),Object(c.b)("p",null,"If you do that, you should also convert the variables in your build to hexadecimal code, since CSS variables have ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://caniuse.com/#feat=css-variables"}),"limited browser support"),". We recommend the plugin ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/MadLittleMods/postcss-css-variables"}),"PostCSS CSS Variables"),"."),Object(c.b)(m,{mdxType:"GradientCollection"},Object(c.b)(b,{gradient:"nebulosa",mdxType:"GradientSwatch"}),Object(c.b)(b,{gradient:"andromeda",mdxType:"GradientSwatch"}),Object(c.b)(b,{gradient:"sombrero",mdxType:"GradientSwatch"}),Object(c.b)(b,{gradient:"milky-way",mdxType:"GradientSwatch"}),Object(c.b)(b,{gradient:"hoag",darkText:!0,mdxType:"GradientSwatch"}),Object(c.b)(b,{gradient:"centaurus",mdxType:"GradientSwatch"}),Object(c.b)(b,{gradient:"whirlpool",mdxType:"GradientSwatch"}),Object(c.b)(b,{gradient:"cartwheel",mdxType:"GradientSwatch"}),Object(c.b)(b,{gradient:"black-hole",mdxType:"GradientSwatch"}),Object(c.b)(b,{gradient:"mayall",mdxType:"GradientSwatch"})))}h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/colors.mdx"}}),h.isMDXComponent=!0},"./docs/css/colors-collection.css":function(e,t,a){}}]);
//# sourceMappingURL=colors.0d4b92500a5aa3d4872a.js.map