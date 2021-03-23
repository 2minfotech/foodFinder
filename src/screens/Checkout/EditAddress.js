import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput , Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';
import Colors from '../../theme/color'

const EditAddress = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.editIconView}>
                <Icon name="arrow-left" size={30} color="black" style={styles.arrow_left} />
                <View style={styles.forCenter}>
                    <Text style={styles.editSize}>Edit Address</Text>
                </View>
            </View>
            <View style={styles.restrict}>
                <View style={styles.align_center}>
                    <View style={styles.logoView}>
                        <Icon name="building" size={30} color={Colors.black} />
                    </View>
                    <Text style={styles.color}>Apartment</Text>
                </View>
                <View style={styles.align_center}>
                    <View style={styles.greenLogo}>
                        <Icon name="home" size={30} color={Colors.white} />
                    </View>
                    <Text style={styles.color}>Home</Text>
                </View>
                <View style={styles.align_center}>
                    <View style={styles.logoView}>
                        <Icon name="briefcase" size={30} color={Colors.black} />
                    </View>
                    <Text style={styles.color}>Office</Text>
                </View>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.texts}>Enter your delivery address details</Text>
            </View>
            <View style={styles.text_input}>
                <TextInput
                    placeholder={"Number"}
                    placeholderTextColor={"#a8a8a8"}
                    style={styles.number}
                />
                <TextInput
                    placeholder={"Street name"}
                    placeholderTextColor={"#a8a8a8"}
                    style={styles.address}
                />
                <TextInput
                    placeholder={"District"}
                    placeholderTextColor={"#a8a8a8"}
                    style={styles.district}
                />
                <View style={styles.combine}>
                    <TextInput
                        placeholder={"ZIP Code"}
                        placeholderTextColor={"#a8a8a8"}
                        style={styles.zip_code}
                    />
                    <TextInput
                        placeholder={"City"}
                        placeholderTextColor={"#a8a8a8"}
                        style={styles.city}
                    />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.Pbutton_view}>
                    <TouchableOpacity style={styles.PpaddVertical} onPress={() => navigation.navigate('place_order')}>
                        <View style={styles.Pbutton}>
                            <Text style={styles.PbuttonText}> REMOVE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.button_view}>
                    <TouchableOpacity style={styles.paddVertical} onPress={() => navigation.navigate('place_order')}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}> SAVE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.white,
        ...Platform.select({
            ios: {
                paddingTop:heightToDp(6.5)
            },
            android: {
                paddingTop: heightToDp(5.5)
            }
        })
    },
    button_view: {
        marginTop:heightToDp(2.5),
        marginBottom:heightToDp(2.5),
        alignItems: 'center',

    },
    paddVertical: {
        paddingVertical:heightToDp(2.5),
    },
    button: {
        backgroundColor: Colors.green,
        paddingHorizontal: widthToDp(4.5),
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize:scaleFontSize(10),
        paddingHorizontal:widthToDp(6)
    },
    Pbutton_view: {
        marginTop:heightToDp(2.5),
        marginBottom:heightToDp(2.5),
        alignItems: 'center',
        marginHorizontal:widthToDp(4.5)
    },
    PpaddVertical: {
        paddingVertical:heightToDp(2.5),
    },
    Pbutton: {
        backgroundColor: Colors.VanillaIce,
        paddingHorizontal:widthToDp(4),
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%',
        borderRadius: 5
    },
    PbuttonText: {
        color:'#c54567',
        fontWeight: 'bold',
        fontSize:scaleFontSize(10),
        paddingHorizontal:widthToDp(4)
    },
    editIconView: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        paddingBottom:heightToDp(1.5),
        borderBottomColor:Colors.Alto

    },
    forCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    editSize: {
        fontSize:scaleFontSize(15),
        fontWeight: 'bold'
    },
    logoView: {
        backgroundColor: '#e4e6e6',
        borderRadius: 75,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:widthToDp(6.5),
        marginBottom:heightToDp(.8)
    },
    greenLogo: {
        backgroundColor: '#01b970',
        borderRadius: 75,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:widthToDp(6.5),
        marginBottom:heightToDp(.8)
    },
    color: {
        color: '#4e6e6e'
    },
    arrow_left:{
        paddingLeft:widthToDp(2.5),
        paddingRight:heightToDp(12)
    },text_container:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:heightToDp(3.5),
        paddingBottom:heightToDp(3.5)
    },
    number:{
        fontSize:scaleFontSize(10),
        backgroundColor:Colors.white,
        paddingBottom:heightToDp(2.5),
        borderBottomWidth: 2,
        borderBottomColor: '#a8a8a8' 
    },
    address:{
        fontSize:scaleFontSize(10),
        backgroundColor:Colors.white,
        paddingBottom:heightToDp(2.5),
        marginVertical:heightToDp(2.5),
        borderBottomWidth: 2,
        borderBottomColor: '#a8a8a8' 
    },
    district:{
        fontSize:scaleFontSize(10),
        backgroundColor:Colors.white,
        paddingBottom: heightToDp(2.5),
        marginVertical: heightToDp(2.5),
        borderBottomWidth: 2,
        borderBottomColor: '#a8a8a8' 
    },
    zip_code:{
        fontSize:scaleFontSize(10),
        backgroundColor:Colors.white,
        width: '30%', 
        marginRight:widthToDp(3.5), 
        paddingBottom: heightToDp(2.5),
        borderBottomWidth: 2, 
        borderBottomColor: '#a8a8a8' 
    },
    city:{
        fontSize:scaleFontSize(10),
        backgroundColor:Colors.white,
        width: '70%', 
        paddingBottom: heightToDp(2.5),
        borderBottomWidth: 2, 
        borderBottomColor: '#a8a8a8' 
    },
    texts:{
        fontSize:scaleFontSize(10), 
        color: '#a8a8a8' 
    },
    text_input:{
        paddingLeft:widthToDp(4), 
        paddingRight:widthToDp(4) 
    },
    row:{
        flexDirection: 'row'
    },
    combine:{
        flexDirection: 'row',
        paddingRight: widthToDp(2)
    },
    restrict:{
        flexDirection: 'row',
        paddingTop: heightToDp(3.5) 
    },
    align_center:{
        alignItems:'center'
    }
});
export default EditAddress;
