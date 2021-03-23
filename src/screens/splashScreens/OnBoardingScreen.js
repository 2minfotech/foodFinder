import React from 'react';
import { View,  Image, StyleSheet, Dimensions } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { images } from '../../theme';


const OnBoardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Onboarding
      onDone={()=> navigation.navigate('Food Finder')}
      onSkip= {() => navigation.navigate('All Categories')}
        pages={[
          {
            backgroundColor: 'white',
            image: <Image source={require('../../assets/images/A_01_Welcome_Fotor.png')} />,
            title: 'Find your flavour',
            subtitle: 'Easy and fast way to order food from the best local restaurant ',
          },
          {
            backgroundColor: 'white',
            image: <Image source={images.splash_img} />,
            title: 'Find your flavour',
            subtitle: 'Easy and fast way to order food from the best local restaurant ',
          },
          {
            backgroundColor: 'white',
            image: <Image source={images.splash_img} />,
            title: 'Find your flavour',
            subtitle: 'Easy and fast way to order food from the best local restaurant ',
          },
          {
            backgroundColor: 'white',
            image: <Image source={images.splash_img} />,
            title: 'Find your flavour',
            subtitle: 'Easy and fast way to order food from the best local restaurant ',
          },

        ]}
      />

    </View>
  );
};

const { height, width } = Dimensions.get("window");
const height_logo = height * 0.34;
const width_logo = width * 0.99

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: width_logo,
    height: height_logo
  },
});
export default OnBoardingScreen;
