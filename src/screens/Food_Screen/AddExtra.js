import React from 'react'
import { View, Text, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Colors from '../../theme/color'
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.green,
        ...Platform.select({
            ios: {
                paddingTop: heightToDp(6)
            },
            android: {
                paddingTop:heightToDp(5)
            }
        })
    },
    Xlogo: {
        position: 'absolute'
    },
    XlogoView: {
        backgroundColor: Colors.white,
        width: 60,
        height: 60,
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal:widthToDp(4),
        marginTop:heightToDp(1)
    },
    X_text: {
        alignSelf: 'center',
        fontSize:scaleFontSize(12)
    },
    star_logo: {
        position: 'absolute',
        right: 0,
        paddingTop:heightToDp(1),
        paddingRight: widthToDp(3)
    },
    star_View: {
        backgroundColor: Colors.white,
        borderRadius: 35,
        borderWidth: 15,
        borderColor: Colors.white,
    },
    buttonText: {
        color: Colors.white,
        width: '100%',
        textAlign: 'center',
        fontSize: scaleFontSize(12),
        justifyContent: 'center'
    },
    button: {
        color: Colors.white,
        backgroundColor: Colors.green,
        width: 40,
        borderRadius: 20,
        height: 40,
        justifyContent: "space-around"
    },
    buttonText2: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: scaleFontSize(12),
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    button2: {
        color: Colors.white,
        backgroundColor: Colors.green,
        width: 200,
        borderRadius: 20,
        height: 40,
        justifyContent: "space-around"
    },
    icon_view: {
        paddingHorizontal: widthToDp(3), 
        paddingVertical:heightToDp(2), 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    icon_text: {
        textAlign: 'center', 
        justifyContent: 'center', 
        paddingLeft: widthToDp(5)
    },
    extra_add: {
        position: 'absolute',
        right:widthToDp(6)
    },
    touch_view: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: Colors.iron,
        flexDirection: 'row',
        paddingHorizontal:widthToDp(5),
        paddingTop: heightToDp(2.5)
    },
    touch_text: {
        fontSize: scaleFontSize(13),
        paddingHorizontal: widthToDp(5),
        textAlign: 'center',
        justifyContent: 'center'
    },
    buttons: {
        paddingLeft: widthToDp(8),
        paddingBottom: heightToDp(10)
    },
    text: {
        fontSize: scaleFontSize(12),
        fontWeight: 'bold'
    },
    title: {
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
        paddingLeft: widthToDp(5),
        paddingTop: heightToDp(2.5)
    },
    font_mid: {
        fontSize: scaleFontSize(10)
    },
    dis: {
        paddingTop: 1,
        paddingHorizontal: widthToDp(5)
    },
    price: {
        fontSize: scaleFontSize(12),
        fontWeight: 'bold',
        position: 'absolute',
        right: widthToDp(5),
        bottom: heightToDp(2.5)
    },
    container_two: {
        flexDirection: 'row',
        paddingVertical: heightToDp(2.5),
        paddingHorizontal: widthToDp(4.5)
    },
    container_one: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: Colors.white
    },
    image: {
        width: widthToDp('100%'),
        height: 200
    },
    bg_white: {
        backgroundColor: Colors.white
    }
})

const AddExtra = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bg_white}>
                <View>
                    <Image
                        source={require('../../assets/images/pizza_veg.png')}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.Xlogo}>
                        <View style={styles.XlogoView}>
                            <Text style={styles.X_text}>X</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.star_logo}>
                        <View style={styles.star_View}>
                            <Icon name="heart" size={30} color={Colors.Scorpion} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: Colors.white }}>
                <View style={styles.container_one}>
                    <View style={styles.container_two}>
                        <Text style={styles.text}>Pizza Formaggi</Text>
                        <Text style={styles.price}>$ 10.90</Text>
                    </View>
                    <View style={styles.dis}>
                        <Text style={styles.font_mid}>Tomato sauce, cheese,oregano,bacon,red onion,hardgoat ,olives</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>CHOOSE PIZZA EXTRAS</Text>
                    </View>
                    <View>
                        <View style={styles.icon_view}>
                            <Icon name="circle" size={30} color={Colors.gray} solid />
                            <Text style={styles.icon_text}>Egg</Text>
                            <Text style={styles.extra_add}>+ 0.50</Text>
                        </View>
                        <View style={styles.icon_view}>
                            <Icon name="circle" size={30} color={Colors.gray} />
                            <Text style={styles.icon_text}>Cherry tomato</Text>
                            <Text style={styles.extra_add}>+ 0.90</Text>
                        </View>
                        <View style={styles.icon_view}>
                            <Icon name="circle" size={30} color={Colors.gray} solid />
                            <Text style={styles.icon_text}>Ham</Text>
                            <Text style={styles.extra_add}>+ 1.50</Text>
                        </View>
                        <View style={styles.icon_view}>
                            <Icon name="circle" size={30} color={Colors.gray} />
                            <Text style={styles.icon_text}>Pepperoni</Text>
                            <Text style={styles.extra_add}>+ 1.50</Text>
                        </View>
                        <View style={styles.icon_view}>
                            <Icon name="circle" size={30} color={Colors.gray} />
                            <Text style={styles.icon_text}>Artichoke</Text>
                            <Text style={styles.extra_add}>+ 1.70</Text>
                        </View>
                    </View>
                    <View style={styles.touch_view}>
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>-</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.touch_text}>1</Text>
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>+</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}>
                            <View style={styles.button2}>
                                <Text style={styles.buttonText2}>Add $12.90</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default AddExtra
