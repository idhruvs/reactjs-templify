const componentTemplate = (componentName) => 
`import React from 'react';

import './${componentName}.css';

const ${componentName} = () => (
  <div classcomponentName="${componentName.toLowerCase()}">
    <p>${componentName} component works </p>
  </div>
);

export default ${componentName};
`;

module.exports = componentTemplate;
