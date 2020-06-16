import React from 'react';
import {render} from 'react-native-testing-library';

import AppNavigator from '../src/components/App';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Testing react navigation', () => {
  test('page render Home component', () => {
    const {getByText} = render(<AppNavigator />);

    const header = getByText('Home');

    expect(header).toBeTruthy();
  });
});
