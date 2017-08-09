import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View, TouchableOpacity,
} from 'react-native';

import Picker from 'react-native-wheel-picker';

var Item = Picker.Item;
var levelList = ['Level 1', 'Level 2', 'Level 3', 'Level 4'];
var vibeList = ['Warm up', 'Pulse', 'Endurance', 'Steps', 'Game Time', 'Vibe & Chill']



export default class Workout extends Component {



    onPickerSelect = (index) => {
        this.setState({
            selectedItem: index,
        })
    };

    switchMoodAndLevel = () => {
        if (this.state.selectedOption === 1){
            // console.log('attempting to reset state');
            this.resetState();
        }
        else {
            this.setState({
                questionIndex: 1,
                selectedOption: 1,
                itemList: levelList,
            })
        }
    };

    /* ====== OPTION TO ADD SOMETHING ON THE LIST
    onAddItem = () => {
        var name = '司马懿'
        if (this.state.itemList.indexOf(name) == -1) {
            this.state.itemList.push(name)
        }
        this.setState({
            selectedItem: this.state.itemList.indexOf(name),
        })
    }; */

    render() {
        return (
            <View style={styles.container}>
                <Picker
                    style={{width: 300, height: 200}}
                    selectedValue={this.state.selectedItem}
                    itemStyle={{color:'white', fontSize:40}}
                    onValueChange={(index) => {
                        // this.switchMoodAndLevel();
                        this.onPickerSelect(index)
                    }}>
                    {this.state.itemList.map((value, i) => (
                        <Item label={value} value={i} key={"money"+value}/>
                    ))}
                </Picker>
                <Text style={{margin: 50, fontSize: 20, color: '#ffffff'}}>
                    {this.state.questionList[this.state.questionIndex]}：{this.state.itemList[this.state.selectedItem]}
                </Text>
                <Text
                    style={{margin: 20, color: '#ffffff', textDecorationLine: 'underline'}}
                    onPress={this.switchMoodAndLevel}>
                    {this.state.optionsList[this.state.selectedOption]}
                </Text>
                <TouchableOpacity onPress={ connectToBle } style={styles.startButton}>
                    <Text style={ styles.startText }>START</Text>
                </TouchableOpacity>
            </View>
        );
    }

      constructor(props){
          super(props);

          this.state = {
              questionIndex: 0,
              questionList: [ 'What\'s your mood?', 'How hard do you like it?'  ],
              optionsList: [ 'Humm... Wanna change the level of fun?', 'Humm... Wanna change the mood?' ],
              selectedItem : 2,
              selectedOption: 0,
              itemList: vibeList,
          }

          // preserve the initial state in a new object
          this.baseState = this.state;

          // Reset the state
          this.resetState = () => {
            //   console.log('State was reset');
              this.setState(this.baseState);
          }

          connectToBle = () => {
              alert('Connecting to device...');
          };
      }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(8, 135, 198)',
    // backgroundColor: '#1962dd' // very blue
    // backgroundColor: '#b7eaff', // light blue
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  startButton: {
      backgroundColor: 'rgb(0, 41, 133)',
      marginTop: 40,
      marginHorizontal: 50,
      alignItems: 'center',
      borderRadius: 80,
      paddingHorizontal: 35,
      paddingVertical: 10,
  },

  startText: {
      color: 'rgb(124, 175, 235)',
      fontSize: 40,
      justifyContent: 'center',
  },
});
