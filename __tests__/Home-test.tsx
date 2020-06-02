import 'react-native';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

import Home from '../src/components/Home';

describe('Home', () => {
  describe('clicking Get another device!', () => {
    it('renders new advice', () => {
      const {getByText} = render(<Home />);

      fireEvent.press(getByText('Get another advice!'));
    });
  });
});
