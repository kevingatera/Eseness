import React, { Component} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';

export default class LoginForm extends Component {
    render(){
        return (
            <KeyboardAvoidingView style={styles.container}>
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Username or email"
                    placeholderTextColor="rgba(28, 133, 184, 0.48)"
                    style={styles.input} />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor="rgba(28, 133, 184, 0.48)"
                    secureTextEntry
                    placeholder="password"
                    style={styles.input} />
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'blue',
        padding: 20,
        marginTop: 35,
        paddingHorizontal: 35,
    },
    input: {
        marginBottom: 15,
        paddingHorizontal: 10, // For padding the text inside the textBox
        borderRadius: 15,
        color: '#1c85b8',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: 'rgba(255,255,255,0.2)',
        textAlign: 'center',
    },
    loginButton: {
        padding: 10,
        marginTop: 12,
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: 'rgba(8, 135, 198, 0.5)',
    },
    loginButtonText: {
        color: '#02699c',
        fontSize: 15,
        fontWeight: 'bold',
    }
})
