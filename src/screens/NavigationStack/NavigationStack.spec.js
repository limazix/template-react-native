/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import NavigationStack from './NavigationStack';

describe('Navigation Stack', () => {
    it('should renders correctly', async () => {
        await render(<NavigationStack />);
    });

    describe('Given the component is rendered', () => {
        it('should have a screen named Home', async () => {
            const { findByText } = render(<NavigationStack />);

            const header = await findByText('Home');
            expect(header).toBeTruthy();
        });
    });
});
