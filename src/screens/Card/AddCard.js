import React from 'react'
import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';
import Colors from '../../theme/color'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        ...Platform.select({
            ios: {
                paddingTop: Dimensions.get('window').height > 500 ? heightToDp(6.5) : heightToDp(6),
            },
            android: {
                paddingTop: Dimensions.get('window').height > 600 ? widthToDp(6) : widthToDp(7),
            }
        })
    },
    editIconView: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        paddingBottom: heightToDp(2.5),
        borderBottomColor: Colors.Alabaster,
        marginBottom: heightToDp(2.5),
        paddingHorizontal: widthToDp(2.5)
    },
    editSize: {
        fontSize: scaleFontSize(10),
        fontWeight: 'bold'
    },
    buttonText: {
        color: Colors.white,
        fontSize: scaleFontSize(7),
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center'
    },
    paddVertical: {
        paddingVertical: heightToDp(2.5)
    },
    button_view: {
        borderRadius: 5,
        backgroundColor: Colors.green,
        width: widthToDp('65%')
    },
    arrow_left: {
        paddingLeft: 2,
        width: widthToDp('20%')
    },
    heading: {
        paddingHorizontal: widthToDp(2.5)
    },
    linear: {
        height: 225,
        borderRadius: 10,
        marginLeft: widthToDp(2.5),
        marginRight: widthToDp(2.5)
    },
    card_no: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: scaleFontSize(15),
        color: Colors.PoloBlue,
        fontWeight: 'bold',
        paddingTop: heightToDp(3)
    },
    c_holder: {
        ...Platform.select({
            ios:{
                fontSize: scaleFontSize(10),
                color: Colors.white,
                paddingHorizontal: widthToDp(4),
                paddingTop: heightToDp(3),
            },
            android:{
                fontSize: scaleFontSize(10),
                color: Colors.white,
                paddingHorizontal: widthToDp(4),
            }
        })
    },
    name: {
        fontSize: scaleFontSize(10),
        color: Colors.PoloBlue,
        paddingHorizontal: widthToDp(5),
        fontWeight: 'bold',
        paddingTop: heightToDp(1)
    },
    expiry: {
        fontSize: scaleFontSize(10),
        color: Colors.white
    },
    date: {
        fontSize: scaleFontSize(10),
        color: Colors.PoloBlue,
        fontWeight: 'bold',
        paddingTop: heightToDp(1),
        paddingRight: widthToDp(3)
    },
    data: {
        fontSize: scaleFontSize(10),
        color: Colors.Silver
    },
    data_view: {
        paddingVertical: heightToDp(4.5),
        paddingHorizontal: widthToDp(4)
    },
    data_input: {
        borderBottomColor: Colors.Silver,
        borderBottomWidth: 2,
        paddingRight: widthToDp(60),
        marginVertical: heightToDp(3.5)
    },
    exchange_view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.blackhaze,
        width: widthToDp('20%'),
        borderRadius: 5,
        marginHorizontal: widthToDp(5)
    },
    bottom_view: {
        flexDirection: 'row',
        paddingHorizontal: widthToDp(2),
        paddingBottom: heightToDp(5)
    },
    row:{
        flexDirection: 'row'
    },
    decor:{
        position: 'absolute',
        bottom: heightToDp(2),
        right: widthToDp(2.5)
    },
    visa:{
        paddingHorizontal:widthToDp(4),
        paddingTop:heightToDp(3)
    }
});
const AddCard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.editIconView}>
                <Icon name="arrow-left" size={30} color={Colors.black} style={styles.arrow_left} />
                <View style={styles.heading}>
                    <Text style={styles.editSize}>Add Credit Card</Text>
                </View>
            </View>
            <LinearGradient colors={['#724fa3', '#4473b9']} style={styles.linear}>
                <Icon name="cc-visa" size={50} color={Colors.white} style={styles.visa} />
                <Text style={styles.card_no}>XXXX  XXXX  XXXX  XXXX</Text>
                <View>
                    <Text style={styles.c_holder}>Card Holder</Text>
                    <Text style={styles.name}>Full Name</Text>
                </View>
                <View style={styles.decor}>
                    <Text style={styles.expiry}>Expires</Text>
                    <Text style={styles.date}>MM / YY</Text>
                </View>
            </LinearGradient>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.row}>
                    <View style={styles.data_view}>
                        <Text style={styles.data}>Card Number</Text>
                        <TextInput style={styles.data_input} />
                    </View>
                    <View style={styles.data_view}>
                        <Text style={styles.data}>Card Holder's Name</Text>
                        <TextInput style={styles.data_input} />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottom_view}>
                <View style={styles.exchange_view}>
                    <Icon name="exchange-alt" size={30} color={Colors.green} />
                </View>
                <View style={styles.button_view}>
                    <TouchableOpacity style={styles.paddVertical} activeOpacity="0.7">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Save Credit Card</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default AddCard