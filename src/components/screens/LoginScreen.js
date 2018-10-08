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
    AsyncStorage,
    Alert,
    NetInfo, BackHandler
} from 'react-native';

import Button from 'react-native-button';
import {
    MainScreenTab,
} from '.././util/screenNames'
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import CommonStyle from '../common/CommonStyle';
import CustomProgressBar from "../views/CustomProgressBar";
import Header from "../views/header";

let {height} = Dimensions.get('window');
let box_count = 3;
let box_height = height / box_count;
let currentClassRef = null;
let Connected;


let userID, paramsFromPrevScreen;
export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {

        super(props);

        this.state = {
            isLoading: false,

            username: '',
            password: '',
            user: null,
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

               <ImageBackground source={require('../images/loginbg.png')} style={styles.backgroundImage}>
                <CustomProgressBar visible={this.state.isLoading}/>

                <View style={[styles.box, styles.box2]}>

                    {this.midData(navigation)}


                </View>
               </ImageBackground>
            </View>

        );


    }

    midData(navigation) {
        return (
            <ScrollView alwaysBounceVertical={false}>
                <View style={styles.container}>

                        <View style={{
                            alignItems: 'center',
                            marginTop: responsiveHeight(10),
                            backgroundColor:'white'
                        }}>

                            <TextInput style={CommonStyle.input}
                                       underlineColorAndroid='transparent'
                                       placeholder="email"
                                       placeholderTextColor='#C7C7C7'
                                       returnKeyType='next'
                                       autoCorrect={false}
                                       onSubmitEditing={() => this.refs.txtPassword.focus()}
                                       value={this.state.username}
                                       onChangeText={(text) => this.setState({username: text})}

                            />
                            <TextInput style={CommonStyle.input}
                                       maxLength={CommonStyle.passwordLength}
                                       underlineColorAndroid='transparent'
                                       placeholder="password"
                                       contextMenuHidden={true}
                                       placeholderTextColor='#C7C7C7'
                                       returnKeyType='go'
                                       autoCorrect={false}
                                       secureTextEntry={true}
                                       ref={"txtPassword"}
                                       value={this.state.password}
                                       onChangeText={(text) => this.setState({password: text})}
                            />
                        </View>
                        <View
                            styles={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                alignItems: 'flex-end',

                            }}>

                        </View>
                        <TouchableOpacity style={CommonStyle.buttonContainer}

                                          onPress={() => {


                                              /*     AsyncStorage.getItem('@LoginButtonClick').then((LoginButtonClick) => {
                                                       if (LoginButtonClick !== 'clicked') {
                                                           AsyncStorage.setItem('@LoginButtonClick', 'clicked');
                                                           this.validate(this.state.username, this.state.password);
                                                       }
                                                   }, (error) => {

                                                   });*/

                                          }}
                        >
                            <Text style={CommonStyle.buttonText}
                            >Continue</Text>
                        </TouchableOpacity>

                    </View>
            </ScrollView>
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


    validate(userId, password) {

        let username = userId.toLowerCase().trim();

        if (username.length > 0 && password.length > 0) {


            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(username) === false) {
                AsyncStorage.setItem('@LoginButtonClick', '');
                Alert.alert('', CommonStyle.emailIncorrect);
                this.setState({username: username})

            }
            else {

                if (!Connected) {
                    AsyncStorage.setItem('@LoginButtonClick', '');
                    return Alert.alert('', CommonStyle.noInternet)
                }

                this.setState({
                    isLoading: true
                });

                this.setState({username: username})

            }


        }
        else if (username.length === 0) {
            AsyncStorage.setItem('@LoginButtonClick', '');
            Alert.alert('', CommonStyle.emailEmpty);

        }
        else if (password.length === 0) {
            AsyncStorage.setItem('@LoginButtonClick', '');
            Alert.alert('', CommonStyle.passwordEmpty);
        }
    }
}


const styles = StyleSheet.create({

    backgroundImage:{
        flex:1,
        resizeMode:'cover',
        width: undefined,
        height: undefined,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
        minHeight: height
    },

    container: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
    },
});

