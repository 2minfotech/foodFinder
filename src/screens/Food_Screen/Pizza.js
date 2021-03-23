import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import AddButton from '../../components/common/AddButton';
import MinusButton from '../../components/common/MinusButton';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';
import Icon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
        ...Platform.select({
            ios: {
                paddingTop:heightToDp(5.5),
            },
            android: {
                paddingTop: heightToDp(5.5),
            }
        }),
    },
    Xlogo: {
        position: 'absolute'
    },
    XlogoView: {
        backgroundColor: 'white',
        width:60,
        height:60,
        justifyContent: 'center',
        borderRadius: 55,
        marginHorizontal:widthToDp(5),
        marginTop: heightToDp(1)
    },
    X_text: {
        alignSelf: 'center',
        fontSize:scaleFontSize(12)
    },
    star_logo: {
        position: 'absolute',
        right: 0,
        paddingTop: heightToDp(1),
        paddingRight: widthToDp(3)
    },
    star_View: {
        backgroundColor: 'white',
        borderRadius:55,
        borderWidth: 12,
        borderColor: 'white'
    },
    piza_View: {
        flexDirection: 'row',
        width: '100%',
        paddingBottom: heightToDp(1),
        paddingTop:heightToDp(1.5),
        paddingLeft: widthToDp(1)
    },
    pizza_Text: {
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
    },
    pizza_Price: {
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
        color: '#00b970',
        position: 'absolute',
        right:widthToDp(2),
        bottom:heightToDp(1)
    },
    discription: {
        paddingLeft: widthToDp(1.9),
        paddingRight: widthToDp(2),
        paddingBottom: heightToDp(3)
    },
    discription_decor: {
        color: 'gray',
        fontSize:scaleFontSize(8)
    },
    tag_decor: {
        width: '25%',  
    },
    tag_font: {
        fontSize: scaleFontSize(8),
        fontWeight: '200'
    },
    lightColor: {
        width: '35%',
        paddingRight:widthToDp(2)
    },
    textDecor: {
        textAlign: 'center',
        fontSize: scaleFontSize(8),
        color: '#304147',
        marginVertical: heightToDp(1)
    },
    active_textDecor: {
        color: '#00b970',
        textAlign: 'center',
        fontSize: scaleFontSize(8),
        marginVertical: heightToDp(1)
    },
    active_tag: {
        backgroundColor: '#c2eedd',
        borderRadius: 3,
    },
    ViewContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 7,
        paddingRight: widthToDp(10)
    },
    tag_names: {
        backgroundColor: '#d4d6d6',
        borderRadius: 3
    },
    tag_touch: {
        width: '25%',
        paddingRight:widthToDp(2)
    },
    addView: {
        paddingHorizontal:widthToDp(6),
    },
    price_view: {
        flexDirection: 'row',
        backgroundColor: '#00b970',
        height:heightToDp(8),
        borderRadius: 5,
        alignItems: 'center' 
    },
    price_text: {
        marginLeft: widthToDp(2),
        fontSize: scaleFontSize(10),
        color: 'white',
        fontWeight: '500' 
    },
    addToCart: {
        fontSize: scaleFontSize(10),
        color: 'white',
        marginLeft: widthToDp(5),
        fontWeight: '500'
    }
});

const PizzaOrder = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{paddingBottom:heightToDp(2)}}>
                <Image
                    source={require('../../assets/images/pizza_veg.png')}
                    style={{ width:widthToDp(100), height:heightToDp(28)}}
                />
                <TouchableOpacity style={styles.Xlogo}>
                    <View style={styles.XlogoView}>
                        <Text style={styles.X_text}>X</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.star_logo}>
                    <View style={styles.star_View}>
                        <Icon
                            name="star" size={30} color="black" solid 
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View >
                <View style={styles.piza_View}>
                    <Text style={styles.pizza_Text}> Pizza Carbonara </Text>
                    <Text style={styles.pizza_Price}> $ 10.90</Text>
                </View>
                <View style={styles.discription}>
                    <Text style={styles.discription_decor}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt.
                </Text>
                </View>
            </View>
            <View>
            <View style={{height: '25%'}}>
                <View style={styles.ViewContainer}>
                    <View style={styles.tag_decor}>
                        <Text style={styles.tag_font}>SIZE</Text>
                    </View>
                    <TouchableOpacity style={styles.lightColor}>
                        <View style={styles.active_tag}>
                            <Text style={styles.active_textDecor}>Small</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tag_touch}>
                        <View style={styles.tag_names}>
                            <Text style={styles.textDecor}>Medium</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tag_touch}>
                        <View style={styles.tag_names}>
                            <Text style={styles.textDecor}>Large</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>         
                <View style={styles.ViewContainer}>
                    <View style={styles.tag_decor}>
                        <Text style={styles.tag_font}>SIDE DISH</Text>
                    </View>
                    <TouchableOpacity style={styles.lightColor}>
                        <View style={styles.active_tag}>
                            <Text style={styles.active_textDecor}>Mayanaise</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tag_touch}>
                        <View style={styles.tag_names}>
                            <Text style={styles.textDecor}>Cheese</Text>
                        </View>
                    </TouchableOpacity>
                </View>    
            </View>
            <View style={{paddingTop:heightToDp(4)}}>
            <View style={{ flexDirection: 'row', justifyContent: 'center',marginBottom:heightToDp(2)}}>
                <View >
                    <MinusButton />
                </View>
                <View style={{ justifyContent: 'center', paddingHorizontal:widthToDp(7) }}>
                    <Text style={{ fontSize:scaleFontSize(12) }}>
                        1
                    </Text>
                </View>
                <View>
                    <AddButton />
                </View>
            </View>
            <View style={styles.addView}>
                <TouchableOpacity onPress={()=> navigation.navigate('cart')}>
                    <View style={styles.price_view}>
                        <Text style={styles.price_text}> $ 10.90 </Text>
                        <Text style={styles.addToCart}> ADD TO CART</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};
export default PizzaOrder;
