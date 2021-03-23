import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

const FooterScreenww = () => {
    return (
        <View style={styles.container}>
            <Text>FooterScreenww</Text>
        </View>
    );
};
export default FooterScreenww;
