import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        alignSelf:'center',
        fontSize:20
    }
});

const SubmitButton = (props) => {
    const { text ,style,onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style}>
                <Text style={styles.buttonText}> {text} </Text>
            </View>
        </TouchableOpacity>
    );
};
export default SubmitButton;
