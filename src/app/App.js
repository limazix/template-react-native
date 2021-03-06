import * as React from 'react';
import { Provider } from 'react-redux';

import appStore from './store';
import screens from '../screens';

/**
 * @module App
 * @name App
 * @description React Native application entry point
 */
const App = () => {
    return (
        <Provider store={appStore}>
            <screens.NavigationStack />
        </Provider>
    );
};

export default App;
