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


import VideoComponent from '../views/VideoComponent'
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import CommonStyle from '../common/CommonStyle';
import CustomProgressBar from "../views/CustomProgressBar";
import Header from "../views/header";
import {CardSection} from "../views/CardSection";

let {height} = Dimensions.get('window');
let {width} = Dimensions.get('window');

let box_count = 3;
let box_height = height / box_count;
let currentClassRef = null;
let Connected;


let paramsFromPrevScreen, jsonData;

export default class MainScreen extends Component {
    static navigationOptions = {
        header: null
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

    }

    render() {

        currentClassRef = this;
        console.disableYellowBox = true;
        const {navigation} = this.props;

        return (
            <View style={styles.mainContainer}>

                <ImageBackground source={require('../images/homebg.png')} style={styles.backgroundImage}>

                    {/*<StatusBar barStyle='light-content'
                               hidden={false}
                               backgroundColor="#00BCD4"
                               translucent={true}
                               networkActivityIndicatorVisible={true}/>*/}

                    <CustomProgressBar visible={this.state.isLoading}/>
                    <View style={CommonStyle.headerWithBackView}>
                        <Header headerText='Sports' navigationProp={this.props.navigation}/>
                    </View>

                    <View

                        style={{
                            flex: 1,
                            height: responsiveHeight(50),
                            width: responsiveWidth(100),
                        }}>
                        <VideoComponent/>
                    </View>
                    <View style={{
                        flex: 1,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
    },

    container: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignItems: 'center',

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

