import React, {useState} from 'react';
import {View, Text, TextInput,StyleSheet} from "react-native";
import {Button,Container,Content, Header, Form, Item, Input, Label, Textarea } from "native-base";
import database from '@react-native-firebase/database'
import { useEffect } from 'react';

function Home(props){
  
  const [Name,setName] = useState("");
  const [CNumber,setCNumber] = useState("");
  const [bloodGroup,setBloodGroup] = useState("");
  const [HLocation,setHLocation] = useState("");
  const [Message,setMessage] = useState("");
  
  const save_data=()=>{
    let user={
      Name,
      bloodGroup,
      HLocation,
      Message,
      CNumber
    }
    console.log("user==>",user)
    database().ref("/").child('user').push(user)  
    

}

  return (
    <Container style={styles.container}>
    <Content>
      <Form>

      <Item floatingLabel>
              <Label>Name</Label>
              <Input value={Name} onChangeText={(e)=>setName(e)} placeholder="Name"/>
        </Item>

      <Item floatingLabel>
              <Label>Contact Number</Label>
              <Input value={CNumber} onChangeText={(e)=>setCNumber(e)} placeholder="CNumber"/>
      </Item>

      <Item floatingLabel>
              <Label>Blood Group</Label>
          <Input 
          value={bloodGroup}
           onChangeText={(e)=>setBloodGroup(e)} placeholder="Blood Group" />
       </Item>

        <Item floatingLabel>
              <Label>Hospital or Location</Label>
              <Input value={HLocation} onChangeText={(e)=>setHLocation(e)} placeholder="HLocation"/>
        </Item>

        <Form>
              <Textarea style={styles.textArea} rowSpan={3} value={Message} onChangeText={(e)=>setMessage(e)} onPress={props.handleReset} placeholder="Message" />
        </Form>

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
  textArea:{
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginLeft:15,
    paddingLeft:1,
    fontSize:17,
    textAlignVertical:'center'
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