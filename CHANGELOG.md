# Changelog

This page documents interesting or noteworthy changes to the project, based on [Semantic Versioning](http://semver.org/).

### [3.2.0] - 2019-12-27
- Add inactive table row style.
- Update dependencies.

### [3.1.0] - 2019-11-14
- Create new "Tables" page with table styles.
- Add download link for Sketch files.
- Add support for reduced motion preferences.
- Update dependencies.

### [3.0.0] - 2019-10-18
- Breaking changes; please follow the quick [update guide](https://github.com/magnetis/astro/blob/master/UPDATE_GUIDE_3_0_0.MD) as you update.
- Change "small" text font size to 14px (1.75base) and create "very small" text font size for 12px (1.5base). This does not affect title classes, just text.
- Add new "transactions", "heart", "close" and "mountain" icons to Iconography.
- Add new Uploaded File Preview component in Inputs.
- Add more z-index variables (this is more of a dev update, but you might also use our variables as a user).
- Remove CodeSandbox link in our docs as it's not working from the Docz side.
- Update dependencies.

### [2.0.1] - 2019-09-16
- Fix font display bug in Edge browser, by removing font-stretch declaration from the font shorthand.
- Update dependencies.

### [2.0.0] - 2019-09-12
- Breaking changes; please follow the [update guide](https://github.com/magnetis/astro/blob/master/UPDATE_GUIDE_2_0_0.MD) as you update.
- Add new icon to Iconography.
- Add new gradient to Colors.
- Rename some icons to more generic names.
- Rename some classes to follow BEM standards.

### [1.6.0] - 2019-09-10
- Add new icons to Iconography.

### [1.5.0] - 2019-08-15
- Takes off the need to manually import Astro fonts.
- Fix astro documentation minor bug that redirects to a 404 page when accessing sub pages directly from the URL.
- Create icon link buttons and add them to the documentation.

### [1.4.3] - 2019-08-12
- Remove font declaration from disabled input label, fixing possible conflicts with floating label styles.

### [1.4.2] - 2019-08-08
- Remove unnecessary files from bundle, making Astro lighter.
- Fix bug that compiled variables into `astro.css` files as `undefined` - it affected checkboxes, toggles and radio buttons.

### [1.4.1] - 2019-08-02
- Improve and fix invalid and validated states for all input types.
- Remove primary Ghost Buttons support, leaving only Ghost Iconlabel Buttons and Ghost Icon Buttons in our documentation. These are not breaking changes; if you use Ghost Buttons, they'll still work. Learn more on PR #133
- Bump dependencies.

### [1.4.0] - 2019-07-17
- Change slider thumb (circle) sizes to improve touchscreen usability.
- Create full fill (gradient) slider.
- Bump several dependencies.

### [1.3.0] - 2019-06-24
- Add new icons to Iconography.

### [1.2.0] - 2019-06-18
- Refactor links usage to allow combining link styles with typography classes (should not break anything since now links are styled from context, but we advise you to check your `a-link` elements anyway).
- Tech debt: extract font size values into variables.
- Tech debt: bump stylelint and postcss-css-variables versions.

### [1.1.1] - 2019-06-06
- Fix Control Input missing button icon.

### [1.1.0] - 2019-06-05
- Add new icons to Iconography.
- Update several dependencies.

### [1.0.2] - 2019-05-20
- Add font smoothing on Chrome and Firefox to improve Typography rendering.

### [1.0.1] - 2019-05-15
- Change (fix) ghost and outline buttons backgrounds from white to transparent.

### [1.0.0] - 2019-05-10
- Production ready!
- Add masked input type to Inputs page.
- Add input sizes variations to Inputs page.

### [0.9.0] - 2019-05-06
- Add optional always-horizontal behavior to tabs component.
- Fix label leaking on tabs component (issue #82).
- Add control input type to Inputs page.
- Make color variables accessible in the final bundle.
- Add ghost icon buttons to Buttons page.
- Add ghost input type to Inputs page.

### [0.8.0] - 2019-04-26
- Remove Flexbox Grid system from the project as it caused CSS class conflicts.
- Fix color inconsistencies in floating labels of several inputs.
- Update messaging input button details.
- Adjust focus behavior on all interactive components for accessibility and aesthetics.
- Create Colors page in the documentation.

### [0.7.0] - 2019-04-15
- Breaking changes: fixed several Controls & Toggles components which only worked on Chrome by altering the markup and CSS structure, not using pseudoclasses on input elements anymore.
- Minor update on font install instructions.

### [0.6.0] - 2019-04-05
- New documentation theme.
- Add icon components and create Iconography page.
- Adjust tabs component to the new icon size classes (might require a check if you're using icons already)
- Add textarea input type to Inputs page.
- Add messaging input type to Inputs page.
- Add icon buttons to Buttons page.

### [0.5.0] - 2019-03-18
- Breaking changes: Refactor disabled state of some components to standardize label and input order and their classes and attributes.
- Change documentation domain to astro.magnetis.com.br.
- Add tabs components to Controls & Toggles.
- Add a Magnetis logo favicon.
- Move release checklist to Astro GitHub repository.
- Add info about our new staging environment to Contributing Guide.
- Fix code formatting on most files.

### [0.4.1] - 2019-02-27
- Fix input style inconsistencies.
- Update Usage section in the docs.
- Fix build command on package.json file.

### [0.4.0] - 2019-02-26
- Set Yarn as the only dependency manager.
- Add slider components to Controls & Toggles.
- Fix disabled state color inconsistencies in Controls & Toggles.
- Create Inputs page and add standard input components.
- Add SVG's to dist/assets folder in the Astro build.
- Minor improvements in the docs homepage.

### [0.3.0] - 2019-02-08
- Add toggle and radio button components to Controls & Toggles.

### [0.2.1] - 2019-01-31
- Rebuild to update `astro.css`, which was outdated.

### [0.2.0] - 2019-01-31
- Breaking changes: changed the structure of CSS selectors, mostly from tag selectors to classes.
- Design updates to several components.

### [0.1.0] - 2019-01-22
- First version of the project as a public repository on NPM registry, but still not ready for use.
