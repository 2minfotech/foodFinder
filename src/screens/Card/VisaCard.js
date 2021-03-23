import React from 'react';
import { View, Text, StyleSheet ,Image,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const VisaCard = () => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#6d53a5', '#4572b8']}
            style={{width:widthToDp('90%'),height:heightToDp(28),borderRadius:10,marginLeft:widthToDp(5),marginRight:widthToDp(5)}}
            >
                <Image source={require('../../assets/images/visa2.png')} 
                style={{width:widthToDp(22),height:heightToDp(5),marginTop:heightToDp(2),marginLeft:20,borderRadius:5}}
                />
                <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',paddingVertical:30}}> 
                    <Text style={{color:'#96a3d0',fontSize:scaleFontSize(10),fontWeight:'bold'}}>XXXX   XXXX   XXXX </Text>
                    <Text style={{fontSize:scaleFontSize(10),color:'white',fontWeight:'bold'}}>   4786</Text>
                </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'#96a3d0',fontSize:scaleFontSize(10),fontWeight:'bold',paddingLeft:12,paddingRight:"38%"}}>Card Holder </Text>
                <Text style={{color:'#96a3d0',fontSize:scaleFontSize(10),fontWeight:'bold'}}>Expires</Text>
            </View>
            <View style={{flexDirection:'row'}} >
                <Text  style={{fontSize:scaleFontSize(10),color:'white',fontWeight:'bold',paddingLeft:10,paddingTop:10}}>Hanif Mohammad</Text>
                <Text style={{fontSize:scaleFontSize(10),color:'white',fontWeight:'bold',paddingLeft:75,paddingTop:10}}>04 / 25</Text>
            </View>
            </LinearGradient>

            <View >
                <TouchableOpacity style={styles.paddVertical}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Edit details</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:heightToDp(2.5),
    },
    buttonText:{
        color:'#4572b8',
        fontSize:20
    },
    button:{
        alignItems:'center'
    },
    paddVertical: {
        paddingVertical:20
    }
});

export default VisaCard;
