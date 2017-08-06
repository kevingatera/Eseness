package com.eseness;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import com.cboy.rn.splashscreen.SplashScreen; // For the React-native-splashscreen

public class MainActivity extends ReactActivity {

    // For the react-native SplashScreen
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // For the React-native-splashscreen
        super.onCreate(savedInstanceState);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Eseness";
    }
}
