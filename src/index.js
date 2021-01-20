import { AppRegistry } from 'react-native';

import App from './app';
import { name as appName } from './app/app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
});
