import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native';
import OrderButton from '../../components/common/OrderButton';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        height:heightToDp('26%'),
        flex: 1
    },
    new_logo: {
        backgroundColor: '#00b970',
        justifyContent: 'center',
        borderRadius: 3,
        marginLeft: 5,
        paddingVertical: 3,
        paddingRight: 5,
        paddingLeft: 5,
        position: 'absolute',
        ...Platform.select({
            ios: {
                zIndex: 999
            },
            android: {
                elevation: 3,
            }
        })
    },
    new_text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    image: {
        height:heightToDp(14),
        width:widthToDp(35),
        borderRadius: 2
    },
    price: {
        color: '#00b970',
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
        paddingTop:heightToDp(1.5),
        paddingBottom: 10,
        paddingLeft:widthToDp(2),
        alignSelf: 'flex-start',
        letterSpacing: 2,
    },
    center: {
        alignItems: 'center'
    }
})
const Card_Image = (props) => {
    const { navigation ,source, style, text, price } = props;
     
     const handleEvent = ()=>{
        navigation.navigate("pizza")
     }
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.new_logo}>
                    <Text style={styles.new_text}>NEW</Text>
                </View>
                <View style={styles.center}>
                    <Image source={source}
                        style={styles.image} />
                </View>
                <View style={styles.center}>
                    <Text style={style}>{text}</Text>
                </View>
                <View>
                    <Text style={styles.price}> ${price} </Text>
                </View>
            </View>
            <OrderButton buttonTitle="ORDER" onPress={ handleEvent} {...props} />
        </View>

    );
};
[]
export default Card_Image;
