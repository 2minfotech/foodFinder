import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import  Colors  from '../../theme/color';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const ProfilePage = () => {
    return (
            <View style={styles.container}>
                <Text style={styles.heading}>Settings</Text>
                <View style={styles.image_view}>
                    <Image
                        source={require('../../assets/images/my.png')}
                        style={styles.image} />
                    <View style={styles.details}>
                        <Text style={styles.font_size}>Hanif Mohammad</Text>
                        <Text style={styles.email}>Thehanifmohd@gmail.com</Text>
                    </View>
                </View>
                {/* { for location } */}
                <View style={styles.location_view}>
                    <View>
                        <Icon name="map-marker-alt" size={30} color={Colors.green}
                            style={styles.map_icon} />
                    </View>
                    <View style={styles.location_container}>
                        <View style={styles.width}>
                            <Text style={styles.tag}> Delivery Address</Text>
                            <Text style={styles.disciptions}>1600 Pennsylvania Avenue Wishington DC,USA</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color={Colors.gray}
                            style={styles.chevron_icon} />
                    </View>
                </View>
                {/* { for payment method } */}
                <View style={styles.containers}>
                    <View>
                        <Icon name="credit-card" size={25} color={Colors.green}
                            style={styles.icons} />
                    </View>
                    <View style={styles.views}>
                        <View style={styles.width}>
                            <Text style={styles.tag}>  Payment Method</Text>
                            <Text style={styles.visa}>Visa MasterCard</Text>
                            <Text style={styles.card_no}>XXXX  XXXX  XXXX  4786</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color={Colors.gray}
                            style={styles.chevron_icon} />
                    </View>
                </View>
                {/* { for notication } */}
                <View style={styles.notification}>
                    <View>
                        <Icon name="bell" size={30} color={Colors.green} solid
                            style={styles.icons} />
                    </View>
                    <View style={styles.views}>
                        <View style={styles.width}>
                            <Text style={styles.text_font}> Notication</Text>
                        </View>
                        <Icon name="toggle-on" size={40} color={Colors.green}
                            style={{ left: 90, paddingTop: 2 }} />
                    </View>
                </View>
                {/* { for my orders } */}
                <View style={styles.containers}>
                    <View>
                        <Icon name="stream" size={30} color={Colors.green}
                            style={styles.icons} />
                    </View>
                    <View style={styles.views}>
                        <View style={styles.width}>
                            <Text style={styles.text_font}> My Orders</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color={Colors.gray}
                            style={styles.chevron_icon} />
                    </View>
                </View>
                {/* { for terms and conditions } */}
                <View style={styles.containers}>
                    <View>
                        <Icon name="file-contract" size={30} color={Colors.green}
                            style={styles.icons} />
                    </View>
                    <View style={styles.views}>
                        <View style={styles.width}>
                            <Text style={styles.text_font}> Terms ad Conditions</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color={Colors.gray}
                            style={styles.chevron_icon} />
                    </View>
                </View>
                  {/* { for about us } */}
                  <View style={styles.containers}>
                    <View>
                        <Icon name="info-circle" size={30} color={Colors.green}
                            style={styles.icons} />
                    </View>
                    <View style={styles.views}>
                        <View style={styles.width}>
                            <Text style={styles.text_font}> About Us</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color={Colors.gray}
                            style={styles.chevron_icon} />
                    </View>
                </View>
                       {/* { for logout } */}
                       <View style={styles.containers}>
                    <View>
                        <Icon name="sign-out-alt" size={30} color={Colors.monza}
                            style={styles.icons} />
                    </View>
                    <View style={styles.views}>
                        <View style={styles.width}>
                            <Text style={styles.logout}> Logout</Text>
                        </View>
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
                paddingTop:heightToDp(5.5)
            },
            android: {
                paddingTop:heightToDp(7)
            }
        })
    },
    heading:{
        paddingLeft:widthToDp(2),
        fontSize:scaleFontSize(11),
        fontWeight: 'bold' 
    },
    image_view:{
        flexDirection: 'row',
        borderBottomColor:Colors.Alto,
        borderBottomWidth: 2,
        paddingBottom:heightToDp(1.5)
    },
    image:{
        width:100,
        height:100,
        borderRadius: 85,
        marginLeft: widthToDp(5),
        marginTop: heightToDp(3)
    },
    details:{
        justifyContent: 'center',
        paddingLeft:widthToDp(5.5),
        paddingTop: heightToDp(1.5)
    },
    font_size:{
        fontSize:scaleFontSize(9)
    },
    email:{
        fontSize:scaleFontSize(7.5),
        color: Colors.Emperor
    },
    location_view:{
        flexDirection: 'row',
        paddingTop: heightToDp(2)
    },
    map_icon:{
        width:widthToDp(15),
        height:heightToDp(12),
        paddingLeft: 15 
    },
    location_container:{
        paddingLeft:widthToDp(2.5),
        width:widthToDp('100%'),
        flexDirection: 'row',
        borderBottomColor: Colors.Alto,
        borderBottomWidth: 2 
    },
    tag:{
        fontSize:scaleFontSize(9),
        paddingVertical:heightToDp(.5)
    },
    disciptions:{
        fontSize: scaleFontSize(7),
        color: Colors.gray
    },
    chevron_icon:{
        left:widthToDp(26),
        paddingTop: heightToDp(1)
    },
    width:{
        width:widthToDp('48%')
    },
    views:{
        paddingLeft:widthToDp(2.5),
        width: widthToDp('100%'),
        flexDirection: 'row',
        borderBottomColor: Colors.Alto,
        borderBottomWidth: 2
    },
    containers:{
        flexDirection: 'row',
        paddingTop:heightToDp(2)
    },
    icons:{
        width: 50,
        height: 50,
        paddingLeft: 15
    },
    visa:{
        fontSize: scaleFontSize(7),
        color: Colors.gray,
        paddingLeft:widthToDp(2)
    },
    notification:{
        flexDirection: 'row',
        paddingTop: 15
    },
    card_no:{
        fontSize:scaleFontSize(6),
        paddingLeft:widthToDp(2.5),
        paddingBottom:heightToDp(2.5)
    },
    text_font:{
        fontSize:scaleFontSize(9)
    },
    logout:{
        color: Colors.monza,
        fontSize:scaleFontSize(9)
    }
});
export default ProfilePage;
