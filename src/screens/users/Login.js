import React, { Component } from 'react';
import {
    StyleSheet,
    View, KeyboardAvoidingView,
    Image, Text, StatusBar
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SplashScreen from 'react-native-splash-screen';

import LoginForm from './loginForm';

export default class Login extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return(
            <KeyboardAwareScrollView style={styles.container}>
                <StatusBar backgroundColor="rgba(8, 135, 198, 0.9)" />
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/SplashCenter.png')}
                    />
                    <Text style={styles.logoSubtitle}>
                        This app is brought to you by Esseness
                    </Text>
                </View>

                <View style={styles.loginForm}>
                    <LoginForm />
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
    },

    logoSubtitle: {
        marginTop: 280,
        textAlign: 'center',
        opacity: 0.65,
    },

    logo: {
        // backgroundColor: 'red',
        // flex: 1,
        top: 150,
        // top: 421,
        width: 412,
        height: 152,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        position: 'absolute',
    }
})
