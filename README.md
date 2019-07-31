# Astro
### A design system by Magnetis 👩‍🚀

[![Build Status](https://travis-ci.org/magnetis/astro.svg?branch=master)](https://travis-ci.org/magnetis/astro)

## Table of contents

- [Introduction](#introduction)
- [Supported libraries](#supported-libraries)
- [Adding Astro to your project](#adding-astro-to-your-project)
- [Using Astro](#using-astro)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [Contact us](#contact-us)

## Introduction

Made for **Magnetis**' designers, developers, product managers, data analysts, data scientists, stakeholders and enthusiasts, **Astro** helps us protect the brand concepts, elevate consistency of user experience and increase the speed and efficiency of how we design and build products for our customers.

We believe that a good user experience is built with **consistent design**, well defined **visual and interaction patterns**, carefully built **emotions** and **made for all**.
Therefore, Astro is essentially:

### Atomic
Astro is built based on **Atomic Design**, so our designers and developers can use its style set and components to enhance our product interface, as a **modular system** that can be easily **managed and updated**.

### Open
Magnetis believes that good design and experiences can **impact the product market and society itself**. Our **design and code assets are open** so we can contribute to the community and help new product teams.

### Accessible
Design is meant to be **for all**. Astro style and components follow basic recommendations from the **WCAG guidelines** for accessibility, with tested contrast ratios and good practices in legibility and screen reading solutions.
[See WCAG >>](https://www.w3.org/TR/WCAG21/)

## Supported libraries

For now, Astro only supports React as its official library.

## Adding Astro to your project

### Installing the dependency

Install Astro via terminal:
Run `yarn add @magnetis/astro` or `npm install @magnetis/astro`.

### Using via CDN

```html
  <link href='https://unpkg.com/@magnetis/astro/dist/astro.css' rel='stylesheet' type="text/css" />
```

### Adding Astro fonts (important!)

After you've imported Astro, you still need to add our fonts to your project manually.
You can get the updated font links either in the [Typography page](https://astro.magnetis.com.br/#/docs-typography) or inside the project folder in `public/docz.html`.

## Using Astro

Ready to start coding with Astro? Follow the instructions in the docs ([astro.magnetis.com.br](https://astro.magnetis.com.br/)) to learn how to use our components. You'll also see how to apply attribute modifiers (such as classes) to your HTML elements and React components.

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

3. Go to Astro's [Typography page](https://astro.magnetis.com.br/#/docs-typography);

4. See that the "Display" section guides you to create a `<p>` element with a specific text display class;

5. Replicate the instructions in your page file and make sure the correct styles have been applied;

6. If your styles aren't rendered correctly, make sure Astro has been successfully installed into your project tree and `astro.css` is correctly imported.

Although our CSS variables _are_ available in the bundle, it's important to emphasize that you should use Astro classes whenever possible, instead of using the variables directly. Always look for the element you're creating in the docs before you start to build it from scratch.

In other words, avoid this:

```css
.paragraph {
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 24px;
  line-height: 1.5;
  color: var(--color-moon-900);
}
```
```html
<p class="paragraph">Don't do this</p>
```

In the example above, all these properties could be replaced with using the `a-text--large` class in the `paragraph` element. Like so:

```html
<p class="a-text--large">Do this!</p>
```

### Customizing styles

In case you absolutely have to customize one or more properties in an Astro component, you should still use the corresponding Astro class that's closer to your goal and override it with your custom properties. You can do this:

```css
.my-paragraph {
  color: var(--color-moon-700); /* override default Astro color */
}
```
```html
<p class="a-text--large my-paragraph">Customize like this</p>
```

## Contributing

It's awesome that you want to contribute to Astro! Please see [CONTRIBUTING.md](CONTRIBUTING.md) to learn how it works.

## Troubleshooting

- If you copy the markup from an example in our documentation, don't forget to change "className" to "class" if you're not in a React environment like our docs are ;)

## Contact us

Found a bug? Please see if it was already reported on our [issues page](https://github.com/magnetis/astro/issues). If you can't find a matching report, you can [open a new issue](https://github.com/magnetis/astro/issues/new) including as much information as you can gather. We appreciate it!

Any lingering questions? You can contact us at [dev@magnetis.com.br](mailto:dev@magnetis.com.br).

Thank you for using Astro! 🎉
