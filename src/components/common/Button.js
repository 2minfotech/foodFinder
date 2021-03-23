import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize:widthToDp(4),
        textAlign:'center'
      
    }
});

const CommonButton = ({ text ,onPress,style}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style}>
                <Text style={styles.buttonText}> {text} </Text>
            </View>
        </TouchableOpacity>
    );
};

export default CommonButton;
