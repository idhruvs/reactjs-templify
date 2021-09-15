const createFiles = require('../utils/generator');

const conf = new (require('conf'))();

function generateComponent(componentName) {
  console.log('Generating react compnent with name ', componentName);
  createFiles(componentName);
}

module.exports = generateComponent;
