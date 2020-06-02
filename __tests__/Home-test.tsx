import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../src/components/Home';

it('renders correctly', () => {
  renderer.create(<Home />);
});
