import { StyleSheet } from 'react-native'
import { widthToDp, heightToDp, scaleFontSize } from '../../theme/Responsive'

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: heightToDp(9),
    },
    welcome: {
        textAlign: 'center'
    },
    textInput: {
        fontSize: scaleFontSize(10),
        width: '80%',
        borderBottomWidth: 4,
        borderBottomColor: '#e3e3e3',
        paddingVertical: widthToDp(4),
        marginBottom: widthToDp(4),
    },
    orText: {
        color: '#e3e3e3',
        fontWeight: 'bold',
        fontSize: scaleFontSize(10),
        paddingTop: widthToDp(4),
    },
    button: {
        height: heightToDp(7),
        width: widthToDp(77),
        backgroundColor: "#00b970",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:heightToDp(5)
    },
    terms: {
        fontSize: scaleFontSize(8),
        fontWeight: '300',
        marginTop: widthToDp(12),
    }
});
export default style