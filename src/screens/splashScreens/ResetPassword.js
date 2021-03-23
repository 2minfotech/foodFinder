import React from 'react';
import { View, Text, StyleSheet, TextInput, Image,KeyboardAvoidingView ,Dimensions} from 'react-native';
import FlatButton from '../../components/common/ButtonL'
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textInput: {
        textAlign: 'center',
        fontSize:scaleFontSize(10),
        width: Dimensions.get('window').width /1.5,
        borderBottomWidth: 4,
        borderBottomColor: '#e3e3e3',
        paddingVertical:heightToDp(3),
        marginBottom:heightToDp(3)
    },
    button: {
        backgroundColor: "#00b970",
        borderRadius: 5,
        width:widthToDp('50%'),
        alignItems:'center',
        height:heightToDp(8),
        justifyContent:'center'
    },
});

const Reset = () => {
    return (
        <KeyboardAvoidingView behavior="height"  style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center'}}>  
            <Image source={require('../../assets/images/lock.png')}  />
            <Text>Enter your e-mail address below to receive</Text>
            <Text>your password reset instruction </Text>
            <TextInput placeholder="E-mail address" style={styles.textInput}/>
            <FlatButton text="RESET PASSWORD"  style={styles.button}  />
        </View>
        </KeyboardAvoidingView>
    );
};

export default Reset;
