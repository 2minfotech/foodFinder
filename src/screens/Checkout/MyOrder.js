import React from 'react';
import { Platform } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../theme/color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        ...Platform.select({
            ios: {
                paddingTop:heightToDp(6.5)
            },
            android: {
              paddingTop:heightToDp(6)
            },
        })
    },
    headerContainer: {
        borderBottomColor: Colors.iron,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 10,
        paddingBottom: heightToDp(3)
    },
    heading: {
        fontSize:scaleFontSize(12),
        fontWeight: 'bold'
    },
    order_container: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: Colors.iron,
        paddingBottom: heightToDp(1)
    },
    order_card: {
        paddingTop: heightToDp(2.5),
        borderColor: Colors.iron,
        borderWidth: 15
    },
    lightColor: {
        right: widthToDp(4),
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: heightToDp(2.5),
    },
    active_textDecor: {
        color: Colors.monza,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize:scaleFontSize(10),
    },
    active_tag: {
        backgroundColor: Colors.VanillaIce,
        borderRadius: 3,
        width: 120,
        height: 40,
        justifyContent: 'center'
    },
    cancel: {
        right: widthToDp(4),
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: heightToDp(2.5),
    },
    cancel_textDecor: {
        color: Colors.monza,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize:scaleFontSize(10),
    },
    cancel_tag: {
        backgroundColor: Colors.VanillaIce,
        borderRadius: 3,
        width: 120,
        height: 40,
        justifyContent: 'center'
    },
    price: {
        position: 'absolute',
        right: widthToDp(4),
        fontSize:scaleFontSize(9),
        textAlign: 'right',
        paddingTop:heightToDp(1)
    },
    dish_name: {
       left:widthToDp(4),
        fontSize:scaleFontSize(10)
    },
    order_no: {
        color:Colors.green,
        fontSize:scaleFontSize(10)
    },
    font20: {
        fontSize:scaleFontSize(10)
    },
    font16: {
        fontSize:scaleFontSize(8)
    },
    arrow_left: {
        position: 'absolute',
       left:widthToDp(4),
        top: 1
    },
    left20: {
       left:widthToDp(4)
    },
    ietms: {
        fontSize: scaleFontSize(9),
        textAlign: 'right'
    },
    pending: {
        color: Colors.monza,
        fontSize: scaleFontSize(9)
    },
    status_view: {
        left: widthToDp(4),
        paddingTop: heightToDp('1%')
    },
    status_container: {
        flexDirection: 'row',
        paddingBottom: heightToDp('1%')
    },
    details_view: {
        flexDirection: 'row',
        paddingTop: heightToDp('1%')
    },
    pizza: {
        paddingTop: heightToDp('1%')
    },
    item_container: {
        position: 'absolute',
        right: widthToDp(4)
    },
    onTheWay: {
        color: Colors.sushi,
        fontSize: scaleFontSize(9)
    }
})

const MyOrder = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Icon name="arrow-left" size={30} color={Colors.black} style={styles.arrow_left} />
                <Text style={styles.heading}>My Orders</Text>
            </View>
            <View style={styles.order_card}>
                <View style={styles.order_container}>
                    <View style={styles.left20}>
                        <Text style={styles.order_no}>Order #11</Text>
                        <Text style={styles.font16}>22 feb,2021</Text>
                    </View>
                    <View style={styles.item_container}>
                        <Text style={styles.font20}>$ 19.97</Text>
                        <Text style={styles.ietms}>3 items</Text>
                    </View>
                </View>
                <View style={styles.pizza}>
                    <View style={styles.details_view}>
                        <Text style={styles.dish_name}>Pizza</Text>
                        <Text style={styles.price}>$ 4.99</Text>
                    </View>
                    <View style={styles.details_view}>
                        <Text style={styles.dish_name}>Grill</Text>
                        <Text style={styles.price}>$ 8.99</Text>
                    </View>
                    <View style={styles.details_view}>
                        <Text style={styles.dish_name}>Pasta</Text>
                        <Text style={styles.price}>$ 5.99</Text>
                    </View>
                    <View style={styles.status_container}>
                        <View style={styles.status_view}>
                            <Text style={styles.font20}>Status</Text>
                            <Text style={styles.onTheWay}>On the way</Text>
                        </View>
                        <TouchableOpacity style={styles.lightColor}>
                            <View style={styles.active_tag}>
                                <Text style={styles.active_textDecor}>Track</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.order_card}>
                <View style={styles.order_container}>
                    <View style={styles.left20}>
                        <Text style={styles.order_no}>Order #10</Text>
                        <Text style={styles.font16}>18 feb,2021</Text>
                    </View>
                    <View style={styles.item_container}>
                        <Text style={styles.font20}>$ 33.96</Text>
                        <Text style={styles.ietms}>4 items</Text>
                    </View>
                </View>
                <View style={styles.pizza}>
                    <View style={styles.details_view}>
                        <Text style={styles.dish_name}>Pizza One</Text>
                        <Text style={styles.price}>$ 7.99</Text>
                    </View>
                    <View style={styles.details_view}>
                        <Text style={styles.dish_name}>Pizza Mozzarella</Text>
                        <Text style={styles.price}>$ 8.99</Text>
                    </View>
                    <View style={styles.details_view}>
                        <Text style={styles.dish_name}>Pizza Gorgonzola</Text>
                        <Text style={styles.price}>$ 6.99</Text>
                    </View>
                    <View style={styles.details_view}>
                        <Text style={styles.dish_name}>Pizza Funghi</Text>
                        <Text style={styles.price}>$ 9.99</Text>
                    </View>
                    <View style={styles.status_container}>
                        <View style={styles.status_view}>
                            <Text style={styles.font20}>Status</Text>
                            <Text style={styles.pending}>Pending delivery</Text>
                        </View>
                        <TouchableOpacity style={styles.cancel}>
                            <View style={styles.cancel_tag}>
                                <Text style={styles.cancel_textDecor}>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default MyOrder
