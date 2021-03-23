import React from 'react'
import { View, Text, StyleSheet, Platform, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';
import Colors from '../../theme/color'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00b970',
        ...Platform.select({
            ios: {
                paddingTop: heightToDp(6)
            },
            android:
            {
                paddingTop: heightToDp(5)
            }
        })
    },
    row:{
        flexDirection: 'row',
    },
    categories:{
        paddingHorizontal: widthToDp(5),
        paddingBottom:heightToDp(1.5)
    },
    arrow_left:{
        paddingLeft: 2,
        width:widthToDp('15%') 
    },
    heading:{
        fontSize:scaleFontSize(13),
        paddingLeft:widthToDp(10),
        color: Colors.white,
        fontWeight: 'bold'
    },
    scroller:{
        backgroundColor: Colors.white, 
        paddingTop:heightToDp(4)
    },
    item1:{
        paddingVertical:heightToDp(2),
        paddingHorizontal:widthToDp(2)
    },
    item2:{
        paddingVertical:heightToDp(2),
        paddingHorizontal:widthToDp(1)
    },
    image:{
        width: 180,
        height: 180,
        marginHorizontal:widthToDp(1),
        borderRadius: 15 
    },
    text_view:{
        position: 'absolute',
        bottom:heightToDp(5.5),
        right:widthToDp('20%')
    },
    name:{
        color: Colors.white,
        fontSize: scaleFontSize(13),
        fontWeight: 'bold' 
    },
    Quntity:{
        color: Colors.white,
        fontSize: scaleFontSize(9),
        fontWeight: 'bold'
    }
})

const CategoriesAll = () => {

const images = [
    {id:1,fItem:'Pizza',fQuntity:17,sItem:'Grill',sQuntity:48,fPath:require('../../assets/images/pizza-cob.png'),sPath:require('../../assets/images/grill.png')},
    {id:2,fItem:'Pasta',fQuntity:23,sItem:'Soups',sQuntity:9,fPath:require('../../assets/images/pastaa.png'),sPath:require('../../assets/images/soups.png')},
    {id:3,fItem:'Salads',fQuntity:15,sItem:'Dessert',sQuntity:26,fPath:require('../../assets/images/saladd.png'),sPath:require('../../assets/images/dessert.png')}


]
    return (
        <View style={styles.container}>
            <View style={[styles.row,styles.categories]}>
                <Icon name="arrow-left" size={30} color={Colors.white} style={styles.arrow_left} />
                <Text style={styles.heading}>ALL Categories</Text>
            </View>
            <ScrollView style={styles.scroller}>
                {
                    images.map((item,i) => {
                        return (
                            <View style={styles.row} key={i}>
                    <View style={styles.item1}>
                        <Image source={item.fPath} style={styles.image} />
                        <View style={styles.text_view}>
                            <Text style={styles.name}>{item.fItem}</Text>
                            <Text style={styles.Quntity}> {item.fQuntity} item</Text>
                        </View>
                    </View>
                    <View style={styles.item2}>
                        <Image source={item.sPath} style={styles.image} />
                        <View style={styles.text_view}>
                        <Text style={styles.name}>{item.sItem}</Text>
                            <Text style={styles.Quntity}> {item.sQuntity} item</Text>
                        </View>
                    </View>
                </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
export default CategoriesAll
