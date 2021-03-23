import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Platform } from 'react-native';
import Colors from '../../theme/color';
import { ScrollView } from 'react-native-gesture-handler';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.iron,
    },
    buttonText: {
        color: Colors.SanMarino,
        fontSize: scaleFontSize(10)
    },
    button: {
        alignItems: 'center'
    },
    paddVertical: {
        paddingVertical: heightToDp(2)
    },
    editIconView: {
        flexDirection: 'row',
        borderBottomWidth: 10,
        paddingBottom: heightToDp(2),
        borderBottomColor: Colors.Alabaster,
        ...Platform.select({
            ios: {
                paddingTop: heightToDp(5.2),
            },
            android: {
                paddingTop: heightToDp(6.2)
            }
        }),
        backgroundColor: Colors.green
    },
    forCenter: {
        width: widthToDp('72%'),
    },
    editSize: {
        fontSize: scaleFontSize(13),
        fontWeight: 'bold',
        color: Colors.white
    },
    button_view: {
        flexDirection: 'column',
        position: 'absolute',
        bottom: heightToDp(1),
        marginLeft: 20
    },
    paddVertical: {
        paddingVertical: heightToDp(2),
    },
    button: {
        backgroundColor: Colors.green,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: scaleFontSize(12)
    },
    arrow: {
        paddingLeft: 2,
        width: widthToDp('20%')
    },
    check: {
        width: widthToDp('10%'),
    },
    linear: {
        height: 225,
        borderRadius: 10,
        marginLeft: widthToDp('3%'),
        marginRight: widthToDp('3%'),
        marginBottom: heightToDp('1.5%'),
    },
    row: {
        flexDirection: 'row'
    },
    center: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    icon: {
        backgroundColor: Colors.white,
        height: 50,
        width: 50,
        justifyContent: 'center',
        borderRadius: 75,
        marginTop: heightToDp(2),
        alignItems: 'center'
    },
    card_no: {
        color: Colors.PoloBlue,
        fontSize: scaleFontSize(12),
        fontWeight: 'bold'
    },
    card_holder: {
        color: Colors.PoloBlue,
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
        paddingLeft: widthToDp(2.5),
        paddingRight: "38%"
    },
    name: {
        fontSize: scaleFontSize(10),
        color: Colors.white,
        fontWeight: 'bold',
        paddingLeft: widthToDp(2),
        paddingTop: heightToDp(1)
    },
    expiry: {
        color: Colors.PoloBlue,
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
        position: 'absolute',
        right: widthToDp(6),
        top: 0
    },
    date: {
        fontSize: scaleFontSize(10),
        color: Colors.white,
        fontWeight: 'bold',
        position: 'absolute',
        right: widthToDp(5),
        top: heightToDp(1.5)
    },
    number: {
        fontSize: scaleFontSize(12),
        color: Colors.white,
        fontWeight: 'bold'
    },
    card_logo: {
        marginTop: heightToDp(1),
        marginLeft: widthToDp(4),
        width: widthToDp('74%')
    },
    Payment: {
        backgroundColor: Colors.white,
        paddingHorizontal: widthToDp('10%'),
        borderTopLeftRadius: 40,
        borderTopEndRadius: 40
    },
    payment_text: {
        fontSize: scaleFontSize(10),
        textTransform: 'uppercase',
        paddingTop: heightToDp('3%'),
        paddingBottom: heightToDp('1%')
    },
    payment_method: {
        fontSize: scaleFontSize(10),
        paddingHorizontal:widthToDp('10%')
    },
    select_card:{
        fontSize:scaleFontSize(7),
        paddingBottom:heightToDp('2%') 
    },
    method_view:{
        flexDirection: 'row',
        paddingVertical:heightToDp('2.5%') 
    }
});

const Payment = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.editIconView}>
                <Icon name="arrow-left" size={30} color={Colors.white} style={styles.arrow} />
                <View style={styles.forCenter}>
                    <Text style={styles.editSize}>Payment Method</Text>
                </View>
                <Icon name="check" size={30} color={Colors.white} solid style={styles.check} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <LinearGradient colors={['#5d3e82', '#26699c']}
                    style={styles.linear} >
                    <View style={styles.row}>
                        <Icon name="cc-visa" size={50} color={Colors.white}
                            style={styles.card_logo} />
                        <View style={styles.icon}>
                            <Icon name="ellipsis-v" size={20} color={Colors.black} />
                        </View>
                    </View>
                    <View style={[styles.paddVertical, styles.row, styles.center]}>
                        <Text style={styles.card_no}>XXXX   XXXX   XXXX </Text>
                        <Text style={styles.number}>   0108</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.card_holder}>Card Holder </Text>
                        <Text style={styles.expiry}>Expires</Text>
                    </View>
                    <View style={styles.row} >
                        <Text style={styles.name}>Hanif Mohammad</Text>
                        <Text style={styles.date}>09 / 25</Text>
                    </View>
                </LinearGradient>
                <LinearGradient colors={['#183652', '#76577f']}
                    style={styles.linear}  >
                    <View style={styles.row}>
                        <Icon name="cc-discover" size={50} color={Colors.white}
                            style={styles.card_logo} />
                        <View style={styles.icon}>
                            <Icon name="ellipsis-v" size={20} color={Colors.black} />
                        </View>
                    </View>
                    <View style={[styles.paddVertical, styles.row, styles.center]}>
                        <Text style={styles.card_no}>XXXX   XXXX   XXXX </Text>
                        <Text style={styles.number}>   4786</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.card_holder}>Card Holder </Text>
                        <Text style={styles.expiry}>Expires</Text>
                    </View>
                    <View style={styles.row} >
                        <Text style={styles.name}>Hanif Mohammad</Text>
                        <Text style={styles.date}>08 / 23</Text>
                    </View>
                </LinearGradient>
                <View style={styles.Payment}>
                    <Text style={styles.payment_text}>payment method</Text>
                    <Text style={styles.select_card}>XXXX XXXX XXXX XXXX 0108</Text>
                    <View style={styles.method_view}>
                        <Icon name="pen" size={25} color={Colors.ScienceBlue}/>
                        <Text style={styles.payment_method}>Edit card details</Text>
                    </View>
                    <View style={styles.method_view}>
                        <Icon name="save" size={25} color={Colors.ScienceBlue}solid />
                        <Text style={styles.payment_method}>Save for checkouts</Text>
                    </View>
                    <View style={styles.method_view}>
                        <Icon name="minus-circle" size={25} color={Colors.ScienceBlue}/>
                        <Text style={styles.payment_method}>Remove card</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default Payment;
