import React, { Component} from 'react';
import {
    StyleSheet,
    View, KeyboardAvoidingView,
    Image, Text
} from 'react-native';
import LoginForm from './loginForm';

export default class Login extends Component {
    render() {
        return(
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('./../SplashCenter.png')}
                    />
                    <Text style={styles.logoSubtitle}>
                        This app is brought to you by Essness
                    </Text>
                </View>

                <View style={styles.loginForm}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
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
