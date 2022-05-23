import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, } from "react-native";
import karotBunny from "../Images/karot-bunny-logo.png"
import karotSlogan from "../Images/karot-slogan.png"

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
    const [request, response, promptAsync] = Google.useAuthRequest({
        // This URI includes a localhost url
        webClientId:
          "1038262737574-j0un3526ir5mkdo2cno1fl7o0v3jlnla.apps.googleusercontent.com",
        // This URI includes a expo.go uri
        expoClientId:
          "1038262737574-iddu4aellun0nlvpd5auvie2o35p39pu.apps.googleusercontent.com",
      });

      const [loggedIn, setLoggedIn] = React.useState("");

      useEffect(
        () => {
          if (response?.type === "success") {
            const { authentication, type } = response;
            setLoggedIn(type)
          }
        }, [response]);

  return (
      <View style={styles.container}>
          <Image source={karotBunny} style={styles.bunnyLogo} />
          <Image source={karotSlogan} style={styles.karotSlogan} />
    <TouchableOpacity
      disabled={!request}
      color= 'white'
      title="Login"
      onPress={() => {
        promptAsync();
      }}
      style={styles.loginButton}
    >
    <Text style={styles.textLogin}>Login</Text>
    </TouchableOpacity>
    {/* This will deisplay wether u are logged in or not */}
    <Text>
      {loggedIn === "success" ? "Logged In" : "Logged Out"}
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: '100%'
  },
  bunnyLogo:{
    width: 263,
    height: 263,
  },
  karotSlogan:{
    marginTop: 30,
    marginBottom: 30,
    width: 218,
    height: 83,
  },
  loginButton:{
      flexDirection: 'column',
      height: 40,
      width: 80,
      backgroundColor: 'white',
      justifyContent: 'center',
      borderRadius: 10, 
  },
  textLogin:{
    textAlign: 'center',
    fontSize: 20,
  }
});


export default Login