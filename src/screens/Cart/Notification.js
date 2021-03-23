import React from 'react';
import { View, Text, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';
import Colors from '../../theme/color'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        ...Platform.select({
            ios: {
                paddingTop:heightToDp(6)
            },
            android:{
                paddingTop:heightToDp(6)
            }
        })
    },
    editIconView: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        paddingBottom:heightToDp(2.5),
        borderBottomColor:Colors.Alto
    },
    forCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    }, 
     editSize: {
        fontSize: scaleFontSize(12),
        fontWeight: 'bold'
    },
    arrow_left:{
        paddingLeft: widthToDp(2), 
        paddingRight: widthToDp(16)
    },
    view_container:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:widthToDp('30%')
    },
    icon_view:{
        backgroundColor:Colors.VanillaIce,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:80,
        width:150,
        height:150
    },
    heading:{
        fontSize:scaleFontSize(12),
        fontWeight:'400',
        paddingTop:heightToDp(4.5),
        paddingBottom:heightToDp(2.5)
    },
    content:{
        width:widthToDp('80%'),
        fontSize:scaleFontSize(9),
        textAlign:'center',
        color:Colors.gray
    }
});
const Notification = () => {
    return (
        <View style={styles.container}>
              <View style={styles.editIconView}>
                <Icon name="arrow-left" size={30} color="black" style={styles.arrow_left} />
                <View style={styles.forCenter}>
                    <Text style={styles.editSize}>Notification</Text>
                </View>
            </View>     
            <View style={styles.view_container}> 
                <View style={styles.icon_view}>
                <Icon name="bell" size={50} color={Colors.Hibiscus} light
                />
                </View>
                <Text style={styles.heading}>Your Notification List is Empty</Text>
                <Text style={styles.content}>Stay tuned! Notification about your orders will show up here</Text>
            </View>
        </View>
    );
};
export default Notification;
