import React from 'react';
import { Platform } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GrayAddButton from '../../components/common/GrayAddButton';
import GrayMinusButton from '../../components/common/GrayMinusbutton';
import Colors from '../../theme/color';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        ...Platform.select({
            ios: {
                paddingTop: heightToDp(5.5)
            },
            android: {
                paddingTop: heightToDp(6.5)
            }
        })
    },
    header_text: {
        fontSize: scaleFontSize(12),
        paddingLeft: widthToDp(4),
        fontWeight: 'bold',
        flexDirection: 'row',
    },
    Main_view: {
        flexDirection: 'row',
        paddingBottom: heightToDp('1.5%')
    },
    Subtotal_view: {
        position: 'absolute',
        right: widthToDp(3)
    },
    subtotal_font: {
        fontSize: scaleFontSize(12),
        color: Colors.Silver
    },
    sub_price: {
        color: Colors.green,
        fontWeight: 'bold'
    },
    map_container: {
        borderRadius: 5,
        flexDirection: 'row',
        width: '93%',
        marginLeft: widthToDp('4%'),
        paddingRight: widthToDp('5%'),
        borderColor: Colors.Silver,
        borderWidth: 2,
        marginVertical: heightToDp('1%')
    },
    image: {
        width: 110,
        height: 105,
        borderRadius: 10
    },
    title_view: {
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: heightToDp('2%'),
        width: '57%'
    },
    font_size: {
        fontSize: scaleFontSize(10)
    },
    price: {
        color: Colors.green,
        fontSize: scaleFontSize(9),
        fontWeight: 'bold',
        right: widthToDp(1)
    },
    discount: {
        textDecorationLine: 'line-through',
        color: Colors.Silver,
        fontSize: scaleFontSize(9),
        right: widthToDp(1)
    },
    button_bar: {
        flexDirection: 'row',
        position: 'absolute',
        right: widthToDp(2),
        bottom: heightToDp(1)
    },
    Quantity: {
        fontSize: scaleFontSize(13),
        textAlign: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 4
    },
    price_view: {
        alignItems: 'center',
        paddingTop: heightToDp('4%')
    },
    button_view: {
        width:widthToDp('45%'),
        marginTop:heightToDp('2.5%')
    },
    button: {
        backgroundColor: Colors.green,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:widthToDp('5%'),
        borderRadius: 25
    },
    buttonText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: scaleFontSize(12)
    },
    yellow_button_view: {
        width:widthToDp('45%'),
        marginTop: heightToDp('2.5%')

    },
    yellow_button: {
        backgroundColor: Colors.weborange,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:widthToDp('5%'),
        borderRadius: scaleFontSize(12)
    },
    yellow_buttonText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: scaleFontSize(12)
    },
    button_container: {
        flexDirection: 'row',
         width: '100%',
         paddingTop:heightToDp('4%'),
        backgroundColor: Colors.iron, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingBottom:heightToDp('12%')
    },
    Quantity: {
        fontSize: scaleFontSize(12),
         justifyContent: 'center',
          paddingHorizontal:widthToDp('8%'),
           alignSelf: 'center'
    },
    price: {
        fontSize: scaleFontSize(12), 
        fontWeight: 'bold',
         justifyContent: 'center', 
        alignSelf: 'center', 
        color: Colors.green, 
        marginRight: widthToDp(4)
    },
    price_container: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        right: widthToDp(2),
        paddingBottom: heightToDp(2.5)
    },
    discription: {
        fontSize: scaleFontSize(9),
        textAlign: 'left'
    },
    title: {
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
        paddingVertical: heightToDp('1%')
    },
    texts: {
        width: widthToDp('68%'),
        paddingLeft: widthToDp('5%'),
        paddingBottom: heightToDp('9%')
    },
    image_view: {
        paddingLeft: widthToDp('5%')
    },
    image_container: {
        flexDirection: 'row',
        width: '100%'
    },
    dynamic_container: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.Silver,
        paddingTop: heightToDp('2%')
    }
});

const CartAdd = ({ navigation }) => {

    const Images = [
        { id: 1, title: 'Pizza One', Price: "7.99", Quantity: 2, Path: require('../../assets/images/marg_pizza.png') },
        { id: 2, title: 'Beef', Price: "8.99", Quantity: 1, Path: require('../../assets/images/beef.png') },
        { id: 3, title: 'Fettuccine Pasta', Price: "11.99", Quantity: 2, Path: require('../../assets/images/pastaa.png') },

    ]
    return (
        <View style={styles.container}>
            <View style={styles.Main_view}>
                <Text style={styles.header_text}>Cart</Text>
                <View style={styles.Subtotal_view}>
                    <Text style={styles.subtotal_font}>Subtotal:
                      <Text style={styles.sub_price}> $ 45.95</Text>
                    </Text>
                </View>
            </View>
            {
                Images.map((item, i) => {
                    return (
                        <View key={i} style={styles.dynamic_container}>
                            <View style={styles.image_container}>
                                <View style={styles.image_view}>
                                    <Image source={item.Path} style={styles.image} />
                                </View>
                                <View style={styles.texts}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.discription}>Lorem Ipsum is simply dummy text of the typesetting industry </Text>
                                </View>
                            </View>
                            <View style={styles.price_container}>
                                <Text style={styles.price} >$ {item.Price}</Text>
                                <GrayMinusButton />
                                <Text style={styles.Quantity}>{item.Quantity}</Text>
                                <GrayAddButton />
                            </View>
                        </View>
                    )
                })
            }
            <View style={styles.button_container}>
                <View style={styles.yellow_button_view}>
                    <TouchableOpacity onPress={() => navigation.navigate("categories")}>
                        <View style={styles.yellow_button}>
                            <Text style={styles.yellow_buttonText}> Add More</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.button_view}>
                    <TouchableOpacity onPress={() => navigation.navigate("address")}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}> Checkout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
export default CartAdd;
