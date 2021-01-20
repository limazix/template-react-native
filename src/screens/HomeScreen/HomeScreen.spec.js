/**
 * @format
 */

import 'react-native';
import React from 'react';

import HomeScreen from './HomeScreen';

import { render } from '@testing-library/react-native';

it('renders correctly', async () => {
    await render(<HomeScreen />);
});
