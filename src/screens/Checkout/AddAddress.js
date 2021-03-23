import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity ,TextInput} from 'react-native';
import FlatButton from '../../components/common/Button';
import {Button} from 'native-base'
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';
import  Colors  from '../../theme/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor:Colors.white
    },
    button: {
        backgroundColor: Colors.green,
        height:heightToDp(7),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:widthToDp('5%'),
        marginRight:widthToDp('5%'),
        borderRadius: 5
    },   
    buttonText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize:scaleFontSize(10)
    },
    checkout_view: {
        borderBottomWidth: 2,
        paddingBottom:heightToDp(2),
        borderBottomColor: Colors.gallery
    },
    checkout_text: {
        textAlign: 'center',
        fontSize:scaleFontSize(12),
        fontWeight: 'bold'
    },
    header_decor: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:heightToDp(2.5),
        paddingHorizontal: widthToDp(4.5)
    },
    header_text: {
        width:widthToDp('25%'),
        textAlign: 'center',
        justifyContent: 'center',
        fontSize:scaleFontSize(9),
        fontWeight: 'bold',
        color: Colors.midGray
    },
    header_textt: {
        width:widthToDp('22%'),
        textAlign: 'center',
        justifyContent: 'center',
        fontSize:scaleFontSize(9),
        fontWeight: 'bold',
        color: Colors.midGray
    },
    line_decor: {
        textAlign: 'center',
        width: '15%',
        fontSize:scaleFontSize(9),
        fontWeight: 'bold',
        color: Colors.green,
    },
    address: {
        width:widthToDp('22%'),
        textAlign: 'center',
        justifyContent: 'center',
        color:Colors.green,
        fontSize:scaleFontSize(9),
        fontWeight: 'bold'
    },
    tag_heading:{
        borderBottomWidth:2,
        borderColor:'#eaeaea',
        paddingVertical:heightToDp(2.5),
        marginHorizontal:widthToDp(4.5)
    },
    tag_decor: {
      color:'#969696',
      fontSize:scaleFontSize(10),
      paddingBottom:heightToDp(3)
    },
    normalButtton: {
        paddingLeft:'42%',
        fontSize:20
    },
    font_size:{
        fontSize:scaleFontSize(10)
    },
    padd:{
        paddingTop:heightToDp(2)
    },
    clear_button:{
        fontSize:scaleFontSize(10),
        color:'#4c8ec8'
    },
    top:{
        top:heightToDp(8)
    }
});

const Address = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.checkout_view}>
                <View style={styles.header_decor}>
                    <Text style={styles.address}>Delivery address</Text>
                    <Text style={styles.line_decor}> ____</Text>
                    <Text style={styles.header_text}>Payement method</Text>
                    <Text style={styles.line_decor}> ____</Text>
                    <Text style={styles.header_textt}>Place order</Text>
                </View>
            </View>
        <View style={styles.tag_heading}>
            <Text style={styles.tag_decor}>Address</Text>
            <TextInput
            placeholder={"455 Larkspur Dr."}
            placeholderTextColor={"black"}
            style={styles.font_size}
            />         
        </View>
        <View style={styles.tag_heading}>
            <Text style={styles.tag_decor}>City</Text>
            <TextInput
            placeholder={"Baviera"}
            placeholderTextColor={"black"}
            style={styles.font_size}
            />         
        </View>
        <View style={styles.tag_heading}>
            <Text style={styles.tag_decor}>ZIP Code</Text>
            <TextInput
            placeholder={"92908"}
            placeholderTextColor={"black"}
            style={styles.font_size}
            />         
        </View>
            <TouchableOpacity style={styles.padd}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.clear_button}>Clear</Text>
                </View>
            </TouchableOpacity>
         <View style={styles.top}>
         <FlatButton text="Next"  onPress={() => navigation.navigate("visa")} style={styles.button}/>
         <Button transparent light
          onPress={() => navigation.navigate("categories")} >
             <Text style={styles.normalButtton}>Cancel</Text> 
          </Button>
         </View>
        </View>
    );
};
export default Address;
