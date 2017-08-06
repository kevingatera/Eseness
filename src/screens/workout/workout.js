import React, { Component } from 'react';
import {
    StyleSheet, Picker,
    View, TouchableOpacity,
    Image, Text, StatusBar
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

export default class Workout extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

    static navigationOptions = {
        header: {
            visible: true,
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={ connectToBle } style={styles.startButton}>
                    <Text style={ styles.startText }>START</Text>
                </TouchableOpacity>

                <Picker selectedValue="Warm up">
                    <item label="Level 1" value="level 1"></item>
                    <item label="Level 2" value="level 2"></item>
                    <item label="Level 3" value="level 3"></item>
                    <item label="Level 4" value="level 4"></item>
                </Picker>
                <Picker selectedValue="Pulse workout">
                    <item label="Level 1" value="level 1"></item>
                    <item label="Level 2" value="level 2"></item>
                    <item label="Level 3" value="level 3"></item>
                    <item label="Level 4" value="level 4"></item>
                </Picker>
                <Picker selectedValue="Endurance workout">
                    <item label="Level 1" value="level 1"></item>
                    <item label="Level 2" value="level 2"></item>
                    <item label="Level 3" value="level 3"></item>
                    <item label="Level 4" value="level 4"></item>
                </Picker>
                <Picker selectedValue="Steps workout">
                    <item label="Level 1" value="level 1"></item>
                    <item label="Level 2" value="level 2"></item>
                    <item label="Level 3" value="level 3"></item>
                    <item label="Level 4" value="level 4"></item>
                </Picker>
                <Picker selectedValue="Game Time" style={styles.pickerStyle}>
                    <item label="Level 1" value="level 1"></item>
                    <item label="Level 2" value="level 2"></item>
                    <item label="Level 3" value="level 3"></item>
                    <item label="Level 4" value="level 4"></item>
                </Picker>
                <Picker selectedValue="Vibe and Chill">
                    <item label="Level 1" value="level 1"></item>
                    <item label="Level 2" value="level 2"></item>
                    <item label="Level 3" value="level 3"></item>
                    <item label="Level 4" value="level 4"></item>
                </Picker>
            </View>
        );
    }


    constructor(props) {
        super(props);

        this.state = {
            level: 'level 1'
        }

        connectToBle = () => {
            alert('Connecting to device...');
        };
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
    },

    startButton: {
        backgroundColor: 'rgb(14, 66, 129)',
        marginVertical: 50,
        marginHorizontal: 70,
        alignItems: 'center',
        borderRadius: 800,
    },

    startText: {
        color: 'rgb(124, 175, 235)',
        fontSize: 50,
        justifyContent: 'center',
    },

    pickerStyle: {
        
    }
})
