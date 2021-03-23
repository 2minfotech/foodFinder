import React from "react"
import { StyleSheet, Text, View, Image, Button } from "react-native"
import * as Expo from 'expo'
import * as GoogleSignIn from 'expo-google-sign-in';
import  Constants  from 'expo-constants';

class GoogleLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }
  signIn = async () => {
      console.warn('hello')
    try {
      const result = await Expo.GoogleSignIn.logInAsync({
        webClientId:
          "998204063454-d6ppjr6o97cg72bvljh7nmon9h5glado.apps.googleusercontent.com",
        iosClientId: 
        "3145272766-fqls3t9ieu69kdfbjamgs1nk5chn0c97.apps.googleusercontent.com",
        androidClientId:
        "280989399365-pg48vgb8ov1s4q6d8tbl9gfmb4idqfqt.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.warn("cancelled")
      }
    } catch (e) {
      console.warn("error", e)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    )
  }
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})

export default GoogleLogin