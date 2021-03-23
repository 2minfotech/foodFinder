import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../theme/color';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        marginTop:20
    },
    setting_text: {
        paddingLeft: widthToDp(4),
        fontSize: scaleFontSize(11),
        fontWeight: 'bold',
       
    },
    image_view: {
        flexDirection: 'row',
        borderBottomColor: Colors.Alto,
        borderBottomWidth: 2,
        paddingBottom: heightToDp(2),
        paddingTop:20
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 75,
        marginLeft: widthToDp(5),
        marginTop: heightToDp(2)
    },
    font18: {
        fontSize: scaleFontSize(9)
    },
    email: {
        fontSize: scaleFontSize(7),
        color: Colors.Emperor
    },
    text_container: {
        justifyContent: 'center',
        paddingLeft: widthToDp(5),
        paddingTop: heightToDp(1)
    },
    notification_container: {
        paddingLeft: widthToDp('5%'),
        paddingTop: heightToDp('1%')
    },
    heading: {
        fontSize: scaleFontSize(12),
        paddingVertical: heightToDp('.5%')
    },
    icon: {
        width: 50,
        height: 50
    },
    section_view: {
        flexDirection: 'row',
        paddingTop: heightToDp(1)
    },
    heading_view: {
        width: widthToDp('100%'),
        flexDirection: 'row'
    },
    heading_decor: {
        fontSize: scaleFontSize(9),
        paddingTop: heightToDp(.2)
    },
    left_icon: {
        paddingTop: 2,
        position: 'absolute',
        right: heightToDp(12)
    },
    second_heading: {
        flexDirection: 'row',
        paddingTop: heightToDp(1.5)
    },
    second_view: {
        paddingLeft: widthToDp(2),
        width: widthToDp('100%'),
        flexDirection: 'row'
    },
    font22: {
        fontSize: scaleFontSize(10)
    },
    login: {
        paddingLeft: widthToDp('5%'),
        paddingBottom: heightToDp('5%')
    }
});

const Settings = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:Colors.white,marginTop:20}}>
            <View style={styles.container}>
                <View >
                <Text style={styles.setting_text}>Settings</Text>
                </View>
              
                <View style={styles.image_view}>
                    <Image
                        source={require('../../assets/images/my.png')}
                        style={styles.image} />
                    <View style={styles.text_container}>
                        <Text style={styles.font18}>Hanif Mohammad</Text>
                        <Text style={styles.email}>Thehanifmohd@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.notification_container}>
                    <Text style={styles.heading}>Notifications</Text>
                    <View style={styles.section_view}>
                        <View>
                            <Icon name="bell" size={30} color={Colors.green} solid
                                style={styles.icon} />
                        </View>
                        <View style={styles.heading_view}>
                            <View>
                                <Text style={styles.heading_decor}> Notication</Text>
                            </View>
                            <Icon name="toggle-on" size={40} color={Colors.green}
                                style={styles.left_icon} />
                        </View>
                    </View>
                    <Text style={styles.heading}>Address</Text>
                    <View style={styles.section_view}>
                        <View>
                            <Icon name="map-marker-alt" size={30} color={Colors.green} solid
                                style={styles.icon} />
                        </View>
                        <View style={styles.heading_view}>
                            <View >
                                <Text style={styles.heading_decor}>Set Delivery Method</Text>
                            </View>
                            <Icon name="chevron-right" size={15} color={Colors.gray}
                                style={styles.left_icon} />
                        </View>
                    </View>
                    <Text style={styles.heading}>Payments</Text>
                    <View style={styles.section_view}>
                        <View>
                            <Icon name="credit-card" size={30} color={Colors.green} solid
                                style={styles.icon} />
                        </View>
                        <View style={styles.heading_view}>
                            <View >
                                <Text style={styles.heading_decor}>Choose Payment Method</Text>
                            </View>
                            <Icon name="chevron-right" size={15} color={Colors.gray}
                                style={styles.left_icon} />
                        </View>
                    </View>
                    <Text style={styles.heading}>Orders</Text>
                    <View style={styles.second_heading}>
                        <View>
                            <Icon name="stream" size={30} color={Colors.green}
                                style={styles.icon} />
                        </View>
                        <View style={styles.second_view}>
                            <View>
                                <Text style={styles.font18}> My Orders</Text>
                            </View>
                            <Icon name="chevron-right" size={15} color={Colors.gray}
                                style={styles.left_icon} />
                        </View>
                    </View>
                    <Text style={styles.heading}>About</Text>
                    <View style={styles.second_heading}>
                        <View>
                            <Icon name="fingerprint" size={30} color={Colors.green}
                                style={styles.icon} />
                        </View>
                        <View style={styles.second_view}>
                            <View>
                                <Text style={styles.font18}>Who We Are</Text>
                            </View>
                            <Icon name="chevron-right" size={15} color={Colors.gray}
                                style={styles.left_icon} />
                        </View>
                    </View>
                    <View style={styles.second_heading}>
                        <View>
                            <Icon name="cloud-download-alt" size={30} color={Colors.green}
                                style={styles.icon} />
                        </View>
                        <View style={styles.second_view}>
                            <View>
                                <Text style={styles.font18}>App Updates</Text>
                            </View>
                            <Icon name="chevron-right" size={15} color={Colors.gray}
                                style={styles.left_icon} />
                        </View>
                    </View>
                    <View style={styles.second_heading}>
                        <View>
                            <Icon name="file-contract" size={30} color={Colors.green}
                                style={styles.icon} />
                        </View>
                        <View style={styles.second_view}>
                            <View>
                                <Text style={styles.font18}>Terms of Use</Text>
                            </View>
                            <Icon name="chevron-right" size={15} color={Colors.gray}
                                style={styles.left_icon} />
                        </View>
                    </View>
                </View>
                <View style={styles.login}>
                    <Text style={styles.font22}>Logins</Text>
                </View>
            </View>
        </ScrollView>
    );
};
export default Settings;
