/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '../../../jest/render-wrapper';

import { rootReducer } from '../../app/store';

import NavigationStack from './NavigationStack';

describe('Navigation Stack', () => {
    it('should renders correctly', async () => {
        await render(<NavigationStack />, {}, rootReducer);
    });

    describe('Given the component is rendered', () => {
        it('should have a screen named Home', async () => {
            const { findByText } = render(<NavigationStack />, {}, rootReducer);

            const header = await findByText('Home');
            expect(header).toBeTruthy();
        });
    });
});
