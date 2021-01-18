import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

/**
 * @memberof Screens
 * @name HomeScreen
 * @description It implemets the Home Screen page
 */
const HomeScreen = () => {
    return (
        <View style={styles.view}>
            <Text>Home Screen</Text>
        </View>
    );
};

/**
 * @name styles
 * @description it implements the home screen page' style grouped by component view
 */
const styles = StyleSheet.create({
    view: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default HomeScreen;
