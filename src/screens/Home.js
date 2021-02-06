import React, {useState} from 'react';
import {View, Text, Button, TextInput,StyleSheet,ScrollView} from "react-native";
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
// const [data,setData]=useState([]);
// const readUserData=()=> {
//     firebase.database().ref('user').once('value', function (snapshot) {
        
//         console.log(snapshot.val())
//     });
// }
  return (
    <ScrollView>
    <View style={{flex:1}}>
        {/* <Text style={{fontSize:40}}>LOGIN</Text>
        <View style={{borderWidth:1,width:"80%"}}>
          <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholder="Email Address" />
        </View>
        <View  style={{borderWidth:1,width:"80%"}}>
          <TextInput secureTextEntry={true} value={password} onChangeText={(e)=>setPassword(e)} placeholder="Password"/>
        </View>
        <Button onPress={save_data} title="Save Data"/> */}
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