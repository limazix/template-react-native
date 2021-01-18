import 'react-native-gesture-handler';

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App, { appStore } from './src/app';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => (
    <Provider store={appStore}>
        <App />
    </Provider>
));
