import React from 'react'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import Colors from '../../theme/color'
import SubmitButton from '../../components/common/SubmitButton'
import BorderedButton from '../../components/common/BorderedButton'
import { Button } from 'native-base';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        backgroundColor: Colors.green,
        ...Platform.select({
            ios: {
                paddingTop: heightToDp(5.5)
            },
            android: {
                paddingTop: heightToDp(5.5)
            }
        })

    },
    fullButton: {
        width: widthToDp(35),
        height: heightToDp(7),
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#00b970',
        justifyContent: 'center',
    },
    button: {
        width: widthToDp(35),
        height: heightToDp(7),
        backgroundColor: "#49cd98",
        borderRadius: 5,
        justifyContent: 'center',
        marginHorizontal: widthToDp(7)
    },
    image: {
        width: widthToDp(100),
        height: heightToDp(40)
    },
    header_container: {
        position: 'absolute',
        top: heightToDp(25),
        alignItems: 'center',
        alignSelf: 'center'
    },
    heading: {
        textAlign: 'center',
        justifyContent: 'center',
        color: Colors.white,
        fontSize: scaleFontSize(20),
        fontWeight: 'bold'
    },
    logo_container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: heightToDp(-5)
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: Colors.white
    },
    text_container: {
        width: widthToDp('60%'),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: heightToDp(5),
        marginHorizontal: widthToDp(20)
    },
    short_discription: {
        fontSize: scaleFontSize(8),
        justifyContent: 'center',
        textAlign: 'center'
    },
    button_container: {
        flexDirection: 'row',
        marginLeft: widthToDp(5),
        paddingTop: heightToDp(2)
    },
    skip_container: {
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: heightToDp(2)
    }
})

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/pizzaa.png')} style={styles.image} />
            </View>
            <View style={styles.header_container}>
                <Text style={styles.heading}>Bon Apptit</Text>
            </View>
            <View style={styles.logo_container}>
                <Image source={require('../../assets/images/food.png')} style={styles.logo} />
            </View>
            <View style={styles.text_container}>
                <Text style={styles.short_discription}>  Order food. Quick and easy. Take the first bite.Enjoy.  </Text>
            </View>
            <View style={styles.button_container}>
                <View >
                    <SubmitButton text="SIGN IN" style={styles.button} onPress={() => navigation.navigate("Login")} />
                </View>
                <View >
                    <BorderedButton text="SING UP" style={styles.fullButton} onPress={() => navigation.navigate("Sign-Up")} />
                </View>
            </View>
            <View style={styles.skip_container}>
                <Button transparent light
                    onPress={() => navigation.navigate("Categories")} >
                    <Text style={{ fontSize: scaleFontSize(10) }}>Skip</Text>
                </Button>
            </View>
        </View>
    )
}
export default Welcome
