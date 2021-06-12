import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet,Image} from "react-native";
import database from '@react-native-firebase/database'
import { LoginManager,AccessToken  } from "react-native-fbsdk";
import auth from '@react-native-firebase/auth'
import { TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import {Container,Content,Header,Form,Input,Item,Button,Label,Icon} from 'native-base';

var firebaseConfig = {
  apiKey: "AIzaSyD-IM6Hs446sUIr-cUZinwYJ1YuR2GXO60",
  authDomain: "bloodbankapp-87f46.firebaseapp.com",
  databaseURL: "https://bloodbankapp-87f46-default-rtdb.firebaseio.com",
  projectId: "bloodbankapp-87f46",
  storageBucket: "bloodbankapp-87f46.appspot.com",
  messagingSenderId: "596431124630",
  appId: "1:596431124630:web:ade9b008d714da62b8aab7",
  measurementId: "G-XZN7PDBVMR"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default class MainLogin extends React.Component{
  constructor(props){
      super(props);

      this.state = ({
          email:"",
          password:""
      })
  }

signUp = (email,password)=>{
  try{
      if(this.state.password.length<6){
          alert("Password must be atleast 6 characters");
          return;
      }
      // alert(email)
      firebase.auth().createUserWithEmailAndPassword(email.trim(),password);
      alert("Congratulations, your account has been successfully created.")
  }
  catch(error){
      console.log(error.toString())
  }
}
login = (email,password)=>{

  const nav = this.props.navigation;
    
  firebase.auth().signInWithEmailAndPassword(email,password)
          .then( user => {
              console.log(user)
               nav.replace('Home')
          }). catch( error => {
               console.log(error)
               alert("Login Failed!")
         })
  }

  render(props){
    const nav = this.props.navigation;
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
    nav.replace('Home')
    }
      return(
      <Container style={styles.main}>
          <Container style={styles.Logo}>
          <Image style={{width:150,height:150}} source={require('../images/launch_screen.png')}/>
          <Text style={styles.LogoText}>Shaheen Blood Services</Text>
          </Container>
          <Container style={styles.container}>
              <Form>
                  <Item floatingLabel>
                  <Label>Email</Label>
                  <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={(email)=>this.setState({email})}
                  />
                  </Item>

                  <Item floatingLabel>
                  <Label>Password</Label>
                  <Input
                  secureTextEntry={true}
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={(password)=>this.setState({password})}
                  />
                  </Item>

                  <Button
                  style={{marginTop:20}}
                  full
                  rounded
                  danger
                  onPress={()=>this.login(this.state.email,this.state.password)}
                  // onPress={() => this.props.navigation.navigate('Home')}
                  >
                      <Text style={{color:"white"}}>Login</Text>
                  </Button>

                  <Button style={styles.SignUpColor}
                  style={{marginTop:10}}
                  full
                  rounded
                  onPress={()=>this.signUp(this.state.email,this.state.password)}
                  >
                      <Text style={{color:"white"}}>Sign Up</Text>
                  </Button>
                  <Text style={{textAlign:"center",marginTop:5,marginBottom:5}}>or</Text>
                  <TouchableOpacity
                  onPress={facebook_login} style={styles.fbBtn}>
                  <Text style={{color:"white",textAlign:"center"}}>Login with Facebook</Text>
                  </TouchableOpacity>
              </Form>
          </Container>
      </Container>
      )
  }
}

const styles = StyleSheet.create({
  main: {
      flex:1,
      backgroundColor: 'rgb(249, 250, 252)',
      paddingBottom:150,
    },
  Logo: {
      backgroundColor: 'rgb(249, 250, 252)',
      justifyContent:"flex-end",
      alignItems:"center"
    },
  LogoText: {
      color: 'red',
      fontSize: 20,
      paddingTop:5,
      fontWeight: 'bold'
    },
  container: {
      backgroundColor: 'rgb(249, 250, 252)',
      justifyContent:"flex-start",
      padding:10
    },
    fbBtn:{
      backgroundColor:"rgba(24,120,241,255)",
      padding:13,
      borderRadius:30
    }
  })
