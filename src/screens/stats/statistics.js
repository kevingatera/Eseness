import React, { Component } from 'react';
import {
    StyleSheet, Picker, ScrollView,
    View, TouchableOpacity,
    Image, Text, StatusBar
} from 'react-native';


import { VictoryChart, VictoryArea } from "victory-native";

import SplashScreen from 'react-native-splash-screen';
import TimerMixin from 'react-timer-mixin';

export default class Statistics extends Component {

    componentDidMount() {
        setTimeout(() => SplashScreen.hide(), 3000);
    }

    onValueChange = (key , value) => {
        console.log(key + value);
        this.setState({level: value})
    }

    static navigationOptions = {
        header: {
            visible: true,
        }
    }

    render() {
        return(
            <ScrollView style={styles.container}>

                <StatusBar backgroundColor="rgba(8, 135, 198, 0.9)" />

                <VictoryChart>
                    <VictoryArea
                        animate={{ duration: 3000 }}
                        style={
                            {
                                parent: {
                                    border: "1000px solid #fff"
                                },
                                data: {
                                    fill: "#2d5fd0", fillOpacity: 0.7, stroke: "#000c75", strokeWidth: 3
                                },
                            }
                        }
                        interpolation="natural"
                        data={ this.state.data }
                    />
                </VictoryChart>

                <Text style={ { marginHorizontal: 50, fontSize: 25, color: 'rgb(207, 215, 255)'} }>
                    {'Accuracy: 60 %'} {'\n'}
                    {'Lowest pressure: Level 1'}{'\n'}
                    {'Average pressure: Level 2'}{'\n'}
                    {'Higest Pressure: Level 4'}
                </Text>

            </ScrollView>
        );
    }

    constructor(props){
        super(props);

        this.state = {
            data: [
                { x: 'Mon', y: 2 },
                { x: 'Tue', y: 3 },
                { x: 'Wed', y: 5 },
                { x: 'Thurs', y: 4 },
                { x: 'Fri', y: 3 },
                { x: 'Sat', y: 6 },
                { x: 'Sun', y: 8 },
            ],
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(8, 135, 198)',
    },

    startButton: {
        backgroundColor: 'rgb(14, 66, 129)',
        marginVertical: 30,
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
        marginHorizontal: 40,
        backgroundColor: '#29A1C9',
        borderRadius: 100,
        marginBottom: 20,
        color: 'rgb(147, 189, 238)',
    },

    pickerItemStyle: {
        justifyContent: 'center',
    },

    optionsTitle: {
        fontSize: 20,
        color: 'rgb(0, 19, 60)',
        marginHorizontal: 40,
        fontWeight: 'bold',
    }


})




{/* =================== UNUSED CODE ============================

    <TouchableOpacity onPress={ connectToBle } style={styles.startButton}>
    <Text style={ styles.startText }>START</Text>
</TouchableOpacity>
<Text style={styles.optionsTitle}>Warm up</Text>
<Picker selectedValue={this.state.level}
style={styles.pickerStyle}
onValueChange={this.onValueChange.bind(this, 'level')}
prompt="Warm up"
enabled={true}
mode="dropdown">
<item style={styles.pickerStyle} label="Level 1" value="level 1"></item>
<item style={styles.pickerStyle} label="Level 2" value="level 2"></item>
<item style={styles.pickerStyle}  label="Level 3" value="level 3"></item>
<item style={styles.pickerStyle} label="Level 4" value="level 4"></item>
</Picker>
<Text style={styles.optionsTitle}>Pulse workout</Text>
<Picker selectedValue={this.state.level}
style={styles.pickerStyle}
onValueChange={this.onValueChange.bind(this, 'level')}
prompt="Pulse workout"
enabled={true}
mode="dropdown">
<item style={styles.pickerStyle} label="Level 1" value="level 1"></item>
<item style={styles.pickerStyle} label="Level 2" value="level 2"></item>
<item style={styles.pickerStyle} label="Level 3" value="level 3"></item>
<item style={styles.pickerStyle} label="Level 4" value="level 4"></item>
</Picker>
<Text style={styles.optionsTitle}>Endurance workout</Text>
<Picker selectedValue={this.state.level}
style={styles.pickerStyle}
onValueChange={this.onValueChange.bind(this, 'level')}
prompt="Endurance workout"
enabled={true}
mode="dropdown">
<item style={styles.pickerStyle} label="Level 1" value="level 1"></item>
<item style={styles.pickerStyle} label="Level 2" value="level 2"></item>
<item style={styles.pickerStyle} label="Level 3" value="level 3"></item>
<item style={styles.pickerStyle} label="Level 4" value="level 4"></item>
</Picker>
<Text style={styles.optionsTitle}>Steps workout</Text>
<Picker selectedValue={this.state.level}
style={styles.pickerStyle}
onValueChange={this.onValueChange.bind(this, 'level')}
prompt="Steps workout"
enabled={true}
mode="dropdown">
<item style={styles.pickerStyle} label="Level 1" value="level 1"></item>
<item style={styles.pickerStyle} label="Level 2" value="level 2"></item>
<item style={styles.pickerStyle} label="Level 3" value="level 3"></item>
<item style={styles.pickerStyle} label="Level 4" value="level 4"></item>
</Picker>
<Text style={styles.optionsTitle}>Game Time workout</Text>
<Picker selectedValue={this.state.level}
style={styles.pickerStyle}
onValueChange={this.onValueChange.bind(this, 'level')}
prompt="Game Time workout"
enabled={true}
mode="dropdown">
<item label="Level 1" value="level 1"></item>
<item label="Level 2" value="level 2"></item>
<item label="Level 3" value="level 3"></item>
<item label="Level 4" value="level 4"></item>
</Picker>
<Text style={styles.optionsTitle}>Vibe and Chill workout</Text>
<Picker selectedValue={this.state.level}
style={styles.pickerStyle}
onValueChange={this.onValueChange.bind(this, 'level')}
prompt="Vibe and Chill"
enabled={true}
mode="dropdown">
<item color="red" label="Level 1" value="level 1"></item>
<item style={styles.pickerStyle} label="Level 2" value="level 2"></item>
<item style={styles.pickerStyle} label="Level 3" value="level 3"></item>
<item style={styles.pickerStyle} label="Level 4" value="level 4"></item>
</Picker> */}
