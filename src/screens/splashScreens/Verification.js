import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import SubmitButton from '../../components/common/SubmitButton'
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:heightToDp('25%'),
        alignItems: 'center',
    },
    fontSize: {
        fontSize:scaleFontSize(15)
    },
    textInput: {
        backgroundColor: '#c6efe0',
        paddingVertical:heightToDp(2),
        paddingHorizontal:widthToDp(7),
        flexDirection: 'row',
        marginRight:widthToDp(3)
    },
    button: {
        marginTop:heightToDp(10),
        backgroundColor: "#49cd98",
        borderRadius: 5,
        height:heightToDp(8),
        width:widthToDp("60%"),
        justifyContent:'center'
    },
});

const Verification = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.fontSize}>Verification Code</Text>
            <View style={{ alignItems: 'center', paddingBottom: 50 }}>
                <Text style={{color:'gray'}}> Please,enter verification code sent to </Text>
                <Text style={{color:'gray'}}> +1234567890</Text>
            </View>  
            <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.textInput}
                    keyboardType={'phone-pad'}
                    maxLength={1}
                    returnKeyType={'next'}
                />
                <TextInput style={styles.textInput}
                    keyboardType={'phone-pad'}
                    maxLength={1}
                    returnKeyType={'next'}
                />
                <TextInput style={styles.textInput}
                    keyboardType={'phone-pad'}
                    maxLength={1}
                    returnKeyType={'next'}
                />
                <TextInput style={styles.textInput}
                    keyboardType={'phone-pad'}
                    maxLength={1}
                    returnKeyType={'next'}
                />
            </View>
            <SubmitButton text="SUBMIT CODE" style={styles.button} onPress={() => navigation.navigate("Categories")}/> 
        </View>
    );
};
export default Verification;
