import React from 'react';
import { View, Text, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import  Colors  from '../../theme/color';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                paddingTop:heightToDp(6)
            },
            android:{
                paddingTop:heightToDp(7)
            }
        })
    },
    heading:{
        paddingLeft:widthToDp(4.5),
        fontSize:scaleFontSize(12),
        fontWeight:'bold'
    },
    icon_view:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:heightToDp('15%')
    },
    Icon:{
        backgroundColor:'#f6e0e7',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:80,
        width:150,
        height:150
    },
    tag:{
        fontSize:scaleFontSize(12),
        fontWeight:'400' ,
        paddingTop:heightToDp(5),
        paddingBottom:heightToDp(2)
    },
    text:{
        width:widthToDp('80%'),
        fontSize:scaleFontSize(9),
        textAlign:'center',
        color:Colors.gray
    }
});
const Favorites = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Favorites</Text>
            <View style={styles.icon_view}> 
                <View style={styles.Icon}>
                <Icon name="star" size={50} color="#c33969" light
                />
                </View>
                <Text style={styles.tag}>Your Favorites List is Empty</Text>
                <Text style={styles.text}>Save your favorites food so you can always find it here and make order easier</Text>
            </View>
        </View>
    );
};
export default Favorites;
