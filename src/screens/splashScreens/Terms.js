import React from 'react';
import { Platform } from 'react-native';
import { View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import SubmitButton from '../../components/common/SubmitButton'
import BorderedButton from '../../components/common/BorderedButton'
import { widthToDp, heightToDp,scaleFontSize } from '../../theme/Responsive'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: widthToDp(5),
    },
    heding: {
        color: '#00b970',
        fontSize:scaleFontSize(10)
    },

    textDecor: {
        paddingVertical:widthToDp(3),
        fontSize:scaleFontSize(8)
    },
    fullButton: {
        height:heightToDp(7),
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#00b970',
       marginHorizontal:widthToDp(8),
        width: Dimensions.get('window').width /3,
        justifyContent:'center'
    },
    button: {
        marginHorizontal:widthToDp(8),
        width: Dimensions.get('window').width /3,
        backgroundColor: "#49cd98",
        borderRadius: 5,
        height:heightToDp(7),
        justifyContent:'center'
    },
    text_container:{
        alignSelf: 'center',
        fontSize: scaleFontSize(11),
        paddingBottom:5,
        fontWeight: 'bold' 
    }
});


const Terms = ({navigation}) => {
    return (
        <View style={{ flex: 1,  ...Platform.select({
            ios:{
                paddingTop: Dimensions.get('window').height >600 ?20 :15,
            },
            android:{
                paddingTop:  Dimensions.get('window').height >600 ?20 :15,
            }
        }) }}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={{paddingRight:widthToDp(10)}}> 
                    <Text>
                        Last update: 31 January,2021
                    </Text>
                    <Text style={styles.textDecor} >Please read the following terms and conditions carefully as it sets out the terms of a legally binding agreement between you
                    (the reader) and Business Standard Private Limited.</Text>
                    <Text style={styles.heding}> 0) Introduction</Text>
                    <Text style={styles.textDecor} >
                        This following sets out the terms and conditions on which you may use the content on
                        business-standard.com website, business-standard.com's mobile browser site, Business Standard instore Applications and other digital publishing services
                        (www.smartinvestor.in, www.bshindi.com and www.bsmotoring,com) owned by Business Standard Private Limited, all the services herein will be referred to as
                        Business Standard Content Services.
                    </Text>
                    <Text style={styles.heding}>
                        1) Registration Access and Use
                    </Text>
                    <Text style={styles.textDecor}>
                        We welcome users to register on our digital platforms. We offer the below mentioned registration services which may be subject to change in the future.
                        All changes will be appended in the terms and conditions page and communicated to existing users by email.
                    </Text>
                    <Text style={styles.textDecor}>
                        Registration services are offered for individual subscribers only. If multiple individuals propose to access the same account or for
                        corporate accounts kindly contact or write in to us. Subscription rates will vary for multiple same time access.
                    </Text>
                    <Text style={styles.textDecor}>
                        The nature and volume of Business Standard content services you consume on the digital platforms will vary according to the type of registration you choose,
                        on the geography you reside or the offer you subscribe to.
                    </Text>
                    <Text style={styles.textDecor}>
                        All information received by us from your registration on business-standard.com or other digital products of Business Standard will be used
                        by Business Standard in accordance with our Privacy Policy. Kindly read the below mentioned details.
                    </Text>
                    <Text style={styles.textDecor}>
                        We welcome users to register on our digital platforms. We offer the below mentioned registration services which may be subject to change in the future.
                        All changes will be appended in the terms and conditions page and communicated to existing users by email.
                    </Text>
                    <Text style={styles.textDecor}>
                        Registration services are offered for individual subscribers only. If multiple individuals propose to access the same account or for
                        corporate accounts kindly contact or write in to us. Subscription rates will vary for multiple same time access.
                    </Text>
                    <Text style={styles.textDecor}>
                        The nature and volume of Business Standard content services you consume on the digital platforms will vary according to the type of registration you choose,
                        on the geography you reside or the offer you subscribe to.
                    </Text>
                    <Text style={styles.textDecorL}>
                        All information received by us from your registration on business-standard.com or other digital products of Business Standard will be used
                        by Business Standard in accordance with our Privacy Policy. Kindly read the below mentioned details.
                    </Text>
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', paddingBottom: widthToDp(8), paddingTop: widthToDp(8)}}>
                <View >
                    <BorderedButton text="Decline" style={styles.fullButton}  onPress={() => navigation.navigate("Welcome")} />
                </View>
                <View >
                    <SubmitButton text="Accept" style={styles.button} onPress={() => navigation.navigate("Verification")} /></View>
            </View>
        </View>
    );
};

export default Terms;
