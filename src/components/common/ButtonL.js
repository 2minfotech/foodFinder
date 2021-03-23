import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { scaleFontSize } from '../../theme/Responsive';

const styles = StyleSheet.create({
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize:scaleFontSize(7)
    }
});

const CommonButton = ({ text ,style,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style}>
                <Text style={styles.buttonText}> {text} </Text>
            </View>
        </TouchableOpacity>
    );
};


export default CommonButton;
