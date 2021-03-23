import React from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageHorizontal from './ImageHorizontal'
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';
const styles = StyleSheet.create({
    container: {
        paddingTop: heightToDp(5),
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    images: {
        position: 'absolute',
        color: 'white',
        marginTop:heightToDp('5.5%'),
        fontSize:scaleFontSize(15),
        fontWeight: 'bold',

    },
    search_text: {
        paddingLeft:widthToDp(3),
        fontSize:scaleFontSize(12),
        fontWeight: 'bold',
        paddingBottom:heightToDp(.8)
    },
    View_container: {
        flexDirection: 'row',
        marginBottom: heightToDp(.5)
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#bfbfbf',
        backgroundColor: 'white',
        color: 'gray',
        height:heightToDp(5.5),
        paddingLeft:widthToDp(2),
        marginLeft:widthToDp(2),
        width:widthToDp('97%'),
    },
    icon_view: {
        position: 'absolute',
        right:widthToDp(2),
        width: widthToDp(15),
        height: heightToDp(4.8),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#00b970',
        borderRadius: 5
    }
});
const SearchFood = () => {
    const images = [
        { id: 1, Path: require('../../assets/images/pizzaa.png'), text: "Pizza" },
        { id: 2, Path: require('../../assets/images/grill.png'), text: "Grill" },
        { id: 3, Path: require('../../assets/images/pastaa.png'), text: "Pasta" },
        { id: 4, Path: require('../../assets/images/soups.png'), text: "Soups" },
        { id: 5, Path: require('../../assets/images/saladd.png'), text: "Salads" },
        { id: 6, Path: require('../../assets/images/dessert.png'), text: "Dessert" }
    ]
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.search_text}>Search</Text>
            </View>
            <View style={styles.View_container}>
                <TextInput
                    placeholder={"Food name or description"}
                    style={styles.textInput}
                />
                <View style={styles.icon_view}>
                    <Icon name="search" size={35} color="white" />
                </View>
            </View>
            <ScrollView style={{ paddingTop:heightToDp(3)}} showsVerticalScrollIndicator={false}>
                {
                    images.map((item, i) => {
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
export default SearchFood;
