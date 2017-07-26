import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Splash extends Component {
    render() {
        const openingWaves = require('./SplashBottom.png');
        return (
            <View style={styles.SplashScreenWrapper}>
                <Image
                    style =
                    {
                        {
                            width: 412,
                            height: 152, /*backgroundColor: 'red',*/
                            justifyContent: 'space-between',
                            transform: [{rotate: '180deg'}],
                            position: 'absolute',
                            top: 0,
                            left: -1,
                            right: -1 /*paddingRight: 0*/
                        }
                    }
                    source={openingWaves}
                />
                <Image
                    style={
                        {
                            width: 412,
                            height: 152, /*backgroundColor: 'red',*/
                            justifyContent: 'center',
                            position: 'absolute',
                            left: -1,
                            right: -1,
                            alignItems: 'center'/*paddingRight: 0*/}}
                    source={require('./SplashCenter.png')}
                />

                <Image
                    style={{width: 412, height: 152, /*backgroundColor: 'red',*/ justifyContent: 'space-between', position: 'absolute', bottom: 0, left: -1, right: -1/*paddingRight: 0*/}}
                    /*<Text style={styles.SplashTitle}>Eseness</Text>
                    <Text style={styles.SplashSubtitle}>Young student innovation</Text>*/
                    source={openingWaves}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    SplashScreenWrapper: {
        backgroundColor: 'skyblue',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    SplashTitle: {
        fontSize: 45,
        fontWeight: 'bold',
    },
    SplashSubtitle: {
        fontWeight: '300',
    }
});
