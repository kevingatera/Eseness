'use strict';

import React from 'react';
import {
	KeyboardAvoidingView,
	Platform,
	View,
} from 'react-native';

export default class KeyboardView extends React.Component {

	/*
	 * This only works with android:windowSoftInputMode="adjustResize"
	 * set in AndroidManifest.xml.
	*/

  render() {
  	if (Platform.OS === 'android') {
  		return (
  			<View style={this.props.style}>
      		{this.props.children}
    		</View>
  		);
  	}
  	else {
  		return (
  			<KeyboardAvoidingView {...this.props}>
      		{this.props.children}
      	</KeyboardAvoidingView>
  		);
  	}
  }

}
