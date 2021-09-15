const componentTemplate = require('./component.template');
const testTemplate = require('./test.template');
const styleTemplate = require('./style.template');
const storybookTemplate = require('./storybook.template');

const templates = {
  component: componentTemplate,
  test: testTemplate,
  style: styleTemplate,
  storybook: storybookTemplate
}

module.exports = templates