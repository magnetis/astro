const fs = require('fs');
const gh = require('gh-pages');

const DIST_PATH = '.docz/dist';

fs.copyFile('CNAME', `${DIST_PATH}/CNAME`, (err) => {
  if (err) throw err;
  console.log('CNAME file copied to .docz/dist directory');
});

gh.publish(DIST_PATH, (err) => {
  if (err) {
    console.log('Ops, something went wrong...', err);
  } else {
    console.log('Update site [ci skip]!');
  }
});
