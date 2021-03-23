import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        alignItems: 'center'
    },
    image: {
        height: 116,
        width: 116,
        borderRadius: 75
    }
})

const RoundImage = ({ source, style, text }) => {

    return (

        <View style={styles.container}>
            <Image source={source}
                style={styles.image} />
            <Text style={style}>{text}</Text>

        </View>
    );
};

export default RoundImage;
