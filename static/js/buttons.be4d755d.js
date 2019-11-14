(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/buttons.mdx":function(n,a,t){"use strict";t.r(a),t.d(a,"default",function(){return l});var e=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),b=(t("./src/index.css"),t("./node_modules/docz/dist/index.esm.js")),o=t("./docs/components/SketchLink.jsx"),c={},s="wrapper";function l(n){var a=n.components,t=Object(e.a)(n,["components"]);return Object(i.b)(s,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"buttons"},"buttons"),Object(i.b)("h4",{id:"buttons-define-what-action-will-occur-when-the-user-interacts-with-features-and-components-of-the-platform-buttons-are-used-to-initialize-and-dictate-the-actions-on-the-interface-either-in-the-background-or-foreground-of-an-experience"},"Buttons define what action will occur when the user interacts with features and components of the platform. Buttons are used to initialize and dictate the actions on the interface, either in the background or foreground of an experience."),Object(i.b)(o.a,{file:"Buttons",mdxType:"SketchLink"}),Object(i.b)("h2",{id:"primary-buttons"},"primary buttons"),Object(i.b)("p",null,"Primary buttons are medium sized and have a colored background. They aren't always the same color, though, so there isn't a default \"primary\" look or CSS class - primary here is more of a concept."),Object(i.b)("p",null,"Please note that color and size are built through CSS classes applied to the ",Object(i.b)("inlineCode",{parentName:"p"},"<button>")," element. You'll always need to specify color and size to get a complete button."),Object(i.b)("p",null,"Use these for the main action in a section or screen. You should display only one primary button at a time."),Object(i.b)("p",null,"Mouseover and click to view ",Object(i.b)("inlineCode",{parentName:"p"},":hover")," and ",Object(i.b)("inlineCode",{parentName:"p"},":active")," states."),Object(i.b)(b.c,{__position:1,__code:'<button className="a-btn a-btn--uranus a-btn--medium">uranus</button>\n<button className="a-btn a-btn--earth a-btn--medium">earth</button>\n<button className="a-btn a-btn--venus a-btn--medium">venus</button>\n<button className="a-btn a-btn--mars a-btn--medium">mars</button>\n<button className="a-btn a-btn--uranus a-btn--medium" disabled>\n  disabled\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--medium"},"uranus"),Object(i.b)("button",{className:"a-btn a-btn--earth a-btn--medium"},"earth"),Object(i.b)("button",{className:"a-btn a-btn--venus a-btn--medium"},"venus"),Object(i.b)("button",{className:"a-btn a-btn--mars a-btn--medium"},"mars"),Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--medium",disabled:!0},"disabled")),Object(i.b)("h2",{id:"outline-buttons"},"outline buttons"),Object(i.b)("p",null,"Outline buttons can be used as secondary roles. Secondary buttons present secondary actions when there's already a primary action in the same section or screen."),Object(i.b)("p",null,"Please note that there are color variations to the outline CSS classes. You also need to specify their size with one of the size CSS classes."),Object(i.b)("p",null,"Mouseover and click to view ",Object(i.b)("inlineCode",{parentName:"p"},":hover")," and ",Object(i.b)("inlineCode",{parentName:"p"},":active")," states."),Object(i.b)(b.c,{__position:2,__code:'<button className="a-btn a-btn--outline-uranus a-btn--medium">\n  outline uranus\n</button>\n<button className="a-btn a-btn--outline-earth a-btn--medium">\n  outline earth\n</button>\n<button className="a-btn a-btn--outline-venus a-btn--medium">\n  outline venus\n</button>\n<button className="a-btn a-btn--outline-mars a-btn--medium">\n  outline mars\n</button>\n<button className="a-btn a-btn--outline-venus a-btn--medium" disabled>\n  outline disabled\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--medium"},"outline uranus"),Object(i.b)("button",{className:"a-btn a-btn--outline-earth a-btn--medium"},"outline earth"),Object(i.b)("button",{className:"a-btn a-btn--outline-venus a-btn--medium"},"outline venus"),Object(i.b)("button",{className:"a-btn a-btn--outline-mars a-btn--medium"},"outline mars"),Object(i.b)("button",{className:"a-btn a-btn--outline-venus a-btn--medium",disabled:!0},"outline disabled")),Object(i.b)("h2",{id:"iconlabel-buttons"},"iconlabel buttons"),Object(i.b)("p",null,"Buttons with icons help identify the action or context within the interface."),Object(i.b)("p",null,"To create an iconlabel button, first create a regular primary button with all size and color modifier classes, plus the ",Object(i.b)("inlineCode",{parentName:"p"},"a-btn--iconlabel")," class. Then, if you want the icon to the left of the label, add a ",Object(i.b)("inlineCode",{parentName:"p"},"<i>")," tag inside the button and before its inner text."),Object(i.b)("p",null,"If you want the icon to the right of the label, add the ",Object(i.b)("inlineCode",{parentName:"p"},"a-btn--iconlabel-right")," in addition to the previous settings and place the ",Object(i.b)("inlineCode",{parentName:"p"},"<i>")," tag inside the button and after its inner text, instead."),Object(i.b)("p",null,"See our ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://astro.magnetis.com.br/iconography"}),"Iconography")," to learn how to use Astro icons."),Object(i.b)(b.c,{__position:3,__code:'<button className="a-btn a-btn--uranus a-btn--medium a-btn--iconlabel">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n  iconlabel\n</button>\n<button className="a-btn a-btn--uranus a-btn--medium a-btn--iconlabel a-btn--iconlabel-right">\n  iconlabel right\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button\n  className="a-btn a-btn--uranus a-btn--medium a-btn--iconlabel a-btn--iconlabel-right"\n  disabled\n>\n  iconlabel disabled\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--medium a-btn--iconlabel"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}),"iconlabel"),Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--medium a-btn--iconlabel a-btn--iconlabel-right"},"iconlabel right",Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--medium a-btn--iconlabel a-btn--iconlabel-right",disabled:!0},"iconlabel disabled",Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}))),Object(i.b)("h2",{id:"outline-iconlabel-buttons"},"outline iconlabel buttons"),Object(i.b)("p",null,"Outline iconlabel buttons are commonly used in microinteractions and secondary commands. Usage works the same as regular iconlabel buttons."),Object(i.b)(b.c,{__position:4,__code:'<button className="a-btn a-btn--outline-uranus a-btn--medium a-btn--iconlabel">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n  iconlabel\n</button>\n<button className="a-btn a-btn--outline-uranus a-btn--medium a-btn--iconlabel a-btn--iconlabel-right">\n  iconlabel right\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button\n  className="a-btn a-btn--outline-uranus a-btn--medium a-btn--iconlabel a-btn--iconlabel-right"\n  disabled\n>\n  iconlabel disabled\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--medium a-btn--iconlabel"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}),"iconlabel"),Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--medium a-btn--iconlabel a-btn--iconlabel-right"},"iconlabel right",Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--medium a-btn--iconlabel a-btn--iconlabel-right",disabled:!0},"iconlabel disabled",Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}))),Object(i.b)("h2",{id:"ghost-iconlabel-buttons"},"ghost iconlabel buttons"),Object(i.b)("p",null,"Ghost iconlabel buttons are also used in microinteractions and smaller commands. Usage works the same as regular iconlabel buttons."),Object(i.b)(b.c,{__position:5,__code:'<button className="a-btn a-btn--ghost-uranus a-btn--medium a-btn--iconlabel">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n  iconlabel\n</button>\n<button className="a-btn a-btn--ghost-uranus a-btn--medium a-btn--iconlabel a-btn--iconlabel-right">\n  iconlabel right\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button\n  className="a-btn a-btn--ghost-uranus a-btn--medium a-btn--iconlabel a-btn--iconlabel-right"\n  disabled\n>\n  iconlabel disabled\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--ghost-uranus a-btn--medium a-btn--iconlabel"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}),"iconlabel"),Object(i.b)("button",{className:"a-btn a-btn--ghost-uranus a-btn--medium a-btn--iconlabel a-btn--iconlabel-right"},"iconlabel right",Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--ghost-uranus a-btn--medium a-btn--iconlabel a-btn--iconlabel-right",disabled:!0},"iconlabel disabled",Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}))),Object(i.b)("h2",{id:"icon-buttons"},"icon buttons"),Object(i.b)("p",null,"Icon buttons can be used for simple microinteractions and commands."),Object(i.b)("p",null,"To create an icon button, first create a regular primary button with all size and color modifier classes, plus the ",Object(i.b)("inlineCode",{parentName:"p"},"a-btn--icon")," class. Then add a ",Object(i.b)("inlineCode",{parentName:"p"},"<i>")," tag inside the button with no inner text."),Object(i.b)("p",null,"See our ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://astro.magnetis.com.br/iconography"}),"Iconography")," to learn how to use Astro icons."),Object(i.b)(b.c,{__position:6,__code:'<button className="a-btn a-btn--uranus a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button className="a-btn a-btn--earth a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button className="a-btn a-btn--venus a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button className="a-btn a-btn--mars a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button className="a-btn a-btn--uranus a-btn--medium a-btn--icon" disabled>\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--earth a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--venus a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--mars a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--medium a-btn--icon",disabled:!0},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}))),Object(i.b)("h2",{id:"outline-icon-buttons"},"outline icon buttons"),Object(i.b)("p",null,"Outline icon buttons can be used for simple microinteractions and commands."),Object(i.b)("p",null,"To create an outline icon button, first create a regular outline button with all size and color modifier classes, plus the ",Object(i.b)("inlineCode",{parentName:"p"},"a-btn--icon")," class. Then add a ",Object(i.b)("inlineCode",{parentName:"p"},"<i>")," tag inside the button with no inner text."),Object(i.b)("p",null,"See our ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://astro.magnetis.com.br/iconography"}),"Iconography")," to learn how to use Astro icons."),Object(i.b)(b.c,{__position:7,__code:'<button className="a-btn a-btn--outline-uranus a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button className="a-btn a-btn--outline-earth a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button className="a-btn a-btn--outline-venus a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button className="a-btn a-btn--outline-mars a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button\n  className="a-btn a-btn--outline-uranus a-btn--medium a-btn--icon"\n  disabled\n>\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--outline-earth a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--outline-venus a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--outline-mars a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--medium a-btn--icon",disabled:!0},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}))),Object(i.b)("h2",{id:"ghost-icon-buttons"},"ghost icon buttons"),Object(i.b)("p",null,"Ghost icon buttons can be used for simple microinteractions and commands."),Object(i.b)("p",null,"To create a ghost icon button, replicate the classes used in the examples below; then add an ",Object(i.b)("inlineCode",{parentName:"p"},"<i>")," tag inside the button with no inner text."),Object(i.b)("p",null,"See our ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://astro.magnetis.com.br/iconography"}),"Iconography")," to learn how to use Astro icons."),Object(i.b)(b.c,{__position:8,__code:'<button className="a-btn a-btn--ghost-uranus a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button className="a-btn a-btn--ghost-earth a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button className="a-btn a-btn--ghost-venus a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button className="a-btn a-btn--ghost-mars a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button\n  className="a-btn a-btn--ghost-uranus a-btn--medium a-btn--icon"\n  disabled\n>\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--ghost-uranus a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--ghost-earth a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--ghost-venus a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--ghost-mars a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--ghost-uranus a-btn--medium a-btn--icon",disabled:!0},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}))),Object(i.b)("h2",{id:"icon-link-buttons"},"icon link buttons"),Object(i.b)("p",null,"Icon link buttons can be used for menu items and simple interactions or commands."),Object(i.b)("p",null,"To create an icon link button, follow the class structure below. This button does not share base styles with other buttons, so you will not use the generic ",Object(i.b)("inlineCode",{parentName:"p"},"a-btn")," class; just add the ",Object(i.b)("inlineCode",{parentName:"p"},"a-btn--iconlink")," class, plus a size modifier."),Object(i.b)("p",null,"Then, if you want the icon to the left of the label, add a ",Object(i.b)("inlineCode",{parentName:"p"},"<i>")," tag inside the button and before its inner text."),Object(i.b)("p",null,"If you want the icon to the right of the label, add the ",Object(i.b)("inlineCode",{parentName:"p"},"a-btn--iconlink-right")," in addition to the previous settings and place the ",Object(i.b)("inlineCode",{parentName:"p"},"<i>")," tag inside the button and after its inner text, instead."),Object(i.b)("p",null,"See our ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://astro.magnetis.com.br/iconography"}),"Iconography")," to learn how to use Astro icons."),Object(i.b)(b.c,{__position:9,__code:'<button className="a-btn--iconlink a-btn--medium">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n  icon link\n</button>\n<button className="a-btn--iconlink a-btn--medium a-btn--iconlink-bold">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n  icon link bold\n</button>\n<button className="a-btn--iconlink a-btn--medium a-btn--iconlink-right">\n  icon link right\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button\n  className="a-btn--iconlink a-btn--medium a-btn--iconlink-right"\n  disabled\n>\n  icon link disabled\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},className:"gradient-bg",mdxType:"Playground"},Object(i.b)("button",{className:"a-btn--iconlink a-btn--medium"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}),"icon link"),Object(i.b)("button",{className:"a-btn--iconlink a-btn--medium a-btn--iconlink-bold"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}),"icon link bold"),Object(i.b)("button",{className:"a-btn--iconlink a-btn--medium a-btn--iconlink-right"},"icon link right",Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn--iconlink a-btn--medium a-btn--iconlink-right",disabled:!0},"icon link disabled",Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}))),Object(i.b)("h2",{id:"sizes"},"sizes"),Object(i.b)("p",null,"Buttons can have different sizes, also by changing their CSS size class."),Object(i.b)("p",null,"When creating small or big iconlabel or icon buttons, remember to change the size classes on both the button and the icon inside it."),Object(i.b)(b.c,{__position:10,__code:'<button className="a-btn a-btn--uranus a-btn--small">small</button>\n<button className="a-btn a-btn--uranus a-btn--medium">medium</button>\n<button className="a-btn a-btn--uranus a-btn--large">large</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--small"},"small"),Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--medium"},"medium"),Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--large"},"large")),Object(i.b)(b.c,{__position:11,__code:'<button className="a-btn a-btn--outline-uranus a-btn--small">\n  outline small\n</button>\n<button className="a-btn a-btn--outline-uranus a-btn--medium">\n  outline medium\n</button>\n<button className="a-btn a-btn--outline-uranus a-btn--large">\n  outline large\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--small"},"outline small"),Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--medium"},"outline medium"),Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--large"},"outline large")),Object(i.b)(b.c,{__position:12,__code:'<button className="a-btn a-btn--uranus a-btn--iconlabel a-btn--small">\n  <i className="a-icon a-icon--calendar a-icon--size-small" />\n  iconlabel small\n</button>\n<button className="a-btn a-btn--uranus a-btn--iconlabel a-btn--medium">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n  iconlabel medium\n</button>\n<button className="a-btn a-btn--uranus a-btn--iconlabel a-btn--large">\n  <i className="a-icon a-icon--calendar a-icon--size-large" />\n  iconlabel large\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--iconlabel a-btn--small"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-small"}),"iconlabel small"),Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--iconlabel a-btn--medium"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}),"iconlabel medium"),Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--iconlabel a-btn--large"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-large"}),"iconlabel large")),Object(i.b)(b.c,{__position:13,__code:'<button className="a-btn a-btn--outline-uranus a-btn--iconlabel a-btn--small">\n  <i className="a-icon a-icon--calendar a-icon--size-small" />\n  outline iconlabel small\n</button>\n<button className="a-btn a-btn--outline-uranus a-btn--iconlabel a-btn--medium">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n  outline iconlabel medium\n</button>\n<button className="a-btn a-btn--outline-uranus a-btn--iconlabel a-btn--large">\n  <i className="a-icon a-icon--calendar a-icon--size-large" />\n  outline iconlabel large\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--iconlabel a-btn--small"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-small"}),"outline iconlabel small"),Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--iconlabel a-btn--medium"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}),"outline iconlabel medium"),Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--iconlabel a-btn--large"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-large"}),"outline iconlabel large")),Object(i.b)(b.c,{__position:14,__code:'<button className="a-btn a-btn--ghost-uranus a-btn--iconlabel a-btn--small">\n  <i className="a-icon a-icon--calendar a-icon--size-small" />\n  ghost iconlabel small\n</button>\n<button className="a-btn a-btn--ghost-uranus a-btn--iconlabel a-btn--medium">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n  ghost iconlabel medium\n</button>\n<button className="a-btn a-btn--ghost-uranus a-btn--iconlabel a-btn--large">\n  <i className="a-icon a-icon--calendar a-icon--size-large" />\n  ghost iconlabel large\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--ghost-uranus a-btn--iconlabel a-btn--small"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-small"}),"ghost iconlabel small"),Object(i.b)("button",{className:"a-btn a-btn--ghost-uranus a-btn--iconlabel a-btn--medium"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"}),"ghost iconlabel medium"),Object(i.b)("button",{className:"a-btn a-btn--ghost-uranus a-btn--iconlabel a-btn--large"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-large"}),"ghost iconlabel large")),Object(i.b)(b.c,{__position:15,__code:'<button className="a-btn a-btn--uranus a-btn--small a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-small" />\n</button>\n<button className="a-btn a-btn--uranus a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button className="a-btn a-btn--uranus a-btn--large a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-large" />\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--small a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-small"})),Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--uranus a-btn--large a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-large"}))),Object(i.b)(b.c,{__position:16,__code:'<button className="a-btn a-btn--outline-uranus a-btn--small a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-small" />\n</button>\n<button className="a-btn a-btn--outline-uranus a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button className="a-btn a-btn--outline-uranus a-btn--large a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-large" />\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--small a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-small"})),Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--outline-uranus a-btn--large a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-large"}))),Object(i.b)(b.c,{__position:17,__code:'<button className="a-btn a-btn--ghost-uranus a-btn--small a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-small" />\n</button>\n<button className="a-btn a-btn--ghost-uranus a-btn--medium a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-medium" />\n</button>\n<button className="a-btn a-btn--ghost-uranus a-btn--large a-btn--icon">\n  <i className="a-icon a-icon--calendar a-icon--size-large" />\n</button>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("button",{className:"a-btn a-btn--ghost-uranus a-btn--small a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-small"})),Object(i.b)("button",{className:"a-btn a-btn--ghost-uranus a-btn--medium a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-medium"})),Object(i.b)("button",{className:"a-btn a-btn--ghost-uranus a-btn--large a-btn--icon"},Object(i.b)("i",{className:"a-icon a-icon--calendar a-icon--size-large"}))),Object(i.b)("h2",{id:"links"},"links"),Object(i.b)("p",null,"For inline links in paragraphs and informative texts. Regular links navigate to other pages or external content."),Object(i.b)("p",null,"To create a link, combine the ",Object(i.b)("inlineCode",{parentName:"p"},"a-link")," class with an Astro typography class in your markup to apply our link properties over your desired font settings. See example below and the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://astro.magnetis.com.br/typography"}),"Typography")," page for detailed usage of typography classes."),Object(i.b)("p",null,"If you're looking for buttons in ",Object(i.b)("inlineCode",{parentName:"p"},"<a>"),' tags, see "buttons in ',Object(i.b)("inlineCode",{parentName:"p"},"<a>"),' elements" below.'),Object(i.b)("p",null,"Mouseover and click to view ",Object(i.b)("inlineCode",{parentName:"p"},":hover")," and ",Object(i.b)("inlineCode",{parentName:"p"},":active")," states."),Object(i.b)(b.c,{__position:18,__code:'<a className="a-link a-text--medium" tabIndex="0">\n  primary font - medium size\n</a>\n<a className="a-link a-text--secondary-small" tabIndex="0">\n  secondary font - small size\n</a>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("a",{className:"a-link a-text--medium",tabIndex:"0"},"primary font - medium size"),Object(i.b)("a",{className:"a-link a-text--secondary-small",tabIndex:"0"},"secondary font - small size")),Object(i.b)("h2",{id:"buttons-in-a-elements"},"buttons in ",Object(i.b)("inlineCode",{parentName:"h2"},"<a>")," elements"),Object(i.b)("p",null,"Although button classes are designed for ",Object(i.b)("inlineCode",{parentName:"p"},"<button>")," elements, you may also use them with ",Object(i.b)("inlineCode",{parentName:"p"},"<a>")," elements when semantically recommended. Note that some browsers may render them slightly differently."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<a>")," elements don't have a ",Object(i.b)("inlineCode",{parentName:"p"},":disabled")," attribute/pseudo selector, so if you need such state, you'll have to add the ",Object(i.b)("inlineCode",{parentName:"p"},"a-btn--disabled")," class like the example below."),Object(i.b)("p",null,"If your ",Object(i.b)("inlineCode",{parentName:"p"},"<a>")," button triggers in-page functionalities instead of linking (to other pages or within the current page), make them semantically accessible by adding a ",Object(i.b)("inlineCode",{parentName:"p"},'role="button"'),"."),Object(i.b)(b.c,{__position:19,__code:'<a className="a-btn a-btn--uranus a-btn--medium" tabIndex="0">\n  link button\n</a>\n<a className="a-btn a-btn--uranus a-btn--medium a-btn--disabled" tabIndex="0">\n  link button disabled\n</a>',__scope:{props:this?this.props:t,Playground:b.c,SketchLink:o.a},mdxType:"Playground"},Object(i.b)("a",{className:"a-btn a-btn--uranus a-btn--medium",tabIndex:"0"},"link button"),Object(i.b)("a",{className:"a-btn a-btn--uranus a-btn--medium a-btn--disabled",tabIndex:"0"},"link button disabled")))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/buttons.mdx"}}),l.isMDXComponent=!0},"./docs/components/SketchLink.jsx":function(n,a,t){"use strict";var e=t("./node_modules/react/index.js"),i=t.n(e),b=(t("./docs/css/sketch-link.css"),function(n){var a=n.file;return i.a.createElement("div",{className:"sketch-link"},i.a.createElement("a",{role:"button",className:"a-btn a-btn--earth a-btn--medium",tabIndex:"0",href:"/public/sketches/".concat(a,".sketch"),download:!0},"download sketch file"))});a.a=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SketchLink",filename:"docs/components/SketchLink.jsx"}})},"./docs/css/sketch-link.css":function(n,a,t){}}]);
//# sourceMappingURL=buttons.fe13ffac3b9b61bcbcdc.js.map