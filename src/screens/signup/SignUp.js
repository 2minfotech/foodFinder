import styles from "./Style";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FlatButton from "../../components/common/ButtonL";
import FacebookLogin from "../../SocialLogin/FacebookLogin";
import GoogleButton from "../../components/common/GoogleButton";
import { scaleFontSize } from "../../theme/Responsive";
import * as firebase from "firebase";
import { Base64 } from "js-base64";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC_aBJZd7UCexGGJdTUvDR5R-fDvjrB9h8",
    authDomain: "food-delivery-93a37.firebaseapp.com",
    databaseURL: "https://food-delivery-93a37-default-rtdb.firebaseio.com",
    projectId: "food-delivery-93a37",
    storageBucket: "food-delivery-93a37.appspot.com",
    messagingSenderId: "504230477236",
    appId: "1:504230477236:web:9d62aa120fe010583f06e1",
    measurementId: "G-J18XDZ1ZXY",
  });
} else {
  firebase.app(); // if already initialized, use that one
}
const dbh = firebase.firestore();

const Signup = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    number: "",
    password: "",
  });
  const [flag, setFlag] = useState(false);
  const [numberFlag, setNumberFlag] = useState(false);

  const textInputChange = (val) => {
    setData({
      ...data,
      email: val,
    });
  };

  const handleNumberChange = (val) => {
    setData({
      ...data,
      number: val,
    });
  };

  const handlePasswordChange = (val) => {
    encryptPassword(val);
  };

  const encryptPassword = (val) => {
    let encode = Base64.encode(val);
    setData({
      ...data,
      password: encode,
    });
  };

  const handleEmailExists = () => {
    //console.warn(data);
    const dbData = dbh
      .collection("users")
      .where("email", "==", data.email)
      .get()
      .then((querySnapshot) => {
        let temp = {};
        querySnapshot.forEach((doc) => {
          temp = doc.data();
        });
        // check email
        setFlag(temp && temp.email ? true : false);
      });
  };

  const handleNumberExists = () => {
    //console.warn(data);
    const dbData = dbh
      .collection("users")
      .where("number", "==", data.number)
      .get()
      .then((querySnapshot) => {
        let temp = {};
        querySnapshot.forEach((doc) => {
          temp = doc.data();
        });
        // check email
        setNumberFlag(temp && temp.number ? true : false);
      });
  };

  const handleOnSubmit = () => {
    // Add document
    dbh
      .collection("users")
      .add({
        email: data.email,
        number: data.number,
        password: data.password,
      })
      .then(() => {
        console.log("no Error document: ");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="E-mail"
          style={styles.textInput}
          autoCorrect={false}
          onChangeText={(val) => textInputChange(val)}
          onBlur={() => handleEmailExists()}
        />
        <Text style={styles.errorEmail}>
          {" "}
          {flag ? "Email already exist!" : ""}
        </Text>
        <TextInput
          placeholder="Phone Number"
          style={styles.textInput}
          keyboardType={"numbers-and-punctuation"}
          onChangeText={(val) => handleNumberChange(val)}
          onBlur={() => handleNumberExists()}
        />
        <Text style={styles.errorNumber}>
          {" "}
          {numberFlag ? "Number already exist!" : ""}
        </Text>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={(val) => handlePasswordChange(val)}
        />
        <FlatButton
          text="CREATE ACCOUNT"
          style={styles.button}
          onPress={handleOnSubmit}
        />
        <Text style={styles.orText}> ----- or ----- </Text>
        <FacebookLogin text="sign up with facebook" />
        <GoogleButton text="SIGN   UP WITH GOOGLE" />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.terms}>By registering,you accpet our </Text>
        <Text
          style={{
            textDecorationLine: "underline",
            fontSize: scaleFontSize(8),
          }}
          onPress={() => navigation.navigate("Terms and Condition")}
        >
          Terms & Conditions
        </Text>
        <Text style={{ fontSize: scaleFontSize(8) }}> and </Text>
        <Text
          style={{
            textDecorationLine: "underline",
            fontSize: scaleFontSize(8),
          }}
          onPress={() => navigation.navigate("Terms and Condition")}
        >
          Privacy Policy
        </Text>
      </View>
    </View>
  );
};
export default Signup;
