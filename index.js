#!/usr/bin/env node

const program = require('commander');
const versionFromPackage = require('./package.json').version;

const version = versionFromPackage;

program
  .version(version)
  .option('-p, --ppp', 'people people people')
  .option('-o, --ooo', 'oct oct oct')
  .parse(process.argv);

if(program.ppp) { console.log('people input');  }
else if(program.ooo) { console.log('oct input'); }
else { console.log('type \'-h\' for help'); }
