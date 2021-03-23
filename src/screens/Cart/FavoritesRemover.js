import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableHighlight, TouchableOpacity, StatusBar, Image } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightToDp } from '../../theme/Responsive';
import GrayAddButton from '../../components/common/GrayAddButton';
import GrayMinusButton from '../../components/common/GrayMinusbutton';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        flex: 1,
        paddingTop: heightToDp(8)
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 250,
        margin: 5,
        marginBottom: 140,
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    rowFrontVisible: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 180,
        padding: 10,
        marginBottom: 15
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        margin: 5,
        borderRadius: 5,
    },
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,
    },
    backRightBtnLeft: {
        backgroundColor: '#1f65ff',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    trash: {
        height: 25,
        width: 25,
        marginRight: 7,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#666',
        position: 'absolute',
        left: 130
    },
    details: {
        fontSize: 12,
        color: '#999',
    },
    discription: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#666',
        paddingTop: 30,
        paddingLeft: 10,
        width: 270
    },

});

const Remover = () => {

    const Images = [
        { id: 1, title: 'Subway sandwich', Price: "9.00", Path: require('../../assets/images/subway.png') },
        { id: 2, title: 'Pizza Margarita', Price: "20.00", Path: require('../../assets/images/marg_pizza.png') },
        { id: 3, title: 'Chocolate cake', Price: "30.00", Path: require('../../assets/images/cake.png') },
        { id: 4, title: 'Subway sandwich', Price: "9.00", Path: require('../../assets/images/subway.png') },
        { id: 5, title: 'Pizza Margarita', Price: "20.00", Path: require('../../assets/images/marg_pizza.png') },
        { id: 6, title: 'Chocolate cake', Price: "30.00", Path: require('../../assets/images/cake.png') },

    ]
    const [listData, setListData] = useState(
        Images.map((data, index) => ({
            key: `${index}`,
            title: data.title,
            Path: data.Path,
            Price: data.Price,
        })),
    );

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const onLeftActionStatusChange = rowKey => {
        console.log('onLeftActionStatusChange', rowKey);
    };

    const onRightActionStatusChange = rowKey => {
        console.log('onRightActionStatusChange', rowKey);
    };

    const onRightAction = rowKey => {
        console.log('onRightAction', rowKey);
    };

    const onLeftAction = rowKey => {
        console.log('onLeftAction', rowKey);
    };

    const VisibleItem = props => {
        const {
            data,
            rowHeightAnimatedValue,
            removeRow,
            leftActionState,
            rightActionState,
        } = props;

        if (rightActionState) {
            Animated.timing(rowHeightAnimatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start(() => {
                removeRow();
            });
        }
        return (
            <Animated.View
                style={[styles.rowFront, { height: rowHeightAnimatedValue }]}>
                <TouchableHighlight
                    style={styles.rowFrontVisible}
                    onPress={() => console.log('Element touched')}
                    underlayColor={'#aaa'} >
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={data.item.Path}
                            style={{ width: 120, height: 90, borderRadius: 10 }} />
                        <Text style={styles.title}>{data.item.title}</Text>
                        <Text style={styles.discription}>Lorem ipsum is simply dummy text of the printingand typesetting industry</Text>
                        <Text style={{ left: 130, bottom: -30, position: 'absolute', color: '#00b970' }}>$ {data.item.Price}</Text>
                        <View style={{ position: 'absolute', flexDirection: 'row', bottom: -40, right: 20 }}>
                            <GrayMinusButton />
                            <Text style={{ paddingHorizontal: 20, fontSize: 20, justifyContent: 'center', alignSelf: 'center' }}>0</Text>
                            <GrayAddButton />
                        </View>
                    </View>
                </TouchableHighlight>
            </Animated.View>
        );
    };

    const renderItem = (data, rowMap) => {
        const rowHeightAnimatedValue = new Animated.Value(60);

        return (
            <VisibleItem
                data={data}
                rowHeightAnimatedValue={rowHeightAnimatedValue}
                removeRow={() => deleteRow(rowMap, data.item.key)}
            />
        );
    };

    const HiddenItemWithActions = props => {
        const {
            swipeAnimatedValue,
            leftActionActivated,
            rightActionActivated,
            rowActionAnimatedValue,
            rowHeightAnimatedValue,
            onClose,
            onDelete,
        } = props;

        if (rightActionActivated) {
            Animated.spring(rowActionAnimatedValue, {
                toValue: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.spring(rowActionAnimatedValue, {
                toValue: 75,
                useNativeDriver: false
            }).start();
        }

        return (
            <Animated.View style={[styles.rowBack, { height: rowHeightAnimatedValue }]}>
                <Text>Left</Text>
                {!leftActionActivated && (
                    <TouchableOpacity
                        style={[styles.backRightBtn, styles.backRightBtnLeft]}
                        onPress={onClose}>
                        <MaterialCommunityIcons
                            name="close-circle-outline"
                            size={25}
                            style={styles.trash}
                            color="#fff"
                        />
                    </TouchableOpacity>
                )}
                {!leftActionActivated && (
                    <Animated.View
                        style={[
                            styles.backRightBtn,
                            styles.backRightBtnRight,
                            {
                                flex: 1,
                                width: rowActionAnimatedValue,
                            },
                        ]}>
                        <TouchableOpacity
                            style={[styles.backRightBtn, styles.backRightBtnRight]}
                            onPress={onDelete}>
                            <Animated.View
                                style={[
                                    styles.trash,
                                    {
                                        transform: [
                                            {
                                                scale: swipeAnimatedValue.interpolate({
                                                    inputRange: [-90, -45],
                                                    outputRange: [1, 0],
                                                    extrapolate: 'clamp',
                                                }),
                                            },
                                        ],
                                    },
                                ]}>
                                <MaterialCommunityIcons
                                    name="trash-can-outline"
                                    size={25}
                                    color="#fff"
                                />
                            </Animated.View>
                        </TouchableOpacity>
                    </Animated.View>
                )}
            </Animated.View>
        );
    };
    const renderHiddenItem = (data, rowMap) => {
        const rowActionAnimatedValue = new Animated.Value(75);
        const rowHeightAnimatedValue = new Animated.Value(60);
        return (
            <HiddenItemWithActions
                data={data}
                rowMap={rowMap}
                rowActionAnimatedValue={rowActionAnimatedValue}
                rowHeightAnimatedValue={rowHeightAnimatedValue}
                onClose={() => closeRow(rowMap, data.item.key)}
                onDelete={() => deleteRow(rowMap, data.item.key)}
            />
        );
    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {/* <StatusBar backgroundColor="#FF6347" barStyle="light-content"/> */}
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                disableRightSwipe
                onRowDidOpen={onRowDidOpen}
                leftActivationValue={100}
                rightActivationValue={-200}
                leftActionValue={0}
                rightActionValue={-500}
                onLeftAction={onLeftAction}
                onRightAction={onRightAction}
                onLeftActionStatusChange={onLeftActionStatusChange}
                onRightActionStatusChange={onRightActionStatusChange}
            />
        </View>
    );
};

export default Remover;