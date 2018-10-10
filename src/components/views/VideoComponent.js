import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import Video from 'react-native-video'
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
export default class VideoComponent extends React.Component {

    renderVideo () {
        return(
            <Video
                source={{uri: 'https://www.youtube.com/watch?v=7RaoCymNbuQ'}}
                style={{ width: '100%', height: responsiveHeight(43) }}
                muted={true}
                repeat={true}
                resizeMode={"cover"}
                volume={1.0}
                rate={1.0}
                ignoreSilentSwitch={"obey"}

            />
        )
    }

    render () {
        return (
            <View>
                {this.renderVideo()}
            </View>
        )
    }
}

// Later on in your styles..
var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});