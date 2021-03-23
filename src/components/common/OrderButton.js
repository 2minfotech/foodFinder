import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { heightToDp, scaleFontSize } from '../../theme/Responsive';

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        fontSize: scaleFontSize(11),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#b90039',
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        height:heightToDp(5),
        justifyContent: 'center'
    }
});

const OrderButton = ({ buttonTitle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}> {buttonTitle} </Text>
            </View>
        </TouchableOpacity>
    );
};
export default OrderButton;
