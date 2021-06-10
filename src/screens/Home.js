import React, {useState} from 'react';
import {View, Text, Button, TextInput,StyleSheet,ScrollView} from "react-native";
import database from '@react-native-firebase/database'
import { useEffect } from 'react';
import {ListItem} from 'native-base';
function Home(props){
  const [user,setUser] = useState("");
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
    <ScrollView>
    <View>
        <View style={styles.Cards}>
          <Text style={styles.Name}>Muhammad Ishaq</Text>
          <View style={styles.DetailsBorder}>
          <Text style={styles.Details}>Blood Group: A+</Text>
          <Text style={styles.Details}>Tehsil: DAGGAR</Text>
          <Text style={styles.Details}>Home Address: Near Peshawar School</Text>
          </View>
        </View>
        <View style={styles.Cards}>
          <Text style={styles.Name}>Muhammad Ishaq</Text>
          <View style={styles.DetailsBorder}>
          <Text style={styles.Details}>Blood Group: A+</Text>
          <Text style={styles.Details}>Tehsil: DAGGAR</Text>
          <Text style={styles.Details}>Home Address: Near Peshawar School</Text>
          </View>
        </View>
        <View style={styles.Cards}>
          <Text style={styles.Name}>Muhammad Ishaq</Text>
          <View style={styles.DetailsBorder}>
          <Text style={styles.Details}>Blood Group: A+</Text>
          <Text style={styles.Details}>Tehsil: DAGGAR</Text>
          <Text style={styles.Details}>Home Address: Near Peshawar School</Text>
          </View>
        </View>
        <View style={styles.Cards}>
          <Text style={styles.Name}>Muhammad Ishaq</Text>
          <View style={styles.DetailsBorder}>
          <Text style={styles.Details}>Blood Group: A+</Text>
          <Text style={styles.Details}>Tehsil: DAGGAR</Text>
          <Text style={styles.Details}>Home Address: Near Peshawar School</Text>
          </View>
        </View>
        <View style={styles.Cards}>
          <Text style={styles.Name}>Muhammad Ishaq</Text>
          <View style={styles.DetailsBorder}>
          <Text style={styles.Details}>Blood Group: A+</Text>
          <Text style={styles.Details}>Tehsil: DAGGAR</Text>
          <Text style={styles.Details}>Home Address: Near Peshawar School</Text>
          </View>
        </View>
        <View style={styles.Cards}>
          <Text style={styles.Name}>Muhammad Ishaq</Text>
          <View style={styles.DetailsBorder}>
          <Text style={styles.Details}>Blood Group: A+</Text>
          <Text style={styles.Details}>Tehsil: DAGGAR</Text>
          <Text style={styles.Details}>Home Address: Near Peshawar School</Text>
          </View>
        </View>
        <View style={styles.Cards}>
          <Text style={styles.Name}>Muhammad Ishaq</Text>
          <View style={styles.DetailsBorder}>
          <Text style={styles.Details}>Blood Group: A+</Text>
          <Text style={styles.Details}>Tehsil: DAGGAR</Text>
          <Text style={styles.Details}>Home Address: Near Peshawar School</Text>          
          </View>
        </View>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
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