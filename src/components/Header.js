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

const HeaderScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HeaderScreen</Text>
        </View>
    );
};


export default HeaderScreen;
