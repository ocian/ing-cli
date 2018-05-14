const program = require('commander');
const version_package = require('./package.json').version;

program
  .version(version_package)
  .option('-p, --ppp', 'people people people')
  .option('-o, --ooo', 'oct oct oct');

