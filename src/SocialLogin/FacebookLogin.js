import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Dimensions,
} from "react-native";
import * as Facebook from "expo-facebook";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../theme/color";
import { widthToDp } from "../theme/Responsive";
import DialogueBox from "../SocialLogin/DialogueBox";
import * as firebase from "firebase";

const { width } = Dimensions.get("window");

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
// main function=====
const Login = (props) => {
  const { text } = props;
  const [localData, setLocalData] = useState({
    error: "",
    loading: false,
  });
  const [fbRes, setFbRes] = useState({});

  async function loginFB() {
    try {
      await Facebook.initializeAsync({ appId: "483211206177197" });
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large),email`
        );
        const fbData = await response.json();
        handleSocialLogin(fbData);
        setFbRes(fbData);
      } else {
        alert(`Cancel by user`);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  async function handleSocialLogin(socialData) {
    // check document
    const usersRef = await dbh
      .collection("users")
      .where("fb_id", "==", socialData.id)
      .get();
    if (usersRef.empty) {
      handlePopup(true);
    } else {
      // Get document id
      const data = usersRef.docs[0].id;
      //Update document
      dbh
        .collection("users")
        .doc(data)
        .set({
          fb_id: socialData.id,
          username: socialData.name,
          image_url: socialData.picture.data.url,
          email: socialData.email,
        })
        .then((data) => {
          console.log("Document written with ID: ", data);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      return;
    }
  }

  // for model box
  const [isVisible, setIsVisible] = useState(false);
  const handlePopup = (status) => {
    setIsVisible(status);
  };

  const handleAddData = (email) => {
    // Add document
    dbh
      .collection("users")
      .add({
        fb_id: fbRes.id,
        username: fbRes.name,
        image_url:
          fbRes && fbRes.picture && fbRes.picture.data && fbRes.picture.data.url
            ? fbRes.picture.data.url
            : "",
        email: email,
      })
      .then((docRef) => {
        handlePopup(false);
      })
      .catch((error) => {
        handlePopup(false);
        console.error("Error adding document: ", error);
      });
  };

  return (
    <View>
      <Text>{localData.error}</Text>
      <TouchableOpacity onPress={loginFB}>
        <View style={styles.buttonContainer}>
          <Icon
            name="facebook-square"
            size={35}
            color={Colors.white}
            style={styles.buttonLogo}
          />
          <Text style={styles.buttonText}> {text} </Text>
        </View>
        <DialogueBox
          onClose={handlePopup}
          open={isVisible}
          handleAddData={handleAddData}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  buttonContainer: {
    width: widthToDp(75),
    height: 50,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#3b5998",
    marginBottom: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLogo: {
    position: "absolute",
    left: 10,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
