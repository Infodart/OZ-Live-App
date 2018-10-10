/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Splash from './src/components/screens/Splash'
import LoginScreen from './src/components/screens/LoginScreen'
import MainScreen from "./src/components/screens/MainScreen";

import {StackNavigator} from 'react-navigation';

import React, {Component} from 'react'


const NavigationModule = StackNavigator(
    {
        SplashScreen: {
            screen: Splash,
            navigationOptions: null,
        },
        LoginScreen: {
            screen: LoginScreen,
        },
        MainScreen: {
            screen: MainScreen,
        },
    }
    , {
        initialRouteName: 'SplashScreen'
    }
);


AppRegistry.registerComponent(appName, () => NavigationModule);
