import React from 'react';
import { View, Text, Image,StyleSheet} from 'react-native';
import { heightToDp, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
        container : {
            paddingHorizontal:widthToDp(2),
            alignItems: 'center',
            paddingBottom:heightToDp(1.5)
        },
        image: {
            height:heightToDp(18),
            width:widthToDp('96%'),
            borderRadius:5
        }
})

const ImageHorizontal = ({source,style,text}) => {
    return (
      
        <View style={styles.container}>
            <Image source={source}
                style={styles.image} />
            <Text style={style}>{text}</Text>
       
        </View>
    );
};
export default ImageHorizontal;
