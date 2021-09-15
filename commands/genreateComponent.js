const createFiles = require('../utils/generator');

function generateComponent(componentName) {
  console.log('Generating react compnent with name ', componentName);
  createFiles(componentName);
}

module.exports = generateComponent;
