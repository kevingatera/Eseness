import React, { Component} from 'react';
import {
    StyleSheet,
    View, TextInput, Picker,
    TouchableOpacity, Text
} from 'react-native';

export default class LoginForm extends Component {
    render(){
        return (
            <View style={styles.container}>
                {/* <Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker> */}
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    keyboardType="email-address" // determine the type of keyBoard to Username to use
                    autoCapitalize="none" // Mostly for iOS
                    autoCorrect={false} // Mostly for iOS
                    placeholder="Enter your username"
                    placeholderTextColor="rgba(28, 133, 184, 0.48)"
                    returnKeytype="next" // This changes the returnKey label in iOS
                    // The line below instructs the cursor to move to the next field
                    ref={(input) => this.emailInput = input}
                    onSubmitEditing = {() => this.emailInput.focus()}
                    onChangeText = {(username) => this.setState({username})}
                    value={this.state.username}
                    style={styles.input}
                />

                <TextInput underlineColor='rgba(0,0,0,0)'
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    placeholder = "Enter your email"
                    placeholderTextColor = 'rgba(28, 133, 184, 0.48)'
                    returnKeytype="next"
                    ref={(input) => this.emailInput = input}
                    onSubmitEditing = {() => this.passwordInput.focus()}
                    onChangeText = {(email) => this.setState({email})}
                    value={this.state.email}
                    style={styles.input}
                />

                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor="rgba(28, 133, 184, 0.48)"
                    secureTextEntry // This hides the password input
                    returnKeytype="go" // This changes the returnKey label in iOS
                    placeholder="Enter your password"
                    onChangeText = {(password) => this.setState({password})}
                    value={this.state.password}
                    // Function to Assign the input to a variable for reference purposes
                    ref={(input) => this.passwordInput = input }
                    style={styles.input} />
                <TouchableOpacity onPress={loginUser} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}> Signup </Text>
                </TouchableOpacity>
            </View>
        );
    }

    /* The followwing will define state in order to avoid the "null is not an object" error */

    constructor(props){
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null,
        }

        loginUser = () => {
            // alert(this.state.password); // This is a test line
            fetch('https://kevingatera.com/api/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(ApiUtils.checkStatus)
            .then((response) => response.json())
            .then((res) => {
                if(res.success === true) {
                    alert(res.message)
                } else {
                    alert(res.message)
                }
            }).catch(function(error) {
                alert('There has been a problem with your fetch operation: ' + error.message);
            })
        };

        var ApiUtils = {
          checkStatus: function(response) {
            if (response.status >= 200 && response.status < 300) {
              return response;
            } else {
              let error = new Error(response.statusText);
              error.response = response;
              throw error;
            }
          }
        };
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
        paddingHorizontal: 8, // For padding the text inside the textBox
        borderRadius: 15,
        color: '#1c85b8',
        fontSize: 20,
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
        fontSize: 25,
        fontWeight: 'bold',
    }
})
