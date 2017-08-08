import React, { Component } from 'react';
import {
    StyleSheet, Picker, ListView,
    View, TouchableOpacity, TouchableHighlight,
    Image, Text, StatusBar
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class Settings extends Component {

    static navigationOptions = {
        header: {
            visible: true,
        }
    }

    render() {
        return(
            <KeyboardAwareScrollView style={styles.container}>
                <StatusBar backgroundColor="rgba(8, 135, 198, 0.9)" />

            </KeyboardAwareScrollView>
        );
    }


    constructor(props) {
        super(props);

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
            dataSource: dataSource.cloneWithRows({

            })
        };

        connectToBle = () => {
            alert('Connecting to device...');
        };
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(8, 135, 198)',
        // backgroundColor: 'skyblue',
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
        marginHorizontal: 30,
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
        marginHorizontal: 30,
        fontWeight: 'bold'
    }


})


{/* <TouchableOpacity onPress={ connectToBle } style={styles.startButton}>
<Text style={ styles.startText }>START</Text>
</TouchableOpacity>

<Text style={styles.optionsTitle}>Warm up</Text>
<Picker selectedValue={this.state.level}
style={styles.pickerStyle}
onValueChange={this.onValueChange.bind(this, 'level')}
prompt="Warm up"
enabled={true}
mode="dropdown">
<item style={styles.pickerStyle} label="Warm up workout" value="warm"></item>
<item style={styles.pickerStyle} label="Pulse workout" value="pulse"></item>
<item style={styles.pickerStyle}  label="Endurance workout" value="endurance"></item>
<item style={styles.pickerStyle} label="Steps workout" value="steps"></item>
<item style={styles.pickerStyle} label="Game Time workout" value="game"></item>
<item style={styles.pickerStyle} label="Vibe and Chill workout" value="vibe"></item>
</Picker>

<Text style={styles.optionsTitle}>Choose your level</Text>
<Picker selectedValue={this.state.level}
style={styles.pickerStyle}
onValueChange={this.onValueChange.bind(this, 'level')}
prompt="Vibe and Chill"
enabled={true}
mode="dropdown">
<item style={styles.pickerStyle} label="Level 1" value="level 1"></item>
<item style={styles.pickerStyle} label="Level 2" value="level 2"></item>
<item style={styles.pickerStyle} label="Level 3" value="level 3"></item>
<item style={styles.pickerStyle} label="Level 4" value="level 4"></item>
</Picker> */}
