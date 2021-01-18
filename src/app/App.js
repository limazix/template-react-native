import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen/HomeScreen';

/**
 * @name Stack
 * @description React Navigation Stack view component
 */
const Stack = createStackNavigator();

/**
 * @name App
 * @description React Native application entry point
 */
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
