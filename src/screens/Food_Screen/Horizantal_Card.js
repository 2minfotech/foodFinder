import React from 'react';
import { View, Text, Image, Platform, StyleSheet } from 'react-native';
import AddButton from '../../components/common/AddButton';
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
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
  image: {
    height:heightToDp(20),
    width:widthToDp('35%'),
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  onText: {
    width: '45.5%',
  },
  onPrice: {
    color: '#00b970',
    fontSize:scaleFontSize(8),
    fontWeight: 'bold',
    paddingTop:heightToDp(1.6),
  },
  onDiscount: {
    color: '#909090',
    fontSize: scaleFontSize(8),
    fontWeight: 'bold',
    textDecorationLine: 'line-through'
  },
  manage_priceView :{
    width:widthToDp('14%'),
    alignItems: 'flex-end',
    paddingRight: widthToDp(1)
  },
  manage_buttonView: {
    paddingRight: widthToDp(1),
    bottom: 0,
    position: 'absolute',
    marginBottom: heightToDp(0.8)
  }
});

const Horizantal_Card = (props) => {
  const { navigation ,source, style, text, price, discount } = props;

  const handleEvent = ()=>{
    navigation.navigate('pizza')
 }
  return (
    <View style={styles.container}>
      <View style={{ width:widthToDp('35%') }}>
        <Image
          source={source}
          style={styles.image}
        />
      </View>
      <View style={styles.onText}>
        <Text style={style}>{text}</Text>
      </View>
      <View style={styles.manage_priceView}>
        <View>
          <Text style={styles.onPrice}> ${price}</Text>
          <Text style={styles.onDiscount}> ${discount}</Text>
        </View>
        <View style={styles.manage_buttonView}>
          <AddButton onPress={ handleEvent} {...props}/>
        </View>
      </View>
    </View>
  );
};
export default Horizantal_Card;