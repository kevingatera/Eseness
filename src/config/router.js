// Import the usual stuff
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { icon } from 'react-native-elements';

// Import relevant screens
import Login from '../screens/users/Login';
import Workout from '../screens/workout/workout';

export const Tabs = TabNavigator({
    // Objects that represent screens
    Workout: {
        screen: Workout,
    }
})
