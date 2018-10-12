import {Platform} from 'react-native';
import React, {} from 'react';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import Color from '../common/Color'


const styles = {

    BaseUrl: "https:///",
    PasswordValidation: 'Password must be a minimum of 8 characters, contain one uppercase character, and one numeric character.',
    PasswordValidationLabel: 'Password must be a minimum of 8 characters, contain one uppercase character, and one numeric character.',

    //Message


    passwordEmpty: 'Please enter password.',
    passwordMismatch: 'New password and confirm password mismatch.',
    passwordLength: 25,
    noInternet: 'No internet connection!',
    noInternetRetry: 'No internet connection, Do you want to retry?',

    noData: 'No data found.',

    noResponse: 'No response from server, Do you want to retry?',

    timeout: 25000,


    headerWithBackView: {
        flex:1,
        height: Platform.OS === 'ios' ? responsiveHeight(2) : responsiveHeight(10),
        marginTop:Platform.OS === 'ios' ? responsiveHeight(0) : responsiveHeight(3),
        width:'100%'
    },
    headerTextStyle: {
        color: Color.whiteColor,
        fontSize: responsiveFontSize(3.5),
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        marginLeft: responsiveWidth(12)
    },
    headerViewStyle:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'red',
        height:responsiveHeight(70),
        width:'100%'
    },
    input: {
        marginLeft:responsiveWidth(3),
        height: responsiveHeight(7),
        paddingLeft: responsiveWidth(3),
        width: responsiveWidth(80),
        fontSize: responsiveFontSize(2),
        alignSelf: 'center',
        color:'black'
    },
    lineStyle: {
        width: responsiveWidth(80),
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(0.2),
        alignSelf: 'center',
        backgroundColor: '#d40b27',
    },
    buttonContainer: {
        backgroundColor: Color.black,
        width: responsiveWidth(80),
        height: responsiveHeight(9),
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center',
        alignSelf: 'center'
    }
    ,
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.5),

    },


}


export default styles;