import React, {Component} from 'react';

import {StyleSheet, Text, View, AsyncStorage, Platform, BackHandler} from 'react-native';
import {
    LoginScreen,
    MainScreenTab,
} from '.././util/screenNames'
import {resetEntireBackStack, resetEntireBackStackWithParams} from "../util/RoutingFunctions";
import SplashScreen from 'react-native-splash-screen';

export default class Splash extends React.PureComponent {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        debugger
        super(props);

    }

    render() {
        console.disableYellowBox = true;
        return (
            <View>

            </View>
        );
    }

    componentDidMount() {
        const {navigation} = this.props;
        debugger
        SplashScreen.hide()

        resetEntireBackStack(LoginScreen, navigation);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#724CA8',

    }
})