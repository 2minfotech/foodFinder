import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { scaleFontSize } from '../../theme/Responsive';

const styles = StyleSheet.create({
    buttonText: {
        color: 'black',
        textAlign:'center',
        fontSize:scaleFontSize(10)
    },
    button: {
        color: 'black',
        backgroundColor: 'white',
    }
});

const NormalButton = ({text,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View> 
        </TouchableOpacity>
    );
};
export default NormalButton;
