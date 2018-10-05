/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import SplashScreen from './src/components/screens/SplashScreen'
import LoginScreen from './src/components/screens/LoginScreen'


import {StackNavigator} from 'react-navigation';

import React, {Component} from 'react'

const NavigationModule = StackNavigator(
    {
        SplashScreen: {
            screen: SplashScreen,
            navigationOptions: null,
        },
        LoginScreen: {
            screen: LoginScreen,
        },
    }
    , {
        initialRouteName: 'SplashScreen'
    }
);


AppRegistry.registerComponent(appName, () => NavigationModule);
