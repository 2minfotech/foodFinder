import { StyleSheet } from 'react-native'
import { heightToDp, scaleFontSize, widthToDp } from '../../theme/Responsive';

const Style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: heightToDp(9)
    },
    welcome: {
        textAlign: 'center'
    },
    textInput: {
        fontSize: scaleFontSize(10),
        width: widthToDp('80%'),
        borderBottomWidth: 4,
        borderBottomColor: '#e3e3e3',
        paddingVertical: heightToDp(2),
        marginBottom: widthToDp(6)
    },
    orText: {
        color: '#e3e3e3',
        fontWeight: 'bold',
        fontSize: scaleFontSize(10),
        paddingTop: heightToDp(2)
    },
    button: {
        backgroundColor: "#00b970",
        justifyContent:'center',
        alignItems:'center',
        height: heightToDp(7),
        width: widthToDp(77),
        marginTop:heightToDp(2)
    },
    terms: {
        fontSize: scaleFontSize(8),
        fontWeight: '300',
      alignItems:'center',
      paddingTop:heightToDp(3),
      paddingHorizontal:widthToDp(15)
    },
    errorEmail: {
        color: "red",
        fontSize: 15,
        position: 'absolute',
        top:60,
        left: 40
    },
       errorNumber: {
        color: "red",
        fontSize: 15,
        position: 'absolute',
        top:140,
        left: 40
    }
});
export default Style