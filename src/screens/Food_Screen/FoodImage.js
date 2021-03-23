import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { heightToDp, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        alignItems: 'center'
    },
    image: {
        height:heightToDp(10),
        width:widthToDp(30),
        borderRadius: 5
    }
})
const FoodImage = ({ source, style, text }) => {
    return (
        <View style={styles.container}>
            <Image source={source} style={styles.image} />
            <Text style={style}>{text}</Text>
        </View>
    );
};
export default FoodImage;
