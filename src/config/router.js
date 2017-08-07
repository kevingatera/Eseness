// Import the usual stuff
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { icon } from 'react-native-elements';

// Import relevant screens
import Login from '../screens/users/Login';
import Workout from '../screens/workout/workout';
import Statistics from '../screens/stats/statistics';
import Settings from '../screens/settings/settings';

export const Tabs = TabNavigator({
    // Objects that represent screens
    Workout: {
        screen: Workout,
        navigationOptions: {
            tabBarIcon: ( {tintColor} ) => {
                <Icon
                    name="list"
                    size={35}
                    color={ tintColor } />
            }
        }
    },
    Statistics: {
        screen: Statistics,
    },
    Settings: {
        screen: Settings,
    }
}, {
    tabBarOptions: {
        style: {
            backgroundColor: 'rgba(8, 135, 198, 0.9)',
        },
    }
});

console.log('I leaked!');
