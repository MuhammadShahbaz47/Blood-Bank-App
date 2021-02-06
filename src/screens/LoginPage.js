import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet,Image} from "react-native";
import database from '@react-native-firebase/database'
import { LoginManager,AccessToken  } from "react-native-fbsdk";
import auth from '@react-native-firebase/auth'
import { TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler';

function LoginPage(props){

  const facebook_login = async () =>{
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  auth().signInWithCredential(facebookCredential)
  .then((user)=>{
    console.log("users==>",user)
  })
  .catch((err)=>{
    console.log("errors=>",err)
  })
  props.navigation.replace("Home")
  }
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
         <Image style={{width:150,height:150}} source={require('../images/launch_screen.png')}/>
          <Text style={styles.logoText}>Shaheen Blood Services</Text>
        <TouchableOpacity activeOpacity={0.85} onPress={facebook_login} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Login with Facebook</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  logoText:{
    fontSize:25,
    color:"red",
    marginBottom:80,
    fontWeight:'bold'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#4267b2",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom:250
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    
  }
});

export default LoginPage;
