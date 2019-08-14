const fs = require('fs');
const gh = require('gh-pages');

const DIST_PATH = '.docz/dist';

fs.copyFile('CNAME', `${DIST_PATH}/CNAME`, err => {
  if (err) throw err;
  console.log('CNAME file copied to .docz/dist directory');
});

fs.copyFile(`${DIST_PATH}/index.html`, `${DIST_PATH}/404.html`, err => {
  if (err) throw err;
  console.log('index.html file copied as 404.html');
});

gh.publish(DIST_PATH, err => {
  if (err) {
    console.log('Ops, something went wrong...', err);
  } else {
    console.log('Update site [ci skip]!');
  }
});
