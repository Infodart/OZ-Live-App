import React from 'react';

import {
    BackHandler,
    FlatList, Image,
    ImageBackground, NetInfo,
    StyleSheet,
    Text, TouchableWithoutFeedback,
    View
} from 'react-native'

//Imported Video Playing Library
import Video from 'react-native-af-video-player'

import CommonStyle from "../common/CommonStyle";
import Header from "../views/header";
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import CustomProgressBar from "../views/CustomProgressBar";

import {CardSection} from "../views/CardSection";

let jsonData, currentClassRef = null;

export default class MainScreenNew extends React.PureComponent {

    static navigationOptions = ({navigation}) => {
        const {state} = navigation

        const header = null
        const tabBarVisible = state.params ? state.params.fullscreen : true
        return {
            // If you're using stack navigators, you can hide the header bar like so
            header,
            // If you're using the tab navigators, you can hide the tab bar like so
            tabBarVisible,
        }
    }


    constructor(props) {

        super(props);

        currentClassRef = this;

        this.state = {
            isLoading: true,
            videoUrl: ''
        }

        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }


    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }


    componentDidMount() {
        currentClassRef = this;

        jsonData = require('../util/Channels.json');


        setTimeout(function () {

            currentClassRef.setState({
                isLoading: false,
                dataSource: jsonData.data,
                videoUrl: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8'
            })
        }, 500);

    }

    handleBackButtonClick() {
        this.props.navigation.pop();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    onFullScreen(status) {
        // Set the params to pass in the fullScreen status to navigationOptions
        this.props.navigation.setParams({
            fullscreen: !status
        })
    }

    render() {

        return (
            <View style={styles.container}>

                <Header style={CommonStyle.headerWithBackView} headerText='Sports'
                        navigationProp={this.props.navigation}
                />
                <CustomProgressBar visible={this.state.isLoading}/>

                {this.showVideo()}
                <ImageBackground source={require('../images/homebg.png')} style={styles.backgroundImage}>
                    <View style={{
                        marginTop: responsiveHeight(.5),
                        flex: 6,

                    }}>
                        <FlatList

                            alwaysBounceVertical={false}
                            data={this.state.dataSource}
                            ref={(ref) => {
                                this.flatListRef = ref;
                            }}
                            renderItem={({item, index}) =>

                                <View
                                    style={{flex: 1}}>

                                    {this.renderRow(item, index)}


                                </View>
                            }
                            numColumns={1}
                            keyExtractor={(item, index) => index}
                        />

                    </View>
                </ImageBackground>
            </View>
        )
    }

    showVideo() {

        if (this.state.videoUrl != '') {
            return (
                <Video
                    autoPlay
                    url={this.state.videoUrl}

                    onFullScreen={status => this.onFullScreen(status)}
                    rotateToFullScreen={true}
                />
            )
        }
        else {
            return (
                <View/>
            )
        }

    }

    renderRow(item, index) {


        console.log('item' + item)

        return (
            <TouchableWithoutFeedback onPress={() =>

                alert(item.description)
            }>
                <View style={{
                    marginTop: responsiveHeight(1),
                }}>
                    <CardSection>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}>

                            <Image
                                style={styles.TopicImage}
                                source={{uri: item.posterUrl}}>

                            </Image>
                            <View style={styles.TopicbackdropView}>
                                <Text style={styles.Topicheadline}>{item.name}</Text>
                                <Text style={styles.Topicdescription}>{item.description}</Text>
                            </View>

                        </View>

                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 6,
        resizeMode: 'cover',
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
    },
    TopicImage: {
        width: responsiveWidth(18),
        height: responsiveHeight(10),
        resizeMode: 'cover',
        marginRight: responsiveWidth(3),
    },
    TopicbackdropView: {
        marginTop: responsiveHeight(1),
        marginRight: responsiveHeight(1)
    },
    Topicheadline: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left'
    },
    Topicdescription: {
        height: responsiveHeight(5),
        paddingRight: responsiveWidth(10),
        width: responsiveWidth(80),
        marginTop: responsiveHeight(1),
        fontSize: responsiveFontSize(1.8),
        color: 'white'
    },
})
