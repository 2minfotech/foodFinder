import React from 'react'
import { View, Text, StyleSheet, Platform, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Colors from '../../theme/color'
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive'
import RoundImage from './RoundImage';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        ...Platform.select({
            ios: {
                paddingTop: heightToDp(5)
            },
            android:{
                paddingTop: heightToDp(5)
            }
        })
    },
    main_decor: {
        paddingLeft: widthToDp(4),
        flexDirection: 'row'
    },
    Categories: {
        fontSize: scaleFontSize(10),
        fontWeight: 'bold'
    },
    firstViewAll: {
        color: Colors.green,
        fontSize: scaleFontSize(8),
        fontWeight: 'bold',
        right: widthToDp(2),
        position: 'absolute'
    },
    Horizantal_Scroller: {
        paddingTop: heightToDp(2),
        paddingBottom: heightToDp(1),
    },
    images: {
        position: 'absolute',
        color: Colors.white,
        marginTop: 50,
        fontSize: scaleFontSize(12),
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row'
    },
    pizza_container: {
        paddingLeft: widthToDp('5%'),
        paddingRight: widthToDp('5%')
    },
    heading: {
        fontSize: scaleFontSize(12),
        fontWeight: 'bold',
        paddingLeft: widthToDp('5.5%')
    },
    paddingT: {
        paddingTop: heightToDp('2%'),
    },
    scroller: {
        height: heightToDp(40)
    },
    image: {
        width: 250,
        height: 150,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    pizza_view: {
        borderColor: Colors.gallery,
        borderWidth: 1,
        width: 250,
        borderRadius: 10,
        paddingLeft: widthToDp('2%'),
        paddingRight: widthToDp('2%'),
        paddingTop: heightToDp('1%'),
        position: 'absolute',
        top: heightToDp(17.8),
        backgroundColor: Colors.white,
        marginLeft: widthToDp(5)
    },
    subway_container: {
        borderColor: Colors.gallery,
        borderWidth: 1,
        width: 250,
        borderRadius: 10,
        paddingLeft: widthToDp('2%'),
        paddingRight: widthToDp('2%'),
        paddingTop: heightToDp('1%'),
        position: 'absolute',
        top: heightToDp(17.8),
        backgroundColor: Colors.white
    },
    dis_name: {
        fontSize: scaleFontSize(10),
        textTransform: 'capitalize'
    },
    star_container: {
        flexDirection: 'row',
        paddingBottom: heightToDp('1.8%'),
        borderBottomWidth: 1,
        borderBottomColor: Colors.gallery
    },
    p_left: {
        paddingLeft: widthToDp('2%')
    },
    price_container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: heightToDp('2%')
    },
    p_right: {
        paddingRight: widthToDp(16)
    },
    price: {
        fontSize: scaleFontSize(12),
        fontWeight: 'bold',
        color: Colors.green,
        justifyContent: 'center',
        textAlign: 'center'
    },
    like_icon: {
        backgroundColor: Colors.Alto,
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75,
        position: 'absolute',
        right: widthToDp(2)
    },
    second_container: {
        paddingTop:heightToDp('2.5%'),
         paddingBottom: heightToDp('2.5%'),
    },
    bg_image: {
        height: 250,
        width: 380,
        marginHorizontal: widthToDp('3%'),
        marginVertical: heightToDp('2.5%'),
        borderRadius: 15
    },
    hover_container: {
        backgroundColor: Colors.Alto,
        position: 'absolute',
        bottom: heightToDp(4),
        marginLeft: widthToDp('8%'),
        padding: widthToDp('4%'),
        width: widthToDp('82%'),
        borderRadius: 10
    },
    hover_heading: {
        fontSize: scaleFontSize(10),
        textTransform: 'capitalize',
        fontWeight: 'bold',
        letterSpacing: 1
    },
    discription: {
        fontSize: scaleFontSize(10),
        textTransform: 'capitalize',
        color: Colors.gray,
        letterSpacing: 1
    },
    dollars: {
        color: Colors.green,
        fontSize: scaleFontSize(9),
        letterSpacing: 1,
        paddingTop: heightToDp('1%')
    },
    dollar: {
        color: Colors.gray,
        fontSize: scaleFontSize(9),
        letterSpacing: 1
    },
    rating_container: {
        backgroundColor: Colors.green,
        flexDirection: 'row',
        width: 80,
        height: 40,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: widthToDp(10),
        top:heightToDp(4),
        borderRadius: 10
    },
    rate:{
        color: Colors.white, 
        fontSize: scaleFontSize(10), 
        fontWeight: 'bold' 
    }
})
const DiscoverFood = () => {

    const CategorieScroller = [
        { id: 1, Path: require('../../assets/images/pizzaa.png'), text: "Pizza" },
        { id: 2, Path: require('../../assets/images/grill.png'), text: "Grill" },
        { id: 3, Path: require('../../assets/images/pastaa.png'), text: "Pasta" },
        { id: 4, Path: require('../../assets/images/soups.png'), text: "Soups" },
        { id: 5, Path: require('../../assets/images/saladd.png'), text: "Salads" },
        { id: 6, Path: require('../../assets/images/dessert.png'), text: "Dessert" }
    ]
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Discover <Text style={{ color: Colors.green }}>Melbourne</Text></Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.scroller}>
                        <View style={styles.paddingT}>
                            <View style={styles.row}>
                                <View style={styles.pizza_container}>
                                    <Image source={require('../../assets/images/pizzaa.png')} style={styles.image} />
                                    <View style={styles.pizza_view}>
                                        <Text style={styles.dis_name}>pizza formaggio 35cm</Text>
                                        <View style={styles.star_container}>
                                            <Icon name="star" size={15} color={Colors.dark_yellow} solid />
                                            <Icon name="star" size={15} color={Colors.dark_yellow} solid />
                                            <Icon name="star" size={15} color={Colors.dark_yellow} solid />
                                            <Icon name="star" size={15} color={Colors.dark_yellow} solid />
                                            <Icon name="star-half-alt" size={15} color={Colors.dark_yellow} solid />
                                        </View>
                                        <View style={styles.price_container}>
                                            <Text style={styles.price}>$ 10.90</Text>
                                            <View style={styles.like_icon}>
                                                <Icon name="heart" size={18} color={Colors.white} solid />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.p_right}>
                                    <Image source={require('../../assets/images/subway.png')} style={styles.image} />
                                    <View style={styles.subway_container}>
                                        <Text style={styles.dis_name}>subway sandwich</Text>
                                        <View style={[styles.star_container, styles.p_left]}>
                                            <Icon name="star" size={15} color={Colors.dark_yellow} solid />
                                            <Icon name="star" size={15} color={Colors.dark_yellow} solid />
                                            <Icon name="star" size={15} color={Colors.dark_yellow} solid />
                                            <Icon name="star" size={15} color={Colors.dark_yellow} solid />
                                            <Icon name="star-half-alt" size={15} color={Colors.dark_yellow} solid />
                                        </View>
                                        <View style={[styles.price_container, styles.p_left]}>
                                            <Text style={styles.price}>$ 4.99</Text>
                                            <View style={styles.like_icon}>
                                                <Icon name="heart" size={18} color={Colors.white} solid />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View>
                        {/*for Categories items */}
                        <View style={styles.main_decor}>
                            <Text style={styles.Categories}>Categories</Text>
                            <Text
                                style={styles.firstViewAll}
                                onPress={() => navigation.navigate("allcategories")}    >  View all</Text>
                        </View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.Horizantal_Scroller}   >
                            {
                                CategorieScroller.map((item, i) => {
                                    return (
                                        <View key={i}>
                                            <RoundImage
                                                source={item.Path}
                                                text={item.text}
                                                style={styles.images} />
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    <View style={styles.second_container}>
                        <View style={styles.main_decor}>
                            <Text style={styles.Categories}>Popular restaurants</Text>
                            <Text style={styles.firstViewAll}>View All</Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/bg.png')} style={styles.bg_image} />
                            <View style={styles.hover_container}>
                                <Text style={styles.hover_heading}>the glass onion</Text>
                                <Text style={styles.discription}>japanese, sushi, italian,pizza</Text>
                                <Text style={styles.dollars}>$$$<Text style={styles.dollar}>$</Text></Text>
                            </View>
                            <View style={styles.rating_container}>
                                <Icon name="star" size={18} color={Colors.white} solid />
                                <Text style={styles.rate}> 5.0</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default DiscoverFood
