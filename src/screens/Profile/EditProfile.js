import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { View, Text, StyleSheet, Image, Platform, TextInput } from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';
import { KeyboardAvoidingView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                paddingTop:heightToDp(6.5),
            },
            android: {
                paddingTop:heightToDp(6),
            }
        })
    },
    editIconView: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        paddingBottom: 20,
        borderBottomColor: '#d7d7d7'
    },
    forCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    editSize: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    arrow_icon: {
        paddingLeft:widthToDp(2),
        paddingRight:widthToDp(16)
    },
    check_icon:{
        position:'absolute',
        right:widthToDp(2)
    },
    profile_view:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width:150,
        height:150,
        borderRadius:100,
        marginTop:heightToDp(4)
    },
    camera_icon:{
        backgroundColor: '#00b970',
        width:80,
        height:80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 75,
        borderColor: 'white',
        borderWidth: 5,
    },
    name:{
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 2,
        paddingVertical:heightToDp(2.5),
        marginHorizontal: widthToDp(4)
    },
    title_color:{
        fontSize:scaleFontSize(10),
        color: '#c1c1c1'
    },
    place_holder:{
        fontSize:scaleFontSize(10),
        marginTop:heightToDp(1)
    },
    input_view:{
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 2,
        paddingVertical:heightToDp(2.5),
        marginHorizontal:widthToDp(4)
    }
});

const EditProfile = () => {
    return (
        <View style={styles.container} >
            <KeyboardAvoidingView behavior="position">
            <View >
                <View style={styles.editIconView}>
                    <Icon name="arrow-left" size={30} color="black" style={styles.arrow_icon} />
                    <View style={styles.forCenter}>
                        <Text style={styles.editSize}>Edit Profile</Text>
                    </View>
                    <Icon name="check" size={30} color="#00b970" solid style={styles.check_icon} />
                </View>
                <View style={styles.profile_view}>
                    <Image
                        source={require('../../assets/images/my.png')}
                        style={styles.image} />
                    <TouchableOpacity style={{position: 'relative',bottom:35,}}>
                        <View style={styles.camera_icon}>
                            <Icon name="camera" size={22} color="white" light />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.name}>
                        <Text style={styles.title_color}>Name</Text>
                        <TextInput
                            placeholder={"Hanif Mohammad"}
                            placeholderTextColor={"black"}
                            style={styles.place_holder}
                        />
                    </View>
                    <View style={styles.input_view}>
                        <Text style={styles.title_color}>E-mail Address</Text>
                        <TextInput
                            placeholder={"thehanifmohd@gmail.com"}
                            placeholderTextColor={"black"}
                            style={styles.place_holder}
                        />
                    </View>
                    <View style={styles.input_view}>
                        <Text style={styles.title_color}>Phone Number</Text>
                        <TextInput
                            placeholder={"+1 23 4567890"}
                            placeholderTextColor={"black"}
                            style={styles.place_holder}
                        />
                    </View>
                </View>
            </View>
            </KeyboardAvoidingView>
        </View>
    );
};
export default EditProfile;
