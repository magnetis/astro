# Astro
## A design system by Magnetis 👩‍🚀

Made for **Magnetis**' designers, developers, product managers, data analysts, data scientists, stakeholders and enthusiasts, **Astro** helps us protect the brand concepts, elevate consistency of user experience and increase the speed and efficiency of how we design and build products for our customers.

We believe that a good user experience is built with **consistent design**, well defined **visual and interaction patterns**, carefully built **emotions** and **made for all**.
Therefore, Astro is essentially:

### Atomic
Astro is built based on **Atomic Design**, so our designers and developers can use its style set and components to enhance our product interface, as a **modular system** that can be easily **managed and updated**.

### Open
Magnetis believes that good design and experiences can **impact the product market and society itself**. Our **design and code assets are open** so we can contribute to the community and help new product teams.

### Accessible
Design is meant to be **for all**. Astro style and components follow basic recommendations from the **WCAG 2.0 guidelines** for accessibility, with tested contrast ratios and good practices in legibility.
[See WCAG 2.0 >>](https://www.w3.org/TR/WCAG21/)

## Supported libraries

For now, Astro only supports React as its official library.

## Adding Astro to your project

### Installing the dependency

There are two easy ways to add Astro as a dependency in your project:

Add this line to your `package.json`:
```json
"dependencies": {
  "@magnetis/astro": "git+ssh://github.com/magnetis/astro.git"
  }
```

*or*

Install Astro via terminal using the GitHub SSH url:
Run `yarn add git@github.com:magnetis/astro.git` or `npm install git@github.com:magnetis/astro.git`.

### Adding Astro fonts (important!)

After you've imported Astro, you still need to add our fonts to your project manually.
You can get the updated font links either in the Typography page at [magnetis.github.io/astro](https://magnetis.github.io/astro/) or inside the project folder in `public/docz.html`.

## Using Astro

Ready to start coding with Astro? Follow the instructions in the docs ([magnetis.github.io/astro](https://magnetis.github.io/astro/)) to learn how to use our components. You'll also see how to apply attribute modifiers (such as classes) to your HTML elements and React components.

Here's a quick example. If you'd like to create a Display text styled in Astro typography:

1. Complete all install steps listed above;

2. Import Astro in your file through one of the following methods:

    - Inside the `<head>` tag:
      ```html
      <head>
        <link href="/node_modules/@magnetis/astro/dist/astro.css" rel="stylesheet" type="text/css" /> 
      </head>
      ```
    - With ES6 modules: `import "@magnetis/astro";`

    - With commonjs: `require("@magnetis/astro");`

3. Go to Astro's [Typography page](https://magnetis.github.io/astro/#/docs-typography);

4. See that the "Display" section orients you to create a `<p>` element with the `text--display` class;

5. Replicate the instructions in your page file and make sure the correct styles have been applied;

6. If your styles aren't rendered correctly, make sure Astro has been successfully installed into your project tree and `astro.css` is correctly imported.

When building layout structures, don't forget to use [Flexbox Grid](https://github.com/kristoferjoseph/flexboxgrid), which is already built in your project as an Astro dependency.

## Contributing

It's awesome that you want to contribute to Astro! Please see [contributing.md](contributing.md) to learn how it works.

Thank you for using Astro! 🎉