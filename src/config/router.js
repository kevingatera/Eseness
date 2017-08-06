// Import the usual stuff
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { icon } from 'react-native-elements';

// Import relevant screens
import Login from '../screens/users/Login';

export const Tabs = TabNavigator({
    // Objects that represent screens
    Login: {
        screen: Login,
    }
})
