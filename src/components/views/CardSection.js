import React from 'react';
import {View} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';


const CardSection = (props) => {
    return (
        <View style={styles.cardSectionStyle}>
            {props.children}

        </View>

    );
};
export {CardSection};

const styles = {
    cardSectionStyle: {
        height: responsiveHeight(10),
        padding: responsiveHeight(2)
    }
}