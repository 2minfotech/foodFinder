import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RadioButton } from 'react-native-paper';
import Colors from '../../theme/color';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.iron,
    },
    editIconView: {
        flexDirection: 'row',
        borderBottomWidth: 10,
        paddingBottom: heightToDp(1.5),
        borderBottomColor: Colors.Alabaster,
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
    radio_view: {
        flexDirection: 'row',
        paddingHorizontal: widthToDp(5),
        borderTopWidth: 2,
        borderTopColor: Colors.Alto,
        paddingTop: heightToDp(4),
        paddingBottom: heightToDp(1.5),
        backgroundColor: Colors.white
    },
    landmark_tag: {
        fontSize: scaleFontSize(7),
    },
    p_ver4: {
        paddingVertical: 4,
    },
    font18: {
        fontSize: scaleFontSize(9)
    },
    blue: {
        color: Colors.Danube
    },
    icon_view: {
        backgroundColor: '#0069b9',
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 55
    },
    arrow_left:{
        paddingLeft:widthToDp(2.5),
        paddingRight:widthToDp(15) 
    },
    left35:{
        left: widthToDp(7.5)
    },
    left70:{  
        ...Platform.select({
            ios:{
                left:widthToDp(17),
            },
            android:{
                left:widthToDp(14),
            }
        })
    },
    section_view:{
        paddingLeft:widthToDp(2),
        width:widthToDp("71%") 
    },
    plus_icon:{
        paddingLeft:widthToDp('80%'),
        marginTop:heightToDp('15%') 
    }
});

const GreenDelivery = ({ navigation }) => {
    const [checked, setChecked] = React.useState();
    return (
        <View style={styles.container}>
            <View style={styles.editIconView}>
                <Icon name="arrow-left" size={30} color={Colors.white} style={styles.arrow_left} />
                <View style={styles.forCenter}>
                    <Text style={styles.editSize}>Delivery Address</Text>
                </View>
                <Icon name="check" size={30} color={Colors.white} solid style={styles.left70} />
            </View>
                <View style={styles.radio_view} >
                    <RadioButton
                        color={Colors.Hibiscus}
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <View style={styles.section_view}>
                        <Text style={[styles.font18, styles.p_ver4, styles.blue]}>OFFICE ADDRESS</Text>
                        <Text style={styles.font18}>1600 Pennsylvania Avenue,</Text>
                        <Text style={styles.landmark_tag}>Washington DC 22</Text>
                    </View>
                    <Icon name="ellipsis-v" size={30} color={Colors.black} solid style={styles.left35} />
                </View>
                <View style={styles.radio_view} >
                    <RadioButton
                        color={Colors.Hibiscus}
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}/>
                    <View style={styles.section_view}>
                        <Text style={[styles.font18, styles.p_ver4, styles.blue]}>HOME ADDRESS</Text>
                        <Text style={styles.font18}>221B Baker Street,</Text>
                        <Text style={styles.landmark_tag}>London WC2N 5DU</Text>
                    </View>
                    <Icon name="ellipsis-v" size={30} color={Colors.black} solid style={styles.left35} />
                </View>
                <View style={styles.radio_view} >
                    <RadioButton
                        color={Colors.Hibiscus}
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')} />
                    <View style={styles.section_view}>
                        <Text style={[styles.font18, styles.p_ver4, styles.blue]}>APARTMENT ADDRESS</Text>
                        <Text style={styles.font18}>2121 King Abdulaziz Road,Al Amal,</Text>
                        <Text style={styles.landmark_tag}>Riyadh 12643</Text>
                    </View>
                    <Icon name="ellipsis-v" size={30} color={Colors.black} solid style={styles.left35} />
                </View>
                <View style={styles.plus_icon}>
                    <View style={styles.icon_view}>
                        <Icon name="plus" size={30} color={Colors.white} />
                    </View>
                </View>
        </View>
    );
};
export default GreenDelivery;
