#! /usr/bin/env node

const { program } = require('commander');

const generateComponent = require('./commands/genreateComponent');

program
  .command('generate-component <ComponentName>')
  .description('Generate component template with the provided name in /src/components/ directory')
  .action(generateComponent);

program.parse();
