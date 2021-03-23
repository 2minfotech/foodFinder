import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button} from 'native-base';
import * as Animatable from 'react-native-animatable';
import FlatButton from '../../components/common/Button'
import BorderedButton from '../../components/common/BorderedButton'
import  images  from '../../theme/images';
import { widthToDp, heightToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:widthToDp(50)
    },
    food_logo: {
        marginTop:widthToDp(45),
        marginBottom:widthToDp(45),
    },
    normalButtton: {
        paddingLeft:widthToDp(45),
        fontSize:widthToDp(4)
    },
    fullButton: {
       marginTop:widthToDp(4),
       height:heightToDp(7),
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#00b970',
       width:widthToDp(85),
       justifyContent:'center'
    },
    button: {
       width:widthToDp(85),
        borderRadius: 5,
        height:heightToDp(7),
        backgroundColor: "#00b970",
        justifyContent:'center'
     },
});
const AskLogin = (props) => {
    const {navigation} =props
    return (
        <View style={styles.container}>
            <Animatable.Image
                animation="bounceIn"
                duraton="1500"
                source={images.food_logo1}
                style={styles.food_logo}
                resizeMode="stretch"
            />
            <FlatButton text="I AM NEW"  onPress={() => navigation.navigate("Sign-Up")} style={styles.button}/>
            <BorderedButton text="I HAVE BEEN HERE" onPress={() => navigation.navigate("Login")}  style={styles.fullButton}   />
          <Button transparent light
          onPress={() => navigation.navigate("All Categories")} >
             <Text style={styles.normalButtton}>Skip</Text> 
          </Button>
        </View>
    );
};
export default AskLogin;
