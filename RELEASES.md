## Release Checklist (Magnetis contributors only)

The Magnetis Astro team launches a new release every time we decide the latest changes should go live. When that occurs, we update the NPM Registry package and deploy the latest version of the documentation.

If you're a Magnetis employee who's about to launch a new release, please follow this checklist. 

1. Create a new branch.
2. Update the CHANGELOG.md file. To make sure you add all changes, see the commit history: https://github.com/magnetis/astro/commits/master.
3. Bump the version directly on `package.json` file, following the [Semantic Versioning](https://semver.org/) convention.
4. Build the project: `yarn run build`.
5. Push the branch to GitHub and open a PR (no need to ask for reviewers).
6. Merge with master.
7. Create a new release on GitHub: https://github.com/magnetis/astro/releases.
8. Send the release to NPM registry: `git checkout master` && `git pull` &&  `yarn publish`. 
9. Deploy to the production documentation: `yarn docs:publish`.
10. Notify about the release on #astro-news channel on Slack.