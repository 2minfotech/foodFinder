import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    buttonText: {
        color: '#ffffff',
        width:'100%',
        textAlign:'center',
        fontSize:30
    },
    button: {
        color: 'white',
        backgroundColor: '#b90039',
        width: 40,
        borderRadius: 20,
        height:40,
        justifyContent:"space-around"
    }
});

const AddButton = () => {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </View> 
        </TouchableOpacity>
    );
};
export default AddButton;
