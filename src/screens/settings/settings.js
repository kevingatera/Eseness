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

    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight underlayColor="blue" style={ { height: 40 } }>
                <View>
                    <Text style={styles.rowText}  numberOfLines={1}>
                            {rowData}
                    </Text>
                    <View style={{ height: 1, backgroundColor: 'green' }}></View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                style={styles.container}
                ></ListView>
        );
    }


    constructor(props) {
        super(props);
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

        var settingsList = ["Name:", "Age:", "Setup a reminder", "Clear all data"];

        this.state = {
            // Decide on how many rows the view is gonna have
            //  and send in data row by row
            dataSource: dataSource.cloneWithRows(settingsList)
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
    },

    rowText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },

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
