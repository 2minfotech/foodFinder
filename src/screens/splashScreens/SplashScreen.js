import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import  images  from '../../theme/images';
import Onboarding from 'react-native-onboarding-swiper';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const { height, width } = Dimensions.get("window");
const height_logo = height * 0.34;
const width_logo = width * 0.99

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',       
    },
    logo: {
        width: width_logo,
        height: height_logo
    },
    innerText: {
        marginBottom:heightToDp(10),
        justifyContent:'center',
        textAlign:'center',
        width:widthToDp('85%')
    }
});

const SplashScreen = () => {
      return (
        <View style={styles.container}>          
            <Animatable.Image
                animation="bounceIn"
                duraton="1500"
                source={images.splash_img}
                style={styles.logo}
                resizeMode="stretch"
            />
           <View style={styles.innerText}>
                <Text style={{fontSize:scaleFontSize(12),textAlign:'center',paddingBottom:heightToDp(2)}}>Find your flavour</Text>
                <Text style={{textAlign:'center',letterSpacing:1,fontSize:scaleFontSize(6)}}>Easy and fast way to order food from the best local restaurant </Text>
           </View>
        </View>
    );
};
export default SplashScreen;
