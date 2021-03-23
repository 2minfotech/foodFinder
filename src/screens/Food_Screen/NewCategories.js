import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FoodImage from './FoodImage';
import NewPopular from '../../screens/Food_Screen/NewPopular';
import Colors from '../../theme/color'
import { Platform } from 'react-native';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.white,
        ...Platform.select({
            ios:{
                paddingTop:heightToDp(6.5)
            },
            android:{
                paddingTop:heightToDp(6)
            }
        })

    },
    firstViewAll: {
        ...Platform.select({
            ios: {
                color: Colors.green,
                fontSize: scaleFontSize(8),
                fontWeight: 'bold',
                paddingLeft:widthToDp(55)
            },
            android: {
                color: Colors.green,
                fontSize: scaleFontSize(8),
                fontWeight: 'bold',
                paddingLeft:widthToDp(55)
            },
        })
    },
    SecoundViewAll: {
        ...Platform.select({
            ios: {
                color: Colors.green,
                fontSize: scaleFontSize(8),
                fontWeight: 'bold',
            },
            android: {
                color: Colors.green,
                fontSize: scaleFontSize(8),
                fontWeight: 'bold',
                marginLeft: -45
            },
        })
    },
    PopularViewAll: {
        ...Platform.select({
            ios: {
                color: Colors.green,
                fontSize: scaleFontSize(8),
                fontWeight: 'bold',
            },
            android: {
                color: Colors.green,
                fontSize: scaleFontSize(8),
                fontWeight: 'bold',
                marginLeft: -45
            },
        })
    },
    images: {
        position: 'absolute',
        color:Colors.white,
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
        backgroundColor:Colors.sandstone,
        left:widthToDp(2),
        marginTop:heightToDp(2),
        paddingVertical:heightToDp(1),
        paddingHorizontal:widthToDp(2),
        opacity:0.9,
        textAlign:'center'
    },
    //For horizantal
    Horizantal_Card: {
        width:widthToDp('100%'),
        padding: 10,
    },
    Horizantal_Image: {
        fontSize:scaleFontSize(12),
       fontWeight:'bold'
    },
    Categories: {
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
    },
    Horizantal_Scroller: {
        paddingTop: heightToDp(2.5),
        paddingBottom:heightToDp(2),
    },
    Offers: {
        paddingRight:widthToDp('49%'),
        fontSize:scaleFontSize(10),
        fontWeight: 'bold'
    },
    main_decor: {
        paddingLeft: widthToDp(2),
        flexDirection: 'row'
    },
    bottom_decor: {
        paddingLeft: widthToDp(2),
        flexDirection: 'row',
    },
    popular:{
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
        paddingRight:widthToDp(64)
    }
});
const NewCategories = (props) => {
    const { navigation } = props;
    const CategorieScroller = [
        { id: 1, Path: require('../../assets/images/pizzaa.png'), text: "Pizza" },
        { id: 2, Path: require('../../assets/images/grill.png'), text: "Grill" },
        { id: 3, Path: require('../../assets/images/pastaa.png'), text: "Pasta" },
        { id: 4, Path: require('../../assets/images/soups.png'), text: "Soups" },
        { id: 5, Path: require('../../assets/images/saladd.png'), text: "Salads" },
        { id: 6, Path: require('../../assets/images/dessert.png'), text: "Dessert" }
    ]
    const PopularScroller = [
        { id: 1, Path: require('../../assets/images/pizza-cob.png'), text: "Pizza Cabonara", Price: 299,discription:'Made with San Marzan tomatoes, mozzarella cheesw,fresh basil,salt a...' },
        { id: 2, Path: require('../../assets/images/sandwich.png'), text: "Sandwich", Price: 99,discription:'Ham sandwich with two servings of crips veggies on freshly baked bread...' },
        { id: 3, Path: require('../../assets/images/dessert.png'), text: "Ice Cream", Price: 59,discription:'Cake flavored with melted chocolate,cocoa powder'  },
       
    
    ]
    return (
        <View style={styles.container}>
                {/*for Categories items */}
                <View style={styles.main_decor}>
                    <Text style={styles.Categories}>Categories</Text>
                    <Text
                        style={styles.firstViewAll}
                        onPress={() => navigation.navigate("allcategories")} >  View all</Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.Horizantal_Scroller} >
                    {
                        CategorieScroller.map((item, i) => {
                            return (
                                <View key={i}>
                                    <FoodImage
                                        source={item.Path}
                                        text={item.text}
                                        style={styles.images} />
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View style={styles.bottom_decor}>
                    <Text style={styles.popular}>Popular</Text>
                    <Text style={styles.PopularViewAll}>View all</Text>
                </View>
                <ScrollView>
                    {
                        PopularScroller.map((food,v)=> {
                            return (
                                <View key={v}>
                                    <NewPopular 
                                    source={food.Path}
                                    style={styles.Horizantal_Image}
                                    text={food.text}
                                    title={food.discription}
                                    Price={food.Price} />                                   
                                </View>
                            )
                        })
                    }
                </ScrollView>
        </View>
    );
};
export default NewCategories;
