# Astro
## A design system by Magnetis :female-astronaut:

Made for **Magnetis**' designers, developers, product managers, data analysts, data scientists, stakeholders and enthusiasts, **Astro** helps us protect the brand concepts, elevate consistency of user experience and increase the speed and efficiency of how we design and build products for our customers.

We believe that a good user experience is built with **consistent design**, well defined **visual and interaction patterns**, carefully built **emotions** and **made for all**.
Therefore, Astro is essentially:

### Atomic
Astro is built based on **Atomic Design**, so our designers and developers can use its style set and components to enhance our product interface, as a **modular system** that can be easily **managed and updated**.

### Open
Magnetis believes that good design and experiences can **impact the product market and society itself**. Our **design and code assets are open** so we can contribute to the community, help new product teams and our designers and developers can easily reach our assets from anywhere, anytime. 

### Accessible
Design is meant to be **for all**. Astro style and components follow basic recommendations from the **WCAG 2.0 guidelines** for accessibility, with tested contrast ratios and good practices in legibility.
[See WCAG 2.0 >>](https://www.w3.org/TR/WCAG21/)

## Supported libraries

For now, Astro only supports React as its official library.

## 1. Contributing

Our design system and components are documented with [Docz](https://www.docz.site/) and hosted by [GitHub Pages](https://pages.github.com/). Its documentation can be viewed at [magnetis.github.io/astro](https://magnetis.github.io/astro/).

### 1.1. Documentation

Every time you create or edit a component, edit CSS base files or contribute to anything Astro-wise, you'll most likely have to publish updates to our docs to reflect these changes. That's also how you preview your changes: by running Docz locally in your machine.

Docz uses [MDX](https://github.com/mdx-js/specification) as a format, which means you can write JSX inside markdown files. See an example file below:

```jsx
---
name: Button
---

import { Playground } from 'docz'
import { Button } from './Button'

# Button

## Basic usage

<Playground>
  <Button>Click me</Button>
  <Button class="secondary">Click me</Button>
</Playground>
```

The `<Playground>` component is how you can render your component *and* see its code in a single view. Super easy! :)

### 1.2. Setup and running

Please follow these steps to run the project and start coding:

1.1.1. Clone Astro if you haven't, or `git pull` to get the latest update.
1.1.2. Install Astro with `yarn install` or `npm install`.
1.1.3. Run `yarn docz:dev` or `npm run docz:dev` in your terminal and visit `localhost:3000`.
1.1.4. Find the file(s) you wish to edit in the folders below:
- Design system base CSS files: `src/css` - if you create a new file here, please add the import to `src/index.css`. *Proceed carefully as editing base files might break Astro and destroy the very fabric of the universe*.
- Import fonts to Docz: `public/docz.html`.
- Docz documentation pages including components: `docs`.

After you're done, just open a pull request and grab some coffee while we review your code.

### 1.3. Publishing your changes to Astro online docs

Once your pull request has been approved and merged, you must deploy Astro again to GitHub Pages to make sure everyone views the most recent version of the project.

In your terminal, after merging: checkout to master, do `git pull` and run `yarn docs:publish` or `npm run docs:publish` to deploy.

Visit [magnetis.github.io/astro](https://magnetis.github.io/astro/) and make sure your changes go live! :tada: While you're there, please check if everything still looks okay.

## 2. Adding Astro to your project

### 2.1. Installing the dependency

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

### 2.2. Adding Astro fonts (important!)

After you've imported Astro, you still need to add our fonts to your project manually.
You can get the updated font links either in the Typography page at [magnetis.github.io/astro](https://magnetis.github.io/astro/) or inside the project folder in `public/docz.html`.

### 2.3. Package dependencies

We've chosen a few dependencies to help optimize our project. If you're curious about what these are, here's a short description:

- [Docz](https://www.docz.site/): The base of our documentation in MDX
- [PostCSS (+ their cli + css-variables + import + autoprefixer)](https://postcss.org/): Makes our CSS more browser-friendly
- [Flexbox Grid](https://github.com/kristoferjoseph/flexboxgrid): Grid based off of CSS3 flexbox specs
- [Normalize.css](https://necolas.github.io/normalize.css/): A modern alternative to CSS resets
- [cssnano](https://github.com/cssnano/cssnano): A modular minifier, built on top of PostCSS
- [gh-pages](https://github.com/tschaub/gh-pages): Publish to a gh-pages branch on GitHub
- [stylelint](https://stylelint.io/): A mighty, modern CSS linter

## 3. Using Astro

Ready to start coding with Astro? Just follow the instructions in the docs ([magnetis.github.io/astro](https://magnetis.github.io/astro/)) to use our components. You'll also learn how to apply attribute modifiers (such as classes) to your HTML elements.

When building layout structures, don't forget to use [Flexbox Grid](https://github.com/kristoferjoseph/flexboxgrid), which is already built in your project as an Astro dependency.

## 4. Troubleshooting

- `error: RPC failed; curl 56 LibreSSL SSL_read: SSL_ERROR_SYSCALL, errno 60` when deploying to GitHub Pages

  Might be a slow connection issue - try resetting your wifi. Yeah, really.