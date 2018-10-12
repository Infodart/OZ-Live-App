import React, {Component} from 'react';

import {View} from 'react-native';

//Screen to navigate
import {
    LoginScreen,
} from '.././util/screenNames'

//For Navigation
import {resetEntireBackStack} from "../util/RoutingFunctions";

////Imported Library for SplashScreen
import SplashScreen from 'react-native-splash-screen';

export default class Splash extends React.PureComponent {


    //To disable the Header
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

    }
    render() {

        //To disable the yellow warning messages
        console.disableYellowBox = true;
        return (
            <View>

            </View>
        );
    }

    componentDidMount() {
        const {navigation} = this.props;

        //Hide SplashScreen
        SplashScreen.hide()



        //Navigate to LoginScreen
        resetEntireBackStack(LoginScreen, navigation);
    }
}