import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Platform } from 'react-native';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';
import Colors from '../../theme/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: widthToDp(4),
        ...Platform.select({
            ios: {
                paddingTop: heightToDp(5),
            },
            android: {
                paddingTop: heightToDp(5)
            }
        })
    },
    buttonText: {
        color: Colors.SanMarino,
        fontSize: scaleFontSize(10)
    },
    button: {
        alignItems: 'center'
    },
    paddVertical: {
        paddingVertical: heightToDp(2.5)
    },
    editIconView: {
        flexDirection: 'row',
        borderBottomWidth: 10,
        paddingBottom: heightToDp(4),
        borderBottomColor: '#f8f8f8',
    },
    forCenter: {
        width: widthToDp('68%'),
    },
    editSize: {
        fontSize: scaleFontSize(13),
        fontWeight: 'bold'
    },
    button_view: {
        flexDirection: 'column',
        position: 'absolute',
        bottom: heightToDp(2),
        width: widthToDp('90%'),
        marginHorizontal: widthToDp(5),
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
    card_linear: {
        height: 225,
        borderRadius: 10,
        ...Platform.select({
            ios: {
                height: 225,
                borderRadius: 10,
            },
            android: {
                height: 235,
                borderRadius: 10,
            }
        })
    },
    arrow_icon: {
        paddingLeft: 2,
        width: widthToDp('18%')
    },
    check: {
        width: widthToDp('10%')
    },
    row: {
        flexDirection: 'row'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    allipsi_icon: {
        backgroundColor: Colors.white,
        height: 50,
        width: 50,
        borderRadius: 75,
        marginTop: heightToDp(2.5)
    },
    discover: {
        marginTop: heightToDp(2.5),
        marginLeft: widthToDp(4),
        width: widthToDp('70%')
    },
    vertical_pad: {
        paddingVertical: heightToDp(2.5)
    },
    details: {
        color: Colors.PoloBlue,
        fontSize: scaleFontSize(12),
        fontWeight: 'bold'
    },
    card_holder: {
        paddingLeft: 12,
        paddingRight: widthToDp("30%")
    },
    data: {
        fontSize: scaleFontSize(12),
        color: Colors.white,
        fontWeight: 'bold'
    },
    name: {
        ...Platform.select({
            ios: {
                paddingLeft: widthToDp(2.5),
                paddingTop: heightToDp(.5),
            },
            android: {
                paddingLeft: widthToDp(2.5),
            }
        })
    },
    date: {
        ...Platform.select({
            ios: {
                paddingLeft: widthToDp(17),
                paddingTop: heightToDp(.5),
            },
            android: {
                paddingLeft: widthToDp(15),

            }
        })
    }
});

const PaymentMethod = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.editIconView}>
                <Icon name="arrow-left" size={30} color={styles.black} style={styles.arrow_icon} />
                <View style={styles.forCenter}>
                    <Text style={styles.editSize}>Payment Method</Text>
                </View>
                <Icon name="check" size={30} color={Colors.green} solid style={styles.check} />
            </View>
            <LinearGradient colors={['#183652', '#76577f']}
                style={styles.card_linear}
            >
                <View style={styles.row}>
                    <Icon name="cc-discover" size={50} color={Colors.white}
                        style={styles.discover}
                    />
                    <View style={[styles.center, styles.allipsi_icon]}>
                        <Icon name="ellipsis-v" size={20} color={styles.black} />
                    </View>
                </View>
                <View style={[styles.row, styles.center, styles.vertical_pad]}>
                    <Text style={styles.details}>XXXX   XXXX   XXXX </Text>
                    <Text style={styles.data}>   4786</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.card_holder, styles.details]}>Card Holder </Text>
                    <Text style={styles.details}>Expires</Text>
                </View>
                <View style={styles.row} >
                    <Text style={[styles.data, styles.name]}>Hanif Mohammad</Text>
                    <Text style={[styles.data, styles.date]}>04 / 25</Text>
                </View>
            </LinearGradient>
            <View style={styles.button_view}>
                <TouchableOpacity style={styles.paddVertical} onPress={() => navigation.navigate('place_order')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add Credit Card</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default PaymentMethod;