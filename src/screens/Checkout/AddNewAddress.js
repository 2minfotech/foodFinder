import React from 'react';
import { Platform } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../theme/color'
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                paddingTop:heightToDp(6.5)
            },
            android: {
                paddingTop:heightToDp(5.5)
            }
        })
    },
    button_view: {
        marginTop:heightToDp(2.5),
        marginBottom:heightToDp(2.5),
        alignItems: 'center'
    },
    paddVertical: {
        paddingVertical:heightToDp(2.5),
    },
    button: {
        backgroundColor: '#00b970',
        paddingHorizontal:widthToDp(4),
        height:heightToDp(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:widthToDp('5%'),
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:scaleFontSize(10)
    },
    heading_container:{
        flexDirection: 'row',
        borderBottomWidth: 2,
        paddingBottom:heightToDp(2.5),
        borderBottomColor: '#d7d7d7'
    },
    arrow_left:{
        paddingLeft:widthToDp(2),
        paddingRight:widthToDp(15)
    },
    heading:{
        fontSize:scaleFontSize(12.5),
        fontWeight: 'bold' 
    },
    to_center:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    align_center:{
        alignItems: 'center' 
    },
    apratment_view:{
        flexDirection: 'row',
        paddingTop:heightToDp(3.5)
    },
    icon_view:{
        backgroundColor: '#e4e6e6',
        borderRadius: 75,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:widthToDp(6.5),
        marginBottom:heightToDp(.8)
    },
    green_icon:{
        backgroundColor: '#01b970',
        borderRadius: 75,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:widthToDp(6.5),
        marginBottom:heightToDp(.8)
    },
    text:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:heightToDp(3),
        paddingBottom:heightToDp(2)
    },
    color:{
        color:Colors.gray
    },
    text_decor:{
        fontSize:scaleFontSize(10),
        color:Colors.lightgray 
    },
    textinput_view:{
        paddingLeft:widthToDp(5),
        paddingRight:widthToDp(5),
    },
    textInput:{
        fontSize:scaleFontSize(10),
        backgroundColor:Colors.white
    },
    view_inputs:{
        flexDirection: 'row',
        paddingRight:widthToDp(5)
    },
    zip_code:{
        fontSize:scaleFontSize(10), 
        backgroundColor: 'white',
        width: '30%',
        marginRight:widthToDp(3)
    },
    city:{
        fontSize: scaleFontSize(10),
        backgroundColor: 'white',
        width: widthToDp('61%')
    }
});

const AddNewAddress = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.heading_container}>
                <Icon name="arrow-left" size={30} color={Colors.black} style={styles.arrow_left} />
                <View style={styles.to_center}>
                    <Text style={styles.heading}>Add New Address</Text>
                </View>
            </View>
            <View style={styles.apratment_view}>
                <View style={styles.align_center}>
                    <View style={styles.icon_view}>
                        <Icon name="building" size={30} color={Colors.black} />
                    </View>
                    <Text style={styles.color}>Apartment</Text>
                </View>
                <View style={styles.align_center}>
                    <View style={styles.green_icon}>
                        <Icon name="home" size={30} color={Colors.white} />
                    </View>
                    <Text style={styles.color}>Home</Text>
                </View>
                <View style={styles.align_center}>
                    <View style={styles.icon_view}>
                        <Icon name="briefcase" size={30} color={Colors.black} />
                    </View>
                    <Text style={styles.color}>Office</Text>
                </View>
            </View>
            <View style={styles.text}>
                <Text style={styles.text_decor}>Enter your delivery address details</Text>
            </View>
            <View style={styles.textinput_view}>
                <TextInput
                    placeholder={"Number"}
                    placeholderTextColor={Colors.lightgray}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder={"Street name"}
                    placeholderTextColor={Colors.lightgray}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder={"District"}
                    placeholderTextColor={Colors.lightgray}
                    style={styles.textInput}
                />
                <View style={styles.view_inputs}>
                    <TextInput
                        placeholder={"ZIP Code"}
                        placeholderTextColor={Colors.lightgray}
                        style={styles.zip_code}
                    />
                    <TextInput
                        placeholder={"City"}
                        placeholderTextColor={Colors.lightgray}
                        style={styles.city}
                    />
                </View>
            </View>
            <View style={styles.button_view}>
                <TouchableOpacity style={styles.paddVertical} onPress={() => navigation.navigate('place_order')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> SAVE ADDRESS</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default AddNewAddress;
