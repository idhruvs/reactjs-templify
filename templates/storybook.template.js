const storybookTemplate = (componentName) => 
`import React from 'react';

import ${componentName} from './${componentName}';

export default {
  title: '${componentName}',
  component: ${componentName},
  argTypes: {},
};

const Template = (args) => <${componentName} {...args} />;

export const ${componentName}Basic = Template.bind({});
${componentName}Basic.args = {};
`;

module.exports = storybookTemplate;
