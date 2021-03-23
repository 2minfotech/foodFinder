import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  Colors  from '../../theme/color';
import { widthToDp } from "../../theme/Responsive";

const styles = StyleSheet.create({
   buttonContainer: {
        width:widthToDp(75),
        height: 50,
        display: 'flex',
        flexDirection:'row',
        backgroundColor: "#db4437",
        marginBottom:15,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLogo: {
     position: 'absolute',
     left: 10
    },
    buttonText: {
        color: Colors.white,
        fontWeight: 'bold',
      textAlign: 'center',
    }   
});


const facebookButton = ({ text }) => {
    return (
        <TouchableOpacity >
            <View style={styles.buttonContainer}>
            <Icon name="google" size={35} color={Colors.white} style={styles.buttonLogo}/>
                <Text style={styles.buttonText}> {text} </Text>
            </View>
        </TouchableOpacity>
    );
};


export default facebookButton;

