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
<<<<<<< HEAD
                    source={ openingWaves }
=======
                    source={openingWaves}
>>>>>>> 2b94c1427e6b133269a5d46fccb62f6fdc873bee
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
<<<<<<< HEAD
                    source={ openingWaves }
=======
                    source={openingWaves}
>>>>>>> 2b94c1427e6b133269a5d46fccb62f6fdc873bee
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
