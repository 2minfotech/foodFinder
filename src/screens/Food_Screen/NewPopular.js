import React from 'react';
import { View, Text, Image, StyleSheet ,TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({
    container: {
       paddingBottom:'5%',
       paddingTop:'5%',
       borderBottomWidth:2,
       borderBottomColor:'#cacaca',
       width:'100%',
       paddingLeft:10
      
    },
    image: {
        height: 100,
        width: 116,
        borderRadius: 5,
        borderColor:'#cacaca',
        borderWidth:1,
        marginRight:15
    },
    buttonText: {
        color: '#ffffff',
        width:'100%',
        textAlign:'center',
        fontSize:30
    },
    button: {
        color: 'white',
        backgroundColor: '#cacaca',
        width: 40,
        borderRadius: 20,
        height:40,
        justifyContent:"space-around"
    }
})

const NewPopular = ({ source, style, text,title,Price }) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
            <Image source={source}
                style={styles.image} />
                <View style={{paddingBottom:50}}>
                <Text style={style}>{text}</Text>
            <Text style={{fontSize:19,width:'62.1%'}}> {title} </Text>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',right:10,position:'absolute',bottom:10}}>
                <Text style={{marginRight:50,fontSize:25,color:'#00b970',fontWeight:'bold'}}>$ {Price}</Text>
                <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </View> 
        </TouchableOpacity>
                <Text style={{fontSize:25,paddingHorizontal:20}}>0</Text>
                <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </View> 
        </TouchableOpacity>
            </View>
            
        </View>
    );
};

export default NewPopular;
