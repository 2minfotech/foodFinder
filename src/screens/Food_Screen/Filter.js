import React from 'react';
import { Platform, TextInput } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CommonButton from '../../components/common/Button'
import Colors from '../../theme/color'
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    CommonButton: {
        backgroundColor: Colors.green,
        position: 'absolute',
        alignSelf: 'center',
        width: widthToDp('90%'),
        height: 50,
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: heightToDp('5%')
    },
    view_container: {
        flexDirection: 'row',
        paddingHorizontal: widthToDp(2),
        paddingBottom: heightToDp(1),
        backgroundColor: Colors.green,
        ...Platform.select({
            ios: {
                paddingTop: heightToDp(5)
            },
            android: {
                paddingTop: heightToDp(5.5)
            }
        })
    },
    arrow_left: {
        paddingLeft: 2,
        width: widthToDp('20%')
    },
    heading: {
        fontSize: scaleFontSize(13),
        fontWeight: 'bold',
        paddingLeft: 50,
        color: Colors.white
    },
    text_view: {
        backgroundColor: '#c2eedd',
        borderRadius: 20,
        width: 80,
        height: 40,
        justifyContent: 'center',
        marginHorizontal:widthToDp(2.5)
    },
    input_box: {
        borderWidth: 2,
        borderColor: Colors.iron,
        height: 80,
        width: 150,
        fontSize: scaleFontSize(10),
        borderRadius: 5,
        marginLeft: '50%'
    },
    texts: {
        fontSize: scaleFontSize(7),
        textAlign: 'center',
        color: Colors.green
    },
    texts_view: {
        flexDirection: 'row',
        height: '10%'
    },
    country: {
        backgroundColor: Colors.iron,
        borderRadius: 20,
        width: 80,
        height: 40,
        justifyContent: 'center',
        marginHorizontal: widthToDp(2.5)
    },
    label: {
        fontSize: scaleFontSize(10),
        paddingLeft: widthToDp(5),
        height: '8%'
    },
    food_type: {
        fontSize: scaleFontSize(7),
        textAlign: 'center'
    },
    label_view: {
        flexDirection: 'row',
        width: '10%',
        height: '20%'
    },
    price_text: {
        fontSize: scaleFontSize(12),
        paddingLeft: widthToDp(5),
        paddingBottom: heightToDp(2),
        paddingTop: heightToDp(2)
    },
    bg_white: {
        backgroundColor: Colors.white
    }
});

const Filter = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view_container}>
                <Icon name="arrow-left" size={30} color={Colors.white} style={styles.arrow_left} />
                <Text style={styles.heading}>Filter</Text>
            </View>
            <View style={styles.bg_white}>
                <View>
                    <Text style={styles.price_text}> Price range  </Text></View>
                <View style={styles.label_view}>
                    <TextInput
                        placeholder="From 1$"
                        style={styles.input_box} />
                    <TextInput
                        placeholder="To 200$"
                        style={styles.input_box} />
                </View>
                <Text style={styles.label}>Menu</Text>
                <View style={styles.texts_view}>
                    <View style={styles.text_view}>
                        <Text style={styles.texts}>Breakfast</Text>
                    </View>
                    <View style={styles.text_view}>
                        <Text style={styles.texts}>Lunch</Text>
                    </View>
                    <View style={styles.country}>
                        <Text style={styles.food_type}>Diner</Text>
                    </View>
                    <View style={styles.text_view}>
                        <Text style={styles.texts}>Snack</Text>
                    </View>
                </View>
                <View style={styles.texts_view}>
                    <View style={styles.country}>
                        <Text style={styles.food_type}>Dessert</Text>
                    </View>
                    <View style={styles.country}>
                        <Text style={styles.food_type}>Teatime</Text>
                    </View>
                </View>
                <Text style={styles.label}>Cuisine</Text>
                <View style={styles.texts_view}>
                    <View style={styles.text_view}>
                        <Text style={styles.texts}>Italian</Text>
                    </View>
                    <View style={styles.text_view}>
                        <Text style={styles.texts}>French</Text>
                    </View>
                    <View style={styles.country}>
                        <Text style={styles.food_type}>Chinese</Text>
                    </View>
                    <View style={styles.country}>
                        <Text style={styles.food_type}>Japanese</Text>
                    </View>
                </View>
                <View style={styles.texts_view}>
                    <View style={styles.country}>
                        <Text style={styles.food_type}>Indian</Text>
                    </View>
                    <View style={styles.country}>
                        <Text style={styles.food_type}>Austrian</Text>
                    </View>
                    <View style={styles.country}>
                        <Text style={styles.food_type}>Armenian</Text>
                    </View>
                    <View style={styles.country}>
                        <Text style={styles.food_type}>Belgian</Text>
                    </View>
                </View>
                <View style={styles.bg_white}>
                    <CommonButton text="Apply Filters" style={styles.CommonButton} />
                </View>
            </View>
        </View>
    );
};
export default Filter;
