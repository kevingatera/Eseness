import React, { Component } from 'react';
import {
    StyleSheet, Picker, ScrollView,
    View, TouchableOpacity, ListView,
    TouchableHighlight,
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

    componentWillUnmount() {
      window.clearInterval(this.setStateInterval);
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight underlayColor="blue" style={ {
                height: 40,
                borderRadius: 10,
                backgroundColor: 'rgba(0, 109, 163, 0.5)',
                marginBottom: 5,
             } }>
                <View style={{  }}>
                    <Text style={styles.statsTextStyle}  numberOfLines={1}>
                            {rowData}
                    </Text>
                    <View style={{ height: 10, backgroundColor: 'rgba(0, 109, 163, 0.7)' }}></View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor="rgba(8, 135, 198, 0.9)" />

                <VictoryChart>
                    <VictoryArea
                        animate={{
                               onExit: {
                                 duration: 500,
                                 before: () => ({ opacity: 0.3, _y: 0 })
                               },
                               onEnter: {
                                 duration: 500,
                                 before: () => ({ opacity: 0.3, _y: 0 }),
                                 after: (datum) => ({ opacity: 1, _y: datum._y })
                               }
                             }}
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

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    style={{
                        marginHorizontal: 10,
                        paddingVertical: 10,
                        Bottom: 0
                    }}>
                </ListView>

            </ScrollView>
        );
    }

    constructor(props){
        super(props);

        var statsList = [
            'Accuracy: 60 %',
            'Lowest pressure: 50 atm',
            'Average pressure: 60 atm',
            'Higest Pressure: 100 atm',
            'Latest streak: 3 days',
            'Calories burnt: 120 cal'
        ];

        // Check if the row has changed during rendering
        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                if (r1.guid != r2.guid) {
                    return false;
                } else {
                    return false;
                }
            }
        });
        this.state = {
            data: [
                { x: 'Mon', y: 2 },
                { x: 'Tue', y: 3 },
                { x: 'Wed', y: 5 },
                { x: 'Thur', y: 4 },
                { x: 'Fri', y: 3 },
                { x: 'Sat', y: 6 },
                { x: 'Sun', y: 8 },
            ],
            count: 1,
            dataSource: dataSource.cloneWithRows(statsList),
        };

        // this.setStateInterval = window.setInterval(this.customAnimHandler, 2000);


        resetState = () => {
            this.state = {
                data: [
                    { x: 'Mon', y: 2 },
                    { x: 'Tue', y: 3 },
                    { x: 'Wed', y: 5 },
                    { x: 'Thur', y: 4 },
                    { x: 'Fri', y: 3 },
                    { x: 'Sat', y: 6 },
                    { x: 'Sun', y: 8 },
                ],
                count: 10,
            };
        }

        getRandomizedData = () => {
            const num = Math.floor(10 * Math.random() + 5);
            const points = new Array(num).fill(1);
            return points.map((point, index) => {
                return { x: index + 1, y: Math.random() };
            });
        };

        customAnimHandler = () => {
            var newCount = this.state.count - 1;
            if(newCount >= 0) {
                console.log(this.state.count);
                this.setState({
                    data: getRandomizedData(),
                    count: newCount
                });
            } else {
                resetState();
                console.log('YIyah => ' + this.state.data[0].y);
                window.clearInterval(this.setStateInterval);
                this.forceUpdate();
            }
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
    },

    statsTextStyle: {
        marginHorizontal: 50,
        fontSize: 25,
        color: 'rgb(207, 215, 255)'
    },


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
