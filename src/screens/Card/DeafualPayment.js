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
        backgroundColor: Colors.white,
        ...Platform.select({
            ios: {
                paddingTop: heightToDp(5)
            },
            android: {
                paddingTop: heightToDp(5)
            }
        }),
    },
    text_container: {
        backgroundColor: Colors.lightgreen,
        paddingBottom: heightToDp(2),
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderTopWidth: 8,
        borderTopColor: Colors.white
    },
    defualt_view: {
        flexDirection: 'row',
        paddingVertical: heightToDp('2%'),
        marginLeft: widthToDp('3%'),
        marginRight: widthToDp('3%'),
    },
    defualt_text: {
        fontSize: scaleFontSize(9),
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: heightToDp('1%')
    },
    credit_decor: {
        fontSize: scaleFontSize(10),
        textTransform: 'capitalize'
    },
    change: {
        position: 'absolute',
        right: widthToDp(4),
        top: heightToDp(5)
    },
    change_text: {
        fontSize: scaleFontSize(10),
        textTransform: 'capitalize',
        color: Colors.green
    },
    linear: {
        height: 225,
        borderRadius: 10,
        marginLeft: widthToDp('3%'),
        marginRight: widthToDp('3%'),
        marginBottom: heightToDp('1%')
    },
    row: {
        flexDirection: 'row'
    },
    visa: {
        marginTop: heightToDp(2),
        marginLeft: widthToDp(4),
        width: widthToDp('75%')
    },
    icon_view: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 75,
        marginTop: heightToDp(2)
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    p_ver20: {
        paddingVertical: heightToDp(2)
    },
    card_no: {
        color: Colors.PoloBlue,
        fontSize: scaleFontSize(12),
        fontWeight: 'bold'
    },
    number: {
        fontSize: scaleFontSize(12),
        color: Colors.white,
        fontWeight: 'bold'
    },
    card_holder: {
        color: Colors.PoloBlue,
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
        paddingLeft: widthToDp(2),
        paddingRight: widthToDp("38%")
    },
    expiry: {
        color: Colors.PoloBlue,
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
        position: 'absolute',
        right: widthToDp(5),
        top: 0
    },
    name: {
        fontSize: scaleFontSize(11),
        color: Colors.white,
        fontWeight: 'bold',
        paddingLeft: widthToDp(2),
        paddingTop: heightToDp(1)
    },
    date: {
        fontSize: scaleFontSize(11),
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        right: widthToDp(5),
        top: heightToDp(1)
    },
    add_view: {
        backgroundColor: Colors.gallery,
        marginTop: heightToDp('2.5%'),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    add_method: {
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingLeft: widthToDp(2),
        paddingTop: heightToDp('2.5%')
    },
    scroller: {
        backgroundColor: Colors.gallery,
        marginBottom: heightToDp(18)
    },
    credit_card_container: {
        flexDirection: 'row',
        width: widthToDp('100%'),
        backgroundColor: Colors.gallery,
        paddingTop: heightToDp(2)
    },
    card_icon: {
        height: 120,
        width: 150,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginHorizontal: widthToDp(2)
    },
    text_decor: {
        bottom: heightToDp(2),
        position: 'absolute',
        left: widthToDp(5),
        textTransform: 'capitalize'
    },
    total_card: {
        position: 'absolute',
        right: widthToDp(6),
        top: heightToDp(2),
        fontSize: scaleFontSize(9),
        backgroundColor: Colors.lightgreen,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    icon_pay: {
        top: heightToDp(2),
        left: widthToDp(4)
    },
    quintity: {
        fontSize: scaleFontSize(9),
        textAlign: 'center'
    },
    paypal: {
        bottom: heightToDp(2),
        position: 'absolute',
        left: widthToDp(4)
    },
    icon_container: {
        height: 120,
        width: 150,
        backgroundColor:Colors.white,
        marginHorizontal: widthToDp(2),
        borderRadius: 10
    }
});

const DefualtPayment = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.text_container}>
                <View style={styles.defualt_view}>
                    <View>
                        <Text style={styles.defualt_text}>defualt payment method</Text>
                        <Text style={styles.credit_decor}>credit card </Text>
                    </View>
                    <View style={styles.change}>
                        <Text style={styles.change_text}>change</Text>
                    </View>
                </View>
                <LinearGradient colors={['#5d3e82', '#26699c']}   style={styles.linear}  >
                    <View style={styles.row}>
                        <Icon name="cc-visa" size={50} color={Colors.white}
                            style={styles.visa}
                        />
                        <View style={[styles.icon_view, styles.center]}>
                            <Icon name="ellipsis-v" size={20} color={Colors.black} />
                        </View>
                    </View>
                    <View style={[styles.center, styles.row, styles.p_ver20]}>
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
            </View>
            <View style={styles.add_view}>
                <Text style={styles.add_method}>add new payment method</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scroller}    >
                <View style={styles.credit_card_container}>
                    <View style={styles.card_icon}>
                        <Icon name="credit-card" size={30} color={Colors.black} style={styles.icon_pay} />
                        <Text style={styles.text_decor}>credit card</Text>
                        <View style={styles.total_card}>
                            <Text style={styles.quintity}>2</Text>
                        </View>
                    </View>
                    <View style={styles.icon_container}>
                        <Icon name="paypal" size={30} color={Colors.black} style={styles.icon_pay} />
                        <Text style={styles.paypal}>PayPal</Text>
                    </View>
                    <View style={styles.icon_container}>
                        <Icon name="google-wallet" size={30} color={Colors.black} style={styles.icon_pay} />
                        <Text style={styles.text_decor}>google wallet</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default DefualtPayment
