import {Platform} from 'react-native';
import React, {} from 'react';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import Color from '../common/Color'


const styles = {

    BaseUrl: "https:///",
    // PasswordValidation: '\nMust contain 1 lowercase character,\n1 Uppercase character,\n1 Numeric character,\nAt least one special character,\nMust be 8 characters or longer.',
    PasswordValidation: 'Password must be a minimum of 8 characters, contain one uppercase character, and one numeric character.',
    //PasswordValidationLabel: 'Must contain 1 lowercase character, 1 uppercase character,1 numeric character,at least one special character,must be 8 characters or longer.',
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
    //For SHARE


    blankFooterStyle: {
        flex: .7,
        backgroundColor: Color.lightGray
    },
    headerWithBackView: {
        height: Platform.OS === 'ios' ? responsiveHeight(7.6) : responsiveHeight(8)
    },
    input: {
        marginTop: responsiveHeight(1),
        marginBottom: responsiveHeight(2),
        height: responsiveHeight(7),
        paddingLeft: responsiveWidth(3),
        width: responsiveWidth(80),
        fontSize: responsiveFontSize(2),
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        //backgroundColor: '#fff',
        flexDirection: 'row',
        padding: responsiveWidth(2),
    },
    lineStyle: {
        width: responsiveWidth(89),
        alignItems: 'center',
        marginLeft: responsiveWidth(.4),
        justifyContent: 'center',
        height: responsiveHeight(0.4),
        alignSelf: 'center',
        backgroundColor: '#DBDBDB',
    },
    buttonContainer: {
        backgroundColor: Color.black,
        width: responsiveWidth(80),
        height: responsiveHeight(7),
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