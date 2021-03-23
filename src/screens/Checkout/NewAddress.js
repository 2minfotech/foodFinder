import React from 'react';
import { Platform } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../theme/color';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    button_view: {
        marginTop: heightToDp(2.5),
        marginBottom: heightToDp(2.5),
        alignItems: 'center',
    },
    paddVertical: {
        paddingVertical: heightToDp(2.5),
    },
    button: {
        backgroundColor: Colors.green,
        paddingHorizontal: widthToDp(4),
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:widthToDp('5%'),
        borderRadius: 5
    },
    buttonText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize:scaleFontSize(10),
        paddingHorizontal:widthToDp(8)
    },
    Pbutton_view: {
        marginTop: heightToDp(2.5),
        marginBottom: heightToDp(2.5),
        alignItems: 'center',
        marginHorizontal: widthToDp(4)
    },
    PpaddVertical: {
        paddingVertical: heightToDp(2.5),
    },
    Pbutton: {
        backgroundColor: Colors.VanillaIce,
        paddingHorizontal:widthToDp(4),
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:widthToDp('5%'),
        borderRadius: 5
    },
    PbuttonText: {
        color: Colors.funzybrown,
        fontWeight: 'bold',
        fontSize: scaleFontSize(10),
        paddingHorizontal: widthToDp(4)
    },
    editIconView: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        paddingBottom: heightToDp(2.5),
        borderBottomColor: Colors.Alto,
        backgroundColor: Colors.green,
        ...Platform.select({
            ios: {
                paddingTop: heightToDp(5)
            },
            android: {
                paddingTop: heightToDp(6)
            }
        })
    },
    forCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    editSize: {
        fontSize: scaleFontSize(13),
        fontWeight: 'bold',
        color: Colors.white
    },
    logoView: {
        backgroundColor: Colors.blackhaze,
        borderRadius: 75,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: widthToDp(7),
        marginBottom: heightToDp(1)
    },
    greenLogo: {
        backgroundColor: Colors.green,
        borderRadius: 75,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: widthToDp(6),
        marginBottom: heightToDp(1)
    },
    color: {
        color: Colors.sark
    },
    input: {
        fontSize: scaleFontSize(12),
        backgroundColor: Colors.white,
        width:widthToDp('30%'),
        marginRight: widthToDp(3),
        paddingBottom:heightToDp(2),
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightgray
    },
    address_input: {
        fontSize: scaleFontSize(12),
        backgroundColor: Colors.white,
        width:widthToDp('70%'),
        paddingBottom: heightToDp(2),
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightgray
    },
    dis_input: {
        fontSize: scaleFontSize(12),
        backgroundColor: Colors.white,
        paddingBottom: heightToDp(2),
        marginVertical: heightToDp(2),
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightgray
    },
    arrow_left: {
        paddingLeft: widthToDp(2), 
        paddingRight: widthToDp(16)
    },
    bottom_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    },
    input_view: {
        flexDirection: 'row',
        paddingRight: widthToDp(4)
    },
    p_horizonatl: {
        paddingLeft: widthToDp(4),
        paddingRight:widthToDp(4)
    },
    text: {
        fontSize: scaleFontSize(10),
        color: Colors.lightgray
    },
    text_view: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: heightToDp(2.5),
        paddingBottom: heightToDp(2.5)
    },
    center: {
        alignItems: 'center'
    },
    flex: {
        flexDirection: 'row',
        paddingTop: heightToDp(3)
    }
});

const NewAddress = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.editIconView}>
                <Icon name="arrow-left" size={30} color={Colors.white} style={styles.arrow_left} />
                <View style={styles.forCenter}>
                    <Text style={styles.editSize}>Edit Address</Text>
                </View>
            </View>
            <View style={styles.flex}>
                <View style={styles.center}>
                    <View style={styles.logoView}>
                        <Icon name="building" size={30} color={Colors.BigStone} />
                    </View>
                    <Text style={styles.color}>Apartment</Text>
                </View>
                <View style={styles.center}>
                    <View style={styles.greenLogo}>
                        <Icon name="home" size={30} color={Colors.white} />
                    </View>
                    <Text style={styles.color}>Home</Text>
                </View>
                <View style={styles.center}>
                    <View style={styles.logoView}>
                        <Icon name="briefcase" size={30} color={Colors.BigStone} />
                    </View>
                    <Text style={styles.color}>Office</Text>
                </View>
            </View>
            <View style={styles.text_view}>
                <Text style={styles.text}>Enter your delivery address details</Text>
            </View>
            <View style={styles.p_horizonatl}>
                <View style={styles.input_view}>
                    <TextInput
                        placeholder={"Number"}
                        placeholderTextColor={Colors.lightgray}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder={"Street name"}
                        placeholderTextColor={Colors.lightgray}
                        style={styles.address_input}
                    />
                </View>
                <TextInput
                    placeholder={"District"}
                    placeholderTextColor={Colors.lightgray}
                    style={styles.dis_input}
                />
                <View style={styles.input_view}>
                    <TextInput
                        placeholder={"ZIP Code"}
                        placeholderTextColor={Colors.lightgray}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder={"City"}
                        placeholderTextColor={Colors.lightgray}
                        style={styles.address_input}
                    />
                </View>
            </View>
            <View style={styles.bottom_view}>
                <View style={styles.button_view}>
                    <TouchableOpacity style={styles.paddVertical} onPress={() => navigation.navigate('place_order')}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}> SAVE ADDRESS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
export default NewAddress;
