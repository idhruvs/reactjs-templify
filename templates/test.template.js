const testTemplate = (componentName) =>
`import { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';

import React from 'react';
import ${componentName} from '.';

const component = <${componentName} />;

describe('The ${componentName} component', () => {
  it('renders correctly', () => {
    const wrapper = render(component);
    expect(wrapper.hasClass('${componentName.toLowerCase()}')).toBeTruthy();

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
`;

module.exports = testTemplate;
