import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const widthToDp = number => {
    let givenWidth =
        typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};
const heightToDp = number => {
    let givenHeight =
        typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

const scale = height /375

const scaleFontSize = (size) => {
    const newSize = size * scale
    if(Platform.OS == 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
    else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}
export { widthToDp, heightToDp,scaleFontSize }