
import React from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import CommonStyle from "../common/CommonStyle";

const Header = (props) => {


    return(
        <View style={CommonStyle.headerviewStyle} >
            <TouchableOpacity

                onPress={()=>{props.navigationProp.pop()}}>
                <View style={{width:'50%',height:'100%',marginLeft:responsiveWidth(1),
                    flexDirection:'row',alignItems:'center',justifyContent:'center'}} >
                    <Image style={{height:responsiveHeight(5),width:responsiveWidth(5)}}
                           source={require('../images/backArrow.png')}>
                    </Image>

                </View>
            </TouchableOpacity>

            <Text style={CommonStyle.headertextStyle}>{props.headerText}</Text>

        </View>


    );

};
export default Header;