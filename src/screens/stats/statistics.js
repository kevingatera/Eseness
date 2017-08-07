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



export default class Statistics extends Component {

    

    onPickerSelect = (index) => {
        this.setState({
            selectedItem: index,
        })
    };

    switchList = () => {
        this.setState({
            questionIndex: 1,
            itemList: levelList,
        })
    };

    onAddItem = () => {
        var name = '司马懿'
        if (this.state.itemList.indexOf(name) == -1) {
            this.state.itemList.push(name)
        }
        this.setState({
            selectedItem: this.state.itemList.indexOf(name),
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Picker
                    style={{width: 300, height: 200}}
                    selectedValue={this.state.selectedItem}
                    itemStyle={{color:"white", fontSize:26}}
                    onValueChange={(index) => {
                        // this.switchList();
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
                    onPress={this.switchList}>
                    Humm... Wanna change the level of fun?
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
              selectedItem : 2,
              itemList: vibeList,
          }
      }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1962dd',
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
      marginVertical: 20,
      marginHorizontal: 50,
      alignItems: 'center',
      borderRadius: 80,
      padding: 20,
  },

  startText: {
      color: 'rgb(124, 175, 235)',
      fontSize: 50,
      justifyContent: 'center',
  },
});
