import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import {widthToDp,heightToDp, scaleFontSize} from '../../theme/Responsive'
import NormalButton from '../../components/common/NormalButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#00b970',
        height:heightToDp(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:heightToDp('3%'),
        borderRadius: 5,
        marginRight:heightToDp('3%'),
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:scaleFontSize(10)
    },
    checkout_view: {
        borderBottomWidth: 2,
        paddingBottom:heightToDp(2),
        borderBottomColor: '#eaeaea'
    },
    checkout_text: {
        textAlign: 'center',
        fontSize:scaleFontSize(10),
        fontWeight: 'bold'
    },
    header_decor: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:heightToDp(2),
        paddingHorizontal: widthToDp(4)
    },
    header_text: {
        width:widthToDp('25%'),
        textAlign: 'center',
        justifyContent: 'center',
        fontSize:scaleFontSize(8),
        fontWeight: 'bold',
        color: '#afafb0'
    },
    line_decor: {
        textAlign: 'center',
        width:widthToDp('15%'),
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
        color: '#00b970'
    },
    place_order: {
        width:widthToDp('20%'),
        textAlign: 'center',
        justifyContent: 'center',
        color: '#00b970',
        fontSize:scaleFontSize(8),
        fontWeight: 'bold'
    },
    headings: {
        fontSize:scaleFontSize(10),
        color: '#afafb0',
        paddingTop:heightToDp(5)
    },
    headingss: {
        fontSize: scaleFontSize(10),
        color: '#afafb0',
        paddingTop:heightToDp(2)
    },
    padding: {
        paddingTop:heightToDp(4)
    },
    sub_heading: {
        fontSize: scaleFontSize(10),
        paddingVertical:heightToDp(2)
    },
    button_view: {
        flexDirection: 'column',
        paddingTop:heightToDp(25)
    },
    paddVertical: {
        paddingVertical:heightToDp(1),
    },
    left: {
        left:widthToDp(2)
    },
    amount_view: {
        flexDirection: 'row',
        paddingHorizontal:widthToDp(2)
    },
    font_size: {
        fontSize:scaleFontSize(10)
    },
    paddRight: {
        paddingRight:widthToDp('44%'),
        fontSize: scaleFontSize(10)
    }
});

const PlaceOrder = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.checkout_view}>
                <View style={styles.header_decor}>
                    <Text style={styles.header_text}>Delivery address</Text>
                    <Text style={styles.line_decor}> ____</Text>
                    <Text style={styles.header_text}>Payement method</Text>
                    <Text style={styles.line_decor}> ____</Text>
                    <Text style={styles.place_order}>Place order</Text>
                </View>
            </View>
            <View style={styles.left}>
                <Text style={styles.headings} >Delivery Address</Text>
                <Text style={styles.sub_heading}>455 Larkspur Dr.,Baviera, 92908</Text>
            </View>
            <View style={styles.paddVertical, styles.left}>
                <Text style={styles.headingss}>Payement Method</Text>
                <Text style={styles.sub_heading}>XXXX XXXX XXXX 3456</Text>
            </View>
            <View style={styles.left}>
                <Text style={styles.headingss} >Your Order</Text>
            </View>
            <View style={styles.amount_view}>
                <Text style={styles.paddRight}>Total amount</Text>
                <Text style={styles.font_size}>$ 75.40</Text>
            </View>
            <View style={styles.button_view}>
                <TouchableOpacity style={styles.paddVertical} onPress={()=> navigation.navigate('favorites')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Place Order </Text>
                    </View>
                </TouchableOpacity>
                <NormalButton text={"Back"} />
            </View>
        </View>
    );
};
export default PlaceOrder;
