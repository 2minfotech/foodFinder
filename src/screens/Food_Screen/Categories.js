import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../theme/color';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';
import FoodImage from './FoodImage';
import Card_Image from './FoodImageCard'
import Horizantal_Card from './Horizantal_Card';

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: heightToDp(6),
        backgroundColor: Colors.white,
        
    },
    firstViewAll: {
        ...Platform.select({
            ios: {
                color: Colors.green,
                fontSize: scaleFontSize(8),
                fontWeight: 'bold',
                paddingLeft: widthToDp(' 50%')
            },
            android: {
                color: Colors.green,
                fontSize: scaleFontSize(8),
                fontWeight: 'bold',
                paddingLeft: widthToDp(' 48%')
            },
        })
    },
    SecoundViewAll: {
        ...Platform.select({
            ios: {
                color: Colors.green,
                fontSize: scaleFontSize(8),
                fontWeight: 'bold',
                paddingLeft: widthToDp(' 5%')
            },
            android: {
                color: Colors.green,
                fontSize: scaleFontSize(8),
                fontWeight: 'bold',
                paddingLeft: widthToDp(' 5%')
            },
        })
    },
    PopularViewAll: {
        ...Platform.select({
            ios: {
                color: Colors.green,
                fontSize: scaleFontSize(8),
                fontWeight: 'bold',
                paddingLeft: widthToDp(' 3%')
            },
            android: {
                color: Colors.green,
                fontSize: scaleFontSize(8),
                fontWeight: 'bold',
                paddingLeft: widthToDp(' 4.5%')
            },
        })
    },
    images: {
        position: 'absolute',
        color: 'white',
        marginTop: heightToDp(5),
        fontSize: scaleFontSize(10),
        fontWeight: 'bold',
    },
    //For horizantal
    Horizantal_Card: {
        width: '100%',
        padding: 10,
    },
    Horizantal_Image: {
        fontSize: scaleFontSize(10),
        paddingTop: heightToDp(2),
        paddingLeft: widthToDp(2),
    },
    //for Card
    card: {
        marginHorizontal: widthToDp(2),
        borderWidth: 1,
        backgroundColor: 'white',
        height: '100%',
        width: '18.5%',
        borderRadius: 5,
        paddingTop: 10,
        borderColor: '#C5CBC8',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(197, 200, 203, 1)',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.2,
            },
            android: {
                elevation: 5,

            },

        })
    },
    card_image: {
        color: '#0d0e0f',
        marginTop: 30,
        fontSize: scaleFontSize(10),
        width: widthToDp(50),
        paddingHorizontal: widthToDp(1),
        marginHorizontal: widthToDp(1),
        fontWeight: "500"
    },
    Categories: {
        fontSize: scaleFontSize(10),
        fontWeight: 'bold'
    },
    Horizantal_Scroller: {
        paddingTop: heightToDp(5),
        paddingBottom: heightToDp(2),
    },
    Offers: {
        paddingRight: widthToDp(' 42.5%'),
        fontSize: scaleFontSize(9),
        fontWeight: 'bold'
    },
    main_decor: {
        paddingLeft: 10,
        flexDirection: 'row'
    },
    bottom_decor: {
        paddingLeft: 10,
        flexDirection: 'row',
        marginTop: heightToDp(5)
    }
});
const Categories = (props) => {
    const { navigation } = props;
    const CategorieScroller = [
        { id: 1, Path: require('../../assets/images/pizzaa.png'), text: "Pizza" },
        { id: 2, Path: require('../../assets/images/grill.png'), text: "Grill" },
        { id: 3, Path: require('../../assets/images/pastaa.png'), text: "Pasta" },
        { id: 4, Path: require('../../assets/images/soups.png'), text: "Soups" },
        { id: 5, Path: require('../../assets/images/saladd.png'), text: "Salads" },
        { id: 6, Path: require('../../assets/images/dessert.png'), text: "Dessert" }
    ]
    const OffersScroller = [
        { id: 1, Path: require('../../assets/images/pizza-cob.png'), text: "Pizza Cabonara", Price: 299 },
        { id: 2, Path: require('../../assets/images/sandwich.png'), text: "Toast sandwich", Price: 99 },
        { id: 3, Path: require('../../assets/images/dessert.png'), text: "Ice Cream", Price: 59 },
        { id: 4, Path: require('../../assets/images/pastaa.png'), text: "Green Salad", Price: 79 },
        { id: 5, Path: require('../../assets/images/soups.png'), text: "Soup", Price: 159 },
    ]
    const PopularScroller = [
        { id: 1, Path: require('../../assets/images/pizza-cob.png'), text: "Pizza Cabonara", Price: 299, Discount: 349 },
        { id: 2, Path: require('../../assets/images/sandwich.png'), text: "Sandwich", Price: 99, Discount: 129 },
        { id: 3, Path: require('../../assets/images/dessert.png'), text: "Ice Cream", Price: 59, Discount: 79 },
        { id: 4, Path: require('../../assets/images/pastaa.png'), text: "Green Salad", Price: 79, Discount: 99 },
        { id: 5, Path: require('../../assets/images/soups.png'), text: "Soup", Price: 159, Discount: 179 },
    ]
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/*for Categories items */}
                <View style={styles.main_decor}>
                    <Text style={styles.Categories}>Categories</Text>
                    <Text
                        style={styles.firstViewAll}
                        onPress={() => navigation.navigate("All Categories")}
                    >    View all</Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.Horizantal_Scroller}
                >
                    {
                        CategorieScroller.map((item, i) => {
                            return (
                                <View key={i}>
                                    <FoodImage
                                        source={item.Path}
                                        text={item.text}
                                        style={styles.images}
                                    />
                                </View>
                            )
                        })
                    }
                </ScrollView>
                {/*for Special offers */}
                <View style={styles.bottom_decor}>
                    <Text style={styles.Offers}>Special Offers</Text>
                    <Text style={styles.SecoundViewAll} onPress={() => navigation.navigate("categories2")}> View all </Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: heightToDp(2), paddingLeft: widthToDp(2), paddingBottom: heightToDp(1.4) }}
                >
                    {
                        OffersScroller.map((data, i) => {
                            return (
                                <View style={styles.card} key={i}>
                                    <Card_Image
                                        source={data.Path}
                                        text={data.text}
                                        price={data.Price}
                                        style={styles.card_image}
                                        {...props}
                                    />
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View style={styles.bottom_decor}>
                    <Text style={{ paddingRight: widthToDp(60), fontSize: scaleFontSize(8), fontWeight: 'bold' }}>Popular</Text>
                    <Text style={styles.PopularViewAll} onPress={() => navigation.navigate("search")}>View all</Text>
                </View>
                {/*for Popular items */}
                <ScrollView
                    style={{ marginTop: heightToDp(2), paddingBottom: heightToDp(2) }}  >
                    {
                        PopularScroller.map((food, v) => {
                            return (
                                <View key={v} style={{ paddingHorizontal: widthToDp(2), paddingVertical: heightToDp(1) }}>
                                    <Horizantal_Card
                                        source={food.Path}
                                        style={styles.Horizantal_Image}
                                        text={food.text}
                                        price={food.Price}
                                        discount={food.Discount}
                                    />
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </ScrollView>
        </View>
    );
};
export default Categories;
