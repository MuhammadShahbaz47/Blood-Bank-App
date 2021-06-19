// import React from 'react'
// import { StyleSheet, View, Text } from 'react-native'
// // import { useState } from 'react/cjs/react.production.min';
// // import {Input, Label} from 'native-base'

// export default function App() {
// // const [fname,setfname] = useState();
// // const [lname,setlname] = useState();

// // function getfName(e){
// // setfname(e.target.value)
// // }
// // function getlName(e){
// // setlname(e.target.value)
// // }
  
//   return (
//     <View style={styles.container}>
//       <Text style={styles.dummyText}>Create your first React Native App</Text>
//       {/* <Label>First Name</Label>
//       <Input
//                   autoCorrect={false}
//                   autoCapitalize="none"
//                   onChangeText={getfName}
//                   />
//                     <Label>Last Name</Label>
//                   <Input
//                   autoCorrect={false}
//                   autoCapitalize="none"
//                   onChangeText={getlName}
//                   /> */}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: '40%',
//   },
//   dummyText: {
//     color: 'red',
//     fontWeight: 'bold',
//     fontSize: 30,
//     textAlign: 'center'
//   }
// });

import React, {useState} from 'react';
import {View, Text, TextInput,StyleSheet} from "react-native";
import {Button,Container,Content, Header, Form, Item, Input, Label} from "native-base";
import database from '@react-native-firebase/database'
import { useEffect } from 'react';

function Home(props){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const save_data=()=>{
    let user={
      email,
      password
    }
    console.log("user==>",user)
    database().ref("/").child('user').push(user)
  }
  return (
    <Container style={styles.container}>
    <Content>
      <Form>
      <Item floatingLabel>
              <Label>Email</Label>
          <Input value={email} onChangeText={(e)=>setEmail(e)} placeholder="Email Address" />
       </Item>
        <Item floatingLabel>
              <Label>Password</Label>
              <Input value={password} onChangeText={(e)=>setPassword(e)} placeholder="Password"/>
            </Item>
        <Button
        style={{marginTop:20}}
        full
        rounded
        danger
        onPress={save_data}
        >
        <Text style={{color:"white"}}>Add Blood Request</Text>
      </Button>
      </Form>
      </Content>
    </Container >
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent:"flex-start",
    padding:10
  },
  Cards:{
    margin:20,
    borderRadius: 1,
    paddingLeft:10,
    marginBottom:10,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'red',
    borderTopColor:'white'
  },
  Details:{
    color:"gray",
  },
  DetailsBorder:{
    borderRadius: 1,
    borderStyle:"solid",
  },
  Name:{
    color:"blue",
    fontSize:20
  }
})

export default Home; 