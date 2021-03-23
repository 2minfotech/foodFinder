import React from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';
import Colors from '../../theme/color'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.white,
        ...Platform.select({
            ios: {
                paddingTop: heightToDp(6)
            },
            android: {
                paddingTop: heightToDp(6)
            }
        })
    },
    row:{
        flexDirection:'row'
    },
    icon_container:{
        paddingHorizontal: widthToDp(4),
        paddingBottom: heightToDp(1)
    },
    about:{
        fontSize: scaleFontSize(12),
        fontWeight: 'bold',
        paddingLeft:widthToDp(10)
    },
    icon:{
        paddingLeft: 2,
        width:widthToDp( '20%') 
    },
    center:{
        alignItems:'center',
        justifyContent:'center'
    },
    text_center:{
        textAlign:'center'
    },
    font_big:{
        fontSize:scaleFontSize(12)
    },
    font_mid:{
        fontSize:scaleFontSize(10)
    },
    bg_green:{
        backgroundColor:Colors.green
    },
    green:{
        color:Colors.green
    },
    size:{
        width:50,
        height:50,
        borderRadius:75 
    },
    m_horizonatl:{
        marginHorizontal:widthToDp(2)
    },
    follow:{
        color:Colors.gray,
        marginVertical:heightToDp(2.5)
    },
    p_top:{
        paddingTop:heightToDp('5%')
    },
    p_vertical:{
        paddingVertical:heightToDp(2)
    },
    gray:{
        color:Colors.gray
    },
    white:{
        color:Colors.white
    },
    text_view:{
        position: 'absolute',
        paddingTop:heightToDp('20%'),
        width:widthToDp('90%'),
        paddingLeft:widthToDp(3)
    },
    foter:{
        paddingTop:heightToDp('5%'),
        paddingBottom:heightToDp('2%'),
    },
    chief:{
        top:heightToDp(9),
        paddingLeft:widthToDp(3)
    },
    image:{
        width: 80,
        height: 80,
        borderRadius: 75,
        top: heightToDp(7),
        marginLeft:widthToDp(2.5),
        borderWidth: 2,
        borderColor:Colors.white
    },
    position:{
        position: 'absolute' 
    },
    background:{
        width:widthToDp( '100%'),
        height:heightToDp(35)
    }
})

const About = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.row,styles.icon_container]}>
                <Icon name="arrow-left" size={30} color={Colors.black} style={styles.icon} />
                <Text style={styles.about}>About Us</Text>
            </View>
            <View>
                <View>
                    <Image source={require('../../assets/images/Fresh-Cuts.png')} style={styles.background} />
                </View>
                <View style={[styles.position,styles.row]}>
                    <Image source={require('../../assets/images/my.png')}
                        style={styles.image}
                    />
                    <View style={styles.chief}>
                        <Text style={[styles.font_big,styles.white]}>Hanif Mohammad</Text>
                        <Text style={[styles.font_mid,styles.white]}>Main Chef</Text>
                    </View>
                </View>
                <View style={styles.text_view}>
                    <Text style={[styles.font_mid,styles.white]}>Exquisite and fashionable cuisine from the famous cooks. Try out dishes and you will never want something else.</Text>
                </View>
            </View>
            <View>
                <View style={[styles.p_top,styles.center]}>
                    <Text style={[styles.font_mid,styles.gray,styles.p_vertical]}>CALL US</Text>
                    <Text style={[styles.font_big,styles.green,styles.p_vertical]}>1-60-123-456-7</Text>
                </View>
            </View>
            <View style={[styles.p_top,styles.center]}>
                <Text style={[styles.font_mid,styles.follow]}>FOLLOW US</Text>
                <View style={styles.row}>
                    <View style={[styles.bg_green,styles.size,styles.center,styles.m_horizonatl]}>
                    <Icon name="facebook-f" size={30} color={Colors.white} />
                    </View>
                    <View style={[styles.bg_green,styles.size,styles.center,styles.m_horizonatl]}>
                    <Icon name="instagram" size={30} color={Colors.white} style={styles.bg_green}/>
                    </View>
                    <View style={[styles.bg_green,styles.size,styles.center,styles.m_horizonatl]}>
                    <Icon name="twitter" size={30} color={Colors.white} style={styles.bg_green}/>
                    </View>
                </View>
            </View>
            <View style={styles.foter}>
                <Text style={[styles.green,styles.text_center,styles.font_big]}>www.fooddelivery.com</Text>
            </View>
        </View>
    )
}
export default About