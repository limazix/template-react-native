import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';

import appStore from './app.store';
import { HomeScreen } from '../screens';

/**
 * @memberof App
 * @name Stack
 * @description React Navigation Stack view component
 */
const Stack = createStackNavigator();

/**
 * @module App
 * @name App
 * @description React Native application entry point
 */
const App = () => {
    return (
        <Provider store={appStore}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
