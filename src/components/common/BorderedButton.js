import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthToDp } from '../../theme/Responsive';
const styles = StyleSheet.create({
    buttonText: {
    color:'#00b970' ,
    alignSelf:'center',
    fontSize:widthToDp(4),
    }
    });
const BorderedButton = ({text,style,onPress}) => {
    return (
        <TouchableOpacity  onPress={onPress}>
            <View style={style}> 
                <Text style={styles.buttonText}> {text} </Text>
            </View>
        </TouchableOpacity>
    );
};
export default BorderedButton;