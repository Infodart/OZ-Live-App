import React, {Component} from 'react';

//Import Controls
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
    NetInfo, BackHandler, StatusBar
} from 'react-native';


//Screen to navigate
import {
    MainScreenNew
} from '.././util/screenNames'

//Imported Library for responsive screens for different platforms
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

//Imported class for getting CommonStyles
import CommonStyle from '../common/CommonStyle';

//Imported Custom ProgressBAr View
import CustomProgressBar from "../views/CustomProgressBar";

//Imported ColorStyle Classs
import ColorStyle from "../common/Color";


//Variables used in this component
let {height} = Dimensions.get('window'), currentClassRef = null, Connected;


export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {

        super(props);


        //Defined states used in this component
        this.state = {
            isLoading: false,
            username: '',
            password: '',
        }


        //For handling BackPress in Android
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }

    componentWillMount() {

        //Added BackPress Listener
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }


    //On BackPress Event
    handleBackButtonClick() {
        BackHandler.exitApp()
        return true;
    }


    componentDidMount() {

        //Assigned current class Reference for using in events
        currentClassRef = this;

        //For Checking Network Connection
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);
        NetInfo.isConnected.fetch()
            .then((isConnected) => {
                Connected = isConnected;
            })
    }


    //Method to check Internet connection available or not
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

    componentWillUnmount() {

        //Removed Added Listeners
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);

    }

    render() {
        //Assigned current class props to a constant variable
        const {navigation} = this.props;

        return (
            <View style={styles.mainContainer}>
                <ScrollView
                    alwaysBounceVertical={false}>
                    <ImageBackground source={require('../images/loginbg.png')} style={styles.backgroundImage}>

                        <StatusBar barStyle='light-content'
                                   hidden={false}
                                   backgroundColor={ColorStyle.red}
                                   translucent={true}
                                   networkActivityIndicatorVisible={true}/>

                        <CustomProgressBar visible={this.state.isLoading}/>

                        <View>

                            {this.midData(navigation)}


                        </View>
                    </ImageBackground>
                </ScrollView>
            </View>

        );


    }


    //For displaying view
    midData(navigation) {
        return (

            <View style={styles.container}>

                <View style={{
                    alignItems: 'center',
                    marginTop: responsiveHeight(10),

                }}>

                    <View
                        style={{
                            width: responsiveWidth(80),
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            flexDirection: 'row',
                            height: responsiveHeight(8)
                        }}
                        underlayColor='#fff'>
                        <Image
                            style={{
                                marginLeft: responsiveWidth(5),
                                padding: responsiveHeight(.5),
                                alignSelf: 'center',
                                height: responsiveWidth(5), width: responsiveWidth(5)
                            }}
                            source={require('../images/mail.png')}
                        />

                        <TextInput style={CommonStyle.input}
                                   multiline={false}
                                   autoCapitalize="none"
                                   underlineColorAndroid='transparent'
                                   placeholder="email"
                                   placeholderTextColor='black'
                                   returnKeyType='next'
                                   autoCorrect={false}
                                   onSubmitEditing={() => this.refs.txtPassword.focus()}
                                   value={this.state.username}
                                   onChangeText={(text) => this.setState({username: text})}

                        />

                    </View>


                    <View
                        style={CommonStyle.lineStyle}
                    />
                    <View
                        style={{
                            width: responsiveWidth(80),
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            flexDirection: 'row',
                            height: responsiveHeight(8)
                        }}
                        underlayColor='#fff'>
                        <Image
                            style={{
                                marginLeft: responsiveWidth(5),
                                padding: responsiveHeight(.5),
                                alignSelf: 'center',
                                height: responsiveWidth(5), width: responsiveWidth(5)
                            }}
                            source={require('../images/password.png')}
                        />

                        <TextInput style={CommonStyle.input}
                                   maxLength={CommonStyle.passwordLength}
                                   underlineColorAndroid='transparent'
                                   placeholder="password"
                                   contextMenuHidden={true}
                                   placeholderTextColor='black'
                                   returnKeyType='go'
                                   autoCorrect={false}
                                   secureTextEntry={true}
                                   ref={"txtPassword"}
                                   value={this.state.password}
                                   onChangeText={(text) => this.setState({password: text})}
                        />
                    </View>

                </View>
                <TouchableOpacity style={CommonStyle.buttonContainer}

                                  onPress={() => {
                                      this.props.navigation.navigate(MainScreenNew);
                                  }}
                >
                    <Text style={CommonStyle.buttonText}
                    >Continue</Text>
                </TouchableOpacity>

            </View>
        );
    }

}


const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: undefined,
        height: height,
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
        marginTop: responsiveHeight(30),
        height: height
    },
});

