import style from "./style";
import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FlatButton from "../../components/common/ButtonL";
import FacebookLogin from "../../SocialLogin/FacebookLogin";
import GoogleButton from "../../components/common/GoogleButton";
import { scaleFontSize } from "../../theme/Responsive";

const Login = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
      });
    } else {
      setData({
        ...data,
        email: val,
      });
    }
  };
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const SaveData = () => {
    console.warn(data);
  };

  return (
    <View>
      <View style={style.container}>
        <TextInput
          numberOfLines={1}
          keyboardAppearance={"dark"}
          placeholder="E-mail or Phone Number"
          style={style.textInput}
          autoCorrect={false}
          onChangeText={(val) => textInputChange(val)}
        />
        <TextInput
          keyboardAppearance={"dark"}
          placeholder="Password"
          style={style.textInput}
          secureTextEntry={true}
          onChangeText={(val) => handlePasswordChange(val)}
        />
        <FlatButton text="SIGN IN" style={style.button} onPress={SaveData} />
        <Text style={style.orText}> ----- or ----- </Text>
        {/*facebook button */}
        <FacebookLogin text="sign in with facebook" />
        {/*google button */}
        <GoogleButton text="SIGN IN WITH GOOGLE" />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={style.terms}>By registering,you accpet our</Text>
        <Text
          style={{
            textDecorationLine: "underline",
            fontSize: scaleFontSize(8),
          }}
          onPress={() => navigation.navigate("Terms and Condition")}
        >
          Terms & Conditions
        </Text>
        <Text style={{ fontSize: scaleFontSize(8) }}>and </Text>
        <Text
          style={{
            textDecorationLine: "underline",
            fontSize: scaleFontSize(8),
          }}
          onPress={() => navigation.navigate("Terms and Condition")}
        >
          {" "}
          Privacy Policy
        </Text>
      </View>
    </View>
  );
};
export default Login;
