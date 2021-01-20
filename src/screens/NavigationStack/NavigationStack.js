import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../HomeScreen';

/**
 * @memberof screens
 * @name Stack
 * @description React Navigation Stack view component
 */
const Stack = createStackNavigator();

/**
 * @memberof screens
 * @name NavigationStack
 * @description React Native application entry point
 */
const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationStack;
