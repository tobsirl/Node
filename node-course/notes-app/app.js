const validator = require('validator');
const chalk = require('chalk');

const command = process.argv[2];

if (command === 'Add') {
  console.log(chalk.bold.red.bgWhiteBright('Adding notes...'));
}
