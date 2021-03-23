import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import NormalButton from '../../components/common/NormalButton';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';
import VisaCard from '../Card/VisaCard';
import Colors from '../../theme/color'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.white
    },
    button: {
        backgroundColor:Colors.green,
        height:heightToDp(7),
        justifyContent:'center',
        alignItems:'center',
        marginLeft:widthToDp('5%'),
        marginRight:widthToDp('5%'),
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:scaleFontSize(12)
    },
    checkout_view: {
        borderBottomWidth: 2,
        paddingBottom:heightToDp(2),
        borderBottomColor:Colors.gallery
    },
    checkout_text: {
        textAlign: 'center',
        fontSize: scaleFontSize(12),
        fontWeight: 'bold'
    },
    header_decor: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:heightToDp(2.5),
        paddingHorizontal:widthToDp(4.5)
    },
    header_text: {
        width:widthToDp('25%'),
        textAlign: 'center',
        justifyContent: 'center',
        fontSize:scaleFontSize(9),
        fontWeight: 'bold',
        color:Colors.midGray
    },
    header_textt: {
        width:widthToDp('22%'),
        textAlign: 'center',
        justifyContent: 'center',
        fontSize:scaleFontSize(9),
        fontWeight: 'bold',
        color:Colors.midGray
    },
    line_decor: {
        textAlign: 'center',
        width:widthToDp('15%'),
        fontSize:scaleFontSize(9),
        fontWeight: 'bold',
        color: Colors.green
    },
    payment: {
        width:widthToDp('22%'),
        textAlign: 'center',
        justifyContent: 'center',
        color: Colors.green,
        fontSize: scaleFontSize(9),
        fontWeight: 'bold'
    },
    button_view: {
        flexDirection: 'column',
       marginBottom:20
    },
    paddVertical: {
        paddingVertical: 20,
    },
});

const CheckoutCard = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.checkout_view}>
               
                <View style={styles.header_decor}>
                    <Text style={styles.header_text}>Delivery address</Text>
                    <Text style={styles.line_decor}> ____</Text>
                    <Text style={styles.payment}>Payement method</Text>
                    <Text style={styles.line_decor}> ____</Text>
                    <Text style={styles.header_textt}>Place order</Text>
                </View>
            </View>
          <VisaCard />  
            <View style={styles.button_view}>
                <TouchableOpacity style={styles.paddVertical} onPress={()=> navigation.navigate('place_order')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Next</Text>
                    </View>
                </TouchableOpacity>
                <NormalButton text={"Back"} onPress={()=> navigation.navigate('address')}/>
            </View>
        </View>
    );
};
export default CheckoutCard;
