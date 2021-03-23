import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightToDp, scaleFontSize } from '../../theme/Responsive';
import ImageHorizontal from './ImageHorizontal';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                paddingTop:heightToDp(5),
            },
            android: {
                paddingTop:heightToDp(5),
            }
        }),
    },
    images: {
        position: 'absolute',
        color: 'white',
        marginTop:heightToDp('7%'),
        fontSize:scaleFontSize(12),
        fontWeight: 'bold',
       
    },
    headding_text: {
        textAlign: 'center',
        fontSize:scaleFontSize(12),
        fontWeight: 'bold',
        paddingBottom:heightToDp(2)
    }
});
const AllCategories = () => {
    const images = [
        { id: 1, Path: require('../../assets/images/pizzaa.png'), text: "Pizza" },
        { id: 2, Path: require('../../assets/images/grill.png'), text: "Grill" },
        { id: 3, Path: require('../../assets/images/pastaa.png'), text: "Pasta" },
        { id: 4, Path: require('../../assets/images/soups.png'), text: "Soups " },
        { id: 5, Path: require('../../assets/images/saladd.png'), text: "Salads" },
        { id: 6, Path: require('../../assets/images/dessert.png'), text: "Dessert" }
    ]
    return (
        <View style={styles.container}>
             <StatusBar style="dark" />
            <View >
                <Text style={styles.headding_text}>All Categories</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    images.map((item,i) => {
                        return (
                            <ImageHorizontal 
                            key={i}
                            source={item.Path}
                            text={item.text}
                            style={styles.images}                            
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    );
};
export default AllCategories;
