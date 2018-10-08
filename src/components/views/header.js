
import React from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity, AsyncStorage, TouchableWithoutFeedback} from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import Color from '../common/Color'
let {height} = Dimensions.get('window');
const styles = {
    textStyle: {
        backgroundColor: Color.lightGray,
        color: Color.purple,
        fontSize: responsiveFontSize(3.5),
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
    },
    lineStyle: {
        marginTop: responsiveWidth(1),
        width: responsiveWidth(24),
        alignItems: 'center',
        justifyContent: 'center',

        height: responsiveHeight(0.15),
        alignSelf: 'center',
        backgroundColor: Color.whiteColor,
    },
    shareTextStyle: {
        backgroundColor: Color.lightGray,
        color: Color.purple,
        fontSize: responsiveFontSize(2),
        textAlign: 'right',
        // fontFamily: "Bilbo_Regular",
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Color.headerBarColor,
        height: responsiveHeight(12),
        alignItems: 'center',
        justifyContent: 'center',

    },
    singleTextStyle: {
        color: Color.purple,
        fontSize: responsiveFontSize(3.5),
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        // fontFamily: 'Bilbo_Regular',
    },
    singleViewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.darkGray,
        height: responsiveHeight(12),
        width: '100%'
    }


};

let Social = '';
const Header = (props) => {


    const {textStyle, viewStyle, singleTextStyle, singleViewStyle} = styles;


    return (

        <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Color.headerBarColor,
            justifyContent: 'space-between',
        }}>
            <View/>
            <View style={{alignItems: 'stretch'}}>
                <Image style={{
                    tintColor: Color.whiteColor,
                    height: responsiveWidth(7), width: responsiveWidth(25), resizeMode: 'cover'

                }}
                       source={require('../images/app_logo.png')}>
                </Image>
            </View>

            <View/>
        </View>


    );

};
export default Header;