import React from 'react';
import { Platform } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AddButton from '../../components/common/AddButton';
import MinusButton from '../../components/common/MinusButton'
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                paddingTop: heightToDp(4),
            },
            android: {
                paddingTop: heightToDp(5),
            }
        })
    },
    header_text: {
        fontSize: scaleFontSize(10),
        paddingLeft: widthToDp(4),
        fontWeight: 'bold',
        flexDirection: 'row',
    },
    Main_view: {
        flexDirection: 'row',
        paddingBottom: heightToDp('4%')
    },
    Subtotal_view: {
        position: 'absolute',
        right: widthToDp(3)
    },
    subtotal_font: {
        fontSize: scaleFontSize(10),
        color: '#b5b5b5'
    },
    sub_price: {
        color: '#00b970',
        fontWeight: 'bold'
    },
    map_container: {
        borderRadius: 5,
        flexDirection: 'row',
        width: widthToDp('93%'),
        marginLeft: '4%',
        paddingRight: widthToDp('5%'),
        borderColor: '#bfbfbf',
        borderWidth: 2,
        marginVertical: heightToDp('1%')
    },
    image_view: {
        width: '30%',
    },
    image: {
        width: widthToDp(30),
        height: heightToDp(14.5),
        borderRadius: 3
    },
    title_view: {
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: heightToDp('1%'),
        width: widthToDp('50%')
    },
    font_size: {
        fontSize: scaleFontSize(8.5)
    },
    price: {
        color: '#04b970',
        fontSize: scaleFontSize(6.5),
        fontWeight: 'bold',
        right: widthToDp(1)
    },
    discount: {
        textDecorationLine: 'line-through',
        color: '#b5b5b5',
        fontSize: scaleFontSize(6.5),
        right: widthToDp(1)
    },
    button_bar: {
        flexDirection: 'row',
        position: 'absolute',
        right: widthToDp(1.5),
        bottom: widthToDp(1.5)
    },
    Quantity: {
        fontSize: scaleFontSize(10),
        textAlign: 'center',
        justifyContent: 'center',
        paddingHorizontal: widthToDp(4),
        paddingTop: heightToDp(.4)
    },
    price_view: {
        alignItems: 'center',
        paddingTop: heightToDp('1%')
    },
    button_view: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#b5b5b5',
        height: heightToDp(10),
        marginBottom: heightToDp(1)
    },
    paddVertical: {
        paddingVertical: heightToDp(2),
    },
    button: {
        backgroundColor: '#00b970',
        height: heightToDp(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: widthToDp('5%'),
        marginRight: widthToDp('5%'),
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: scaleFontSize(10)
    },
});
const Cart = ({ navigation }) => {

    const Images = [
        { id: 1, title: 'Subway sandwich', Price: "9.00", Discount: "10.00", Quantity: 2, Path: require('../../assets/images/subway.png') },
        { id: 2, title: 'Pizza Margarita', Price: "20.00", Discount: "25.00", Quantity: 1, Path: require('../../assets/images/marg_pizza.png') },
        { id: 3, title: 'Chocolate cake', Price: "30.00", Discount: "33.00", Quantity: 2, Path: require('../../assets/images/cake.png') },

    ]
    return (
        <View style={styles.container}>
            <View style={styles.Main_view}>
                <Text style={styles.header_text}>Cart</Text>
                <View style={styles.Subtotal_view}>
                    <Text style={styles.subtotal_font}>Subtotal:
                       <Text style={styles.sub_price}> $ 98.00</Text>
                    </Text>
                </View>
            </View>
            <View style={{height:heightToDp(70)}}>
                {
                    Images.map((item, i) => {
                        return (
                            <View key={i}
                                style={styles.map_container}>
                                <View style={styles.image_view} >
                                    <Image source={item.Path}
                                        style={styles.image} />
                                </View>
                                <View style={styles.title_view}>
                                    <Text style={styles.font_size}>{item.title}</Text>
                                </View>
                                <View style={styles.price_view}>
                                    <Text style={styles.price}>
                                        $ {item.Price}
                                    </Text>
                                    <Text style={styles.discount}>
                                        $ {item.Discount}
                                    </Text>
                                </View>
                                <View style={styles.button_bar}>
                                    <MinusButton />
                                    <Text style={styles.Quantity}>
                                        {item.Quantity}
                                    </Text>
                                    <AddButton />
                                </View>
                            </View>
                        )
                    })
                }
                </View>
            <View style={styles.button_view}>
                <TouchableOpacity style={styles.paddVertical} onPress={() => navigation.navigate("address")}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Checkout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Cart;