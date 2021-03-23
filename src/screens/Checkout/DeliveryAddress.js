import React from 'react';
import { View, Text, StyleSheet,Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RadioButton } from 'react-native-paper';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';
import  Colors  from '../../theme/color'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                paddingTop:heightToDp(6.5)
            },
            android: {
                paddingTop:heightToDp(6)
            }
        })
    },
    editIconView: {
        flexDirection: 'row',
        borderBottomWidth:widthToDp(2),
        paddingBottom:heightToDp(2.5),
        borderBottomColor:Colors.Alabaster,
    },
    forCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    editSize: {
        fontSize: scaleFontSize(12),
        fontWeight: 'bold',
    },
    radio_view: {
        flexDirection: 'row',
        paddingHorizontal:widthToDp(4),
        borderBottomWidth: 2,
        borderBottomColor: '#d7d7d7',
        paddingTop:heightToDp(3),
        paddingBottom:heightToDp(2) 
    },
    tag:{
        fontSize:scaleFontSize(9),
        paddingVertical: widthToDp(1),
        color: '#97bedf' 
    },
    street_tag:{
        fontSize:scaleFontSize(9),
        paddingVertical: widthToDp(1),
        color: '#7b7b7c' 
    },
    landmark_tag:{
        fontSize:scaleFontSize(8), 
        paddingVertical: widthToDp(1),
        color: '#a5a5a5' 
    },
    arrow_left:{
        paddingLeft:widthToDp(2.5),
        paddingRight: widthToDp(10) 
    },
    check_icon:{
        position: 'absolute',
        right:widthToDp(2)
    },
    View_container:{
        paddingLeft:widthToDp(2),
        width: widthToDp("70%") 
    },
    menu_icon:{
        left:widthToDp(8)
    },
    row:{
        flexDirection:'row'
    },
    center:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    icons:{
        backgroundColor: '#e3e4e4',
        marginVertical:heightToDp(2),
        paddingHorizontal:widthToDp(3),
        marginHorizontal:widthToDp(3),
        height: 50,
        borderRadius: 5
    },
    row:{
        flexDirection:'row'
    },
    icons:{
        backgroundColor:Colors.iron,
        marginVertical:heightToDp(2),
        paddingHorizontal:widthToDp(3),
        marginHorizontal:widthToDp(3),
        height: 50,
        borderRadius: 5
    },
    icon_decor:{
        width: 65,
        height: 65,
        borderRadius: 55,
    },
    mb20:{
        marginBottom:heightToDp(4) 
    },
    mb25:{
        marginBottom:heightToDp(5)
    },
    pos_right:{
        position:'absolute',
        right:widthToDp(6)
    },
    web_orange:{
        backgroundColor:Colors.weborange
    },
    Corn_flower:{
        backgroundColor:Colors.Cornflower
    },
    green:{
        backgroundColor:Colors.green
    },
    margin_left:{
        marginLeft:widthToDp(40)
    },
    bottom:{
        marginBottom:heightToDp(3)
    },
    text_decor:{
        fontSize:scaleFontSize(6),
        color:Colors.corduroy 
    }
   
});

const DeliveryAddress = ({ navigation }) => {
    const [checked, setChecked] = React.useState();
    return (
        <View style={styles.container}>
            <View style={styles.editIconView}>
                <Icon name="arrow-left" size={30} color={Colors.black} style={styles.arrow_left} />
                <View style={styles.forCenter}>
                    <Text style={styles.editSize}>Delivery Address</Text>
                </View>
                <Icon name="check" size={30} color={Colors.green} solid style={styles.check_icon} />
            </View>
                <View style={styles.radio_view} >
                    <RadioButton
                        color={Colors.Hibiscus}
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <View style={styles.View_container}>
                        <Text style={styles.tag}>OFFICE ADDRESS</Text>
                        <Text style={styles.street_tag}>1600 Pennsylvania Avenue,</Text>
                        <Text style={styles.landmark_tag}>Washington DC 22</Text>
                    </View>
                    <Icon name="ellipsis-v" size={30} color="#a5a5a5" solid style={styles.menu_icon} />
                </View>
                <View style={styles.radio_view} >
                    <RadioButton
                        color={Colors.Hibiscus}
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}

                    />
                    <View style={styles.View_container}>
                        <Text style={styles.tag}>HOME ADDRESS</Text>
                        <Text style={styles.street_tag}>221B Baker Street,</Text>
                        <Text style={styles.landmark_tag}>London WC2N 5DU</Text>
                    </View>
                    <Icon name="ellipsis-v" size={30} color="#a5a5a5" solid style={styles.menu_icon} />
                </View>
                <View style={[styles.radio_view,styles.bottom]} >
                    <RadioButton
                        color="#c33969"
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')}
                    />
                    <View style={styles.View_container}>
                        <Text style={styles.tag}>APARTMENT ADDRESS</Text>
                        <Text style={styles.street_tag}>2121 King Abdulaziz Road,Al Amal,</Text>
                        <Text style={styles.landmark_tag}>Riyadh 12643</Text>
                    </View>
                    <Icon name="ellipsis-v" size={30} color={Colors.Silver} solid style={styles.menu_icon} />
                </View>
                <View style={styles.row}>
                    <View style={[styles.row,styles.icons,styles.center,styles.margin_left]}>
                        <Text style={
                            styles.text_decor
                        }>Add new address</Text>
                    </View>
                    <View style={[styles.center , styles.green , styles.icon_decor , styles.pos_right, styles.mb20]}>
                        <Icon name="home" size={30} color={Colors.white} />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.row,styles.icons,styles.center,styles.margin_left]}>
                        <Text style={
                            styles.text_decor
                        }>Use current location</Text>
                    </View>
                    <View style={[styles.center , styles.web_orange , styles.icon_decor , styles.pos_right, styles.mb20]}>
                        <Icon name="map-marker-alt" size={30} color={Colors.white} />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.center , styles.Corn_flower , styles.icon_decor , styles.pos_right, styles.mb20]}>
                        <Icon name="times" size={30} color={Colors.white} />
                    </View>
                </View>
        </View>
    );
};
export default DeliveryAddress;