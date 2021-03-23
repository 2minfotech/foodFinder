import React from 'react';
import { View, Text, StyleSheet, Platform, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../theme/color';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                paddingTop:heightToDp(5.5)
            },
            android:{
                paddingTop:heightToDp(6.5)
            }
        }),
        flex: 1,
        backgroundColor: Colors.white,
        flexDirection: 'column'
    },
    search_text: {
        paddingLeft:widthToDp(2),
        fontSize:scaleFontSize(12),
        fontWeight: 'bold',
        paddingBottom:heightToDp(1)
    },
    View_container: {
        flexDirection: 'row',
        marginBottom:heightToDp(1),
        paddingTop:heightToDp('1%'),
        paddingHorizontal:widthToDp('2%')
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.silver,
        backgroundColor: 'white',
        color: Colors.gray,
        height: 55,
        paddingLeft:widthToDp(2),
        width:widthToDp('98%'),
        marginLeft:widthToDp(1),
        fontSize:scaleFontSize(10)
    },
    icon_view: {
        position: 'absolute',
        right:widthToDp(4),
        width: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.green,
        borderRadius: 5,
        top:heightToDp(2)
    },
    gray_filter: {
        width: widthToDp('18%'),
        backgroundColor: Colors.blackhaze,
        height: 50,
        justifyContent: 'center',
        borderRadius: 25,
        marginHorizontal:widthToDp('1.5%')
    },
    gray_filter_text: {
        fontSize: scaleFontSize(8),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image_container: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: Colors.gallery,
        paddingBottom:heightToDp('2%')
    },
    p_top: {
        paddingTop:heightToDp('1%')
    },
    price: {
        position: 'absolute',
        right: widthToDp(4),
        top: heightToDp(2),
        fontSize:scaleFontSize(10),
        fontWeight: 'bold',
        color: Colors.green
    },
    dish_name: {
        fontSize:scaleFontSize(10),
        fontWeight: 'bold'
    },
    dish_content: {
        fontSize: scaleFontSize(8), 
        width:widthToDp('60%'),
        paddingTop:heightToDp('2%'),
        color: Colors.gray
    },
    image_decor: {
        width: 120,
        height: 100,
        borderRadius: 25,
        marginLeft: '5%',
        marginTop:heightToDp('2.5%')
    },
    first_price: {
        position: 'absolute',
        right: widthToDp(4),
        top:heightToDp(1),
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
        color: Colors.green
    },
    offer: {
        fontSize: scaleFontSize(8),
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    offer_view: {
        width:widthToDp('30%'),
        backgroundColor: Colors.green,
        height: 50,
        justifyContent: 'center',
        borderRadius: 25,
        marginHorizontal:widthToDp('1%')
    },
    offer_container: {
        flexDirection: 'row',
        paddingHorizontal:widthToDp('2%'),
        marginVertical:heightToDp('2%')
    },
    second_container: {
        paddingTop:heightToDp('1%'),
        paddingHorizontal:widthToDp('1%') 
    }
});

const SearchFilter = () => {
    return (
        <View style={styles.container}>
            <View style={styles.second_container}>
                <Text style={styles.search_text}>Search</Text>
            </View>
            <View style={styles.View_container}>
                <TextInput
                    placeholder={"Food name or description"}
                    style={styles.textInput}
                />
                <View style={styles.icon_view}>
                    <Icon name="sort-amount-down-alt" size={30} color={Colors.white} />
                </View>
            </View>
            <View style={styles.offer_container}>
                <View style={styles.offer_view}>
                    <Text style={styles.offer}>Special offers</Text>
                </View>
                <View style={styles.gray_filter}>
                    <Text style={styles.gray_filter_text}>Dessert</Text>
                </View>
                <View style={styles.gray_filter}>
                    <Text style={styles.gray_filter_text}>Grill</Text>
                </View>
                <View style={styles.gray_filter}>
                    <Text style={styles.gray_filter_text}>Pasta</Text>
                </View>
            </View>
            <View style={styles.image_container}>
                <View>
                    <Image source={require('../../assets/images/subway.png')} style={styles.image_decor} />
                </View>
                <View style={styles.p_top}>
                    <Text style={styles.dish_name}>subway Sandwich</Text>
                    <Text style={styles.dish_content}>Ham sandwich with two servings of crisp on freshly baked brea...</Text>
                </View>
                <Text style={styles.first_price}> $ 8.49</Text>
            </View>
            <View style={[styles.image_container, styles.p_top]}>
                <View>
                    <Image source={require('../../assets/images/pizzaa.png')} style={styles.image_decor} />
                </View>
                <View style={styles.p_top}>
                    <Text style={styles.dish_name}>Pizza Margarita</Text>
                    <Text style={styles.dish_content}>Made with San Marzano tomatoes, mozzarella cheese, fresh basil salt a...</Text>
                </View>
                <Text style={styles.price}> $ 10.99</Text>
            </View>
            <View style={[styles.image_container, styles.p_top]}>
                <View>
                    <Image source={require('../../assets/images/cake.png')} style={styles.image_decor} />
                </View>
                <View style={styles.p_top}>
                    <Text style={styles.dish_name}>Chocolate Cake</Text>
                    <Text style={styles.dish_content}>Cake flavored with melted chocolate, cocoa powder...</Text>
                </View>
                <Text style={styles.price}> $ 4.99</Text>
            </View>
        </View>
    );
};
export default SearchFilter;