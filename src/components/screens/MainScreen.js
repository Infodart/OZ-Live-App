import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    ImageBackground,
    Dimensions,
    TextInput,
    TouchableOpacity,
    FlatList,
    Platform,
    AsyncStorage,
    Alert,
    NetInfo, BackHandler, StatusBar,
    TouchableWithoutFeedback
} from 'react-native';


import Video from 'react-native-af-video-player'
import Orientation from 'react-native-orientation';

import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import CommonStyle from '../common/CommonStyle';
import CustomProgressBar from "../views/CustomProgressBar";
import Header from "../views/header";
import {CardSection} from "../views/CardSection";
import Button from "react-native-button";

let {height} = Dimensions.get('window');
let {width} = Dimensions.get('window');

let box_count = 3;
let box_height = height / box_count;
let currentClassRef = null;
let Connected;


let paramsFromPrevScreen, jsonData;


const theme = {
    title: '#FFF',
    more: '#446984',
    center: '#7B8F99',
    fullscreen: '#446984',
    volume: '#A5957B',
    scrubberThumb: '#234458',
    scrubberBar: '#DBD5C7',
    seconds: '#DBD5C7',
    duration: '#DBD5C7',
    progress: '#446984',
    loading: '#DBD5C7'
}

export default class MainScreen extends Component {

    static navigationOptions = ({navigation}) => {

        const header = null
        const {state} = navigation
        // Setup the header and tabBarVisible status
        // const header = state.params && (state.params.fullscreen ? undefined : null)
        const tabBarVisible = state.params ? state.params.fullscreen : true
        return {
            // For stack navigators, you can hide the header bar like so
            header,
            // For the tab navigators, you can hide the tab bar like so
            tabBarVisible,
        }
    }

    constructor(props) {

        super(props);

        this.state = {
            isLoading: false,

        }

        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        try {
            AsyncStorage.setItem('@selectedIcon', '');

            paramsFromPrevScreen = this.props.navigation.state.params;
        } catch (error) {

        }


    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {

        BackHandler.exitApp()
        return true;
    }


    componentDidMount() {
        currentClassRef = this;
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);
        NetInfo.isConnected.fetch()
            .then((isConnected) => {
                Connected = isConnected;
            })


        jsonData = require('../util/Channels.json');


        this.setState({
            dataSource: jsonData.data,
        })
        //console.log('data',dataSource)
    }


    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);

        const initial = Orientation.getInitialOrientation();
        if (initial === 'PORTRAIT') {
            // do something
            Orientation.lockToPortrait();
        } else {
            // do something else
        }

    }

    play() {
        this.video.play()
        //this.video.seekTo(25)
    }

    pause() {
        this.video.pause()
    }

    onFullScreen(status) {
        // Set the params to pass in fullscreen status to navigationOptions
        this.props.navigation.setParams({
            fullscreen: !status
        })
    }

    render() {

        currentClassRef = this;
        console.disableYellowBox = true;
        const {navigation} = this.props;

        return (
            <View style={styles.mainContainer}>
                <View style={CommonStyle.headerWithBackView}>
                    <Header headerText='Sports' navigationProp={this.props.navigation}/>
                </View>
                <ScrollView style={styles.container}>

                    <ImageBackground source={require('../images/homebg.png')} style={styles.backgroundImage}>

                        {/*<StatusBar barStyle='light-content'
                               hidden={false}
                               backgroundColor="#00BCD4"
                               translucent={true}
                               networkActivityIndicatorVisible={true}/>*/}

                        <CustomProgressBar visible={this.state.isLoading}/>


                        <View
                            style={{
                                flex:1,
                                height: responsiveHeight(35),
                                width: undefined,
                            }}>
                            <Video
                                style={{
                                    height: responsiveHeight(35),
                                    width: undefined,
                                    resizeMode: 'cover'
                                }}
                                allowsExternalPlayback={true}
                                ignoreSilentSwitch={"obey"}
                                allowCrossProtocolRedirects={true}
                                hls={true}
                                autoPlay
                                onFullScreen={status => this.onFullScreen(status)}
                                loop={true}
                                rotateToFullScreen={true}
                                url={'http://www.archive.org/download/MickeyMouse-RunawayTrain/Film-42.mp4'}
                                ref={(ref) => {
                                    this.video = ref
                                }}
                                theme={theme}
                            />
                        </View>
                        <View style={{
                            flex: 9,
                            width: width,
                        }}>

                            {/*{this.midData(navigation)}*/}


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
                                onEndReachedThreshold={0.7}
                                numColumns={1}
                                keyExtractor={(item, index) => index}
                            />


                        </View>

                    </ImageBackground>
                </ScrollView>
            </View>

        );


    }

    renderRow(item, index) {


        console.log('item' + item)

        return (
            <TouchableWithoutFeedback onPress={() =>

                alert(item.description)
            }>
                <View style={{
                    marginTop: responsiveHeight(1.4),
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

    handleConnectionChange = (isConnected) => {
        this.setState({isConnected});
        Connected = isConnected;
        if (isConnected) {

            this.setState({Connected: isConnected});
            // console.log('is connected: ');

        } else {
            this.setState({Connected: isConnected});
            //console.log('Not connected: ');

        }
    }

}

const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
    },

    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    TopicImage: {
        width: responsiveWidth(18),
        height: responsiveHeight(10),
        resizeMode: 'cover',
        marginRight: responsiveWidth(3),
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
    TopicbackdropView: {
        marginTop: responsiveHeight(1),
        marginRight: responsiveHeight(1)
    },
});