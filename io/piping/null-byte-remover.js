const fs = require('fs');
const path = require('path');

const cwd = process.cwd(); // Current working directory
const bytes = fs.readFileSync(path.join(cwd, 'file.dat')); // synchronously read in the entire file

const clean = bytes.filter((n) => n); // filter out the null bytes
fs.writeFileSync(path.join(cwd, 'clean.dat'), clean); // write the result synchronously to clean.dat

fs.appendFileSync(
  path.join(cwd, 'log.txt'),
  new Date() + '' + (bytes.length - clean.length) + 'bytes.removed\n'
); // create a log using the date and the number of bytes removed
