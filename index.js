
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';


//Navigation Screen
import Splash from './src/components/screens/Splash'
import LoginScreen from './src/components/screens/LoginScreen'
import MainScreenNew from "./src/components/screens/MainScreenNew";

import {StackNavigator} from 'react-navigation';

import React from 'react'

//Added Screens to StackNavigator
const NavigationModule = StackNavigator(
    {
        SplashScreen: {
            screen: Splash,
            navigationOptions: null,
        },
        LoginScreen: {
            screen: LoginScreen,
        }, MainScreenNew: {
            screen: MainScreenNew,
        }
    }
    , {
        initialRouteName: 'SplashScreen'        //First Screen
    }
);


AppRegistry.registerComponent(appName, () => NavigationModule);
