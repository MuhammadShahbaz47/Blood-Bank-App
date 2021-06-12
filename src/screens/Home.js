import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        {/* <Header hasTabs /> */}
        <Tabs tabStyle={{backgroundColor: 'red'}}>
        <Tab heading="Home" tabStyle={{backgroundColor: 'rgb(216,85,81)'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'rgb(216,85,81)'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Tab1 />
          </Tab>
          <Tab heading="Blood Requests" tabStyle={{backgroundColor: 'rgb(216,85,81)'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'rgb(216,85,81)'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Tab2 />
          </Tab>
          <Tab heading="Blood Banks" tabStyle={{backgroundColor: 'rgb(216,85,81)'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'rgb(216,85,81)'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
// import React, {useState} from 'react';
// import {View, Text, Button, TextInput,StyleSheet,ScrollView} from "react-native";
// import database from '@react-native-firebase/database'
// import { useEffect } from 'react';
// import {ListItem} from 'native-base';
// function Home(props){
//   const [user,setUser] = useState("");
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const save_data=()=>{
//     let user={
//       email,
//       password
//     }
//     console.log("user==>",user)
//     database().ref("/").child('user').push(user)
//   }

//   return (
//     <ScrollView>
//     <View>
//         <View style={styles.Cards}>
//           <Text style={styles.Name}>Muhammad Ishaq</Text>
//           <View style={styles.DetailsBorder}>
//           <Text style={styles.Details}>Blood Group: A+</Text>
//           <Text style={styles.Details}>Tehsil: DAGGAR</Text>
//           <Text style={styles.Details}>Home Address: Near Peshawar School</Text>
//           </View>
//         </View>
//         <View style={styles.Cards}>
//           <Text style={styles.Name}>Muhammad Ishaq</Text>
//           <View style={styles.DetailsBorder}>
//           <Text style={styles.Details}>Blood Group: A+</Text>
//           <Text style={styles.Details}>Tehsil: DAGGAR</Text>
//           <Text style={styles.Details}>Home Address: Near Peshawar School</Text>
//           </View>
//         </View>
//         <View style={styles.Cards}>
//           <Text style={styles.Name}>Muhammad Ishaq</Text>
//           <View style={styles.DetailsBorder}>
//           <Text style={styles.Details}>Blood Group: A+</Text>
//           <Text style={styles.Details}>Tehsil: DAGGAR</Text>
//           <Text style={styles.Details}>Home Address: Near Peshawar School</Text>
//           </View>
//         </View>
//         <View style={styles.Cards}>
//           <Text style={styles.Name}>Muhammad Ishaq</Text>
//           <View style={styles.DetailsBorder}>
//           <Text style={styles.Details}>Blood Group: A+</Text>
//           <Text style={styles.Details}>Tehsil: DAGGAR</Text>
//           <Text style={styles.Details}>Home Address: Near Peshawar School</Text>
//           </View>
//         </View>
//         <View style={styles.Cards}>
//           <Text style={styles.Name}>Muhammad Ishaq</Text>
//           <View style={styles.DetailsBorder}>
//           <Text style={styles.Details}>Blood Group: A+</Text>
//           <Text style={styles.Details}>Tehsil: DAGGAR</Text>
//           <Text style={styles.Details}>Home Address: Near Peshawar School</Text>
//           </View>
//         </View>
//         <View style={styles.Cards}>
//           <Text style={styles.Name}>Muhammad Ishaq</Text>
//           <View style={styles.DetailsBorder}>
//           <Text style={styles.Details}>Blood Group: A+</Text>
//           <Text style={styles.Details}>Tehsil: DAGGAR</Text>
//           <Text style={styles.Details}>Home Address: Near Peshawar School</Text>
//           </View>
//         </View>
//         <View style={styles.Cards}>
//           <Text style={styles.Name}>Muhammad Ishaq</Text>
//           <View style={styles.DetailsBorder}>
//           <Text style={styles.Details}>Blood Group: A+</Text>
//           <Text style={styles.Details}>Tehsil: DAGGAR</Text>
//           <Text style={styles.Details}>Home Address: Near Peshawar School</Text>          
//           </View>
//         </View>
//     </View>
//     </ScrollView>
//   )
// }
// const styles = StyleSheet.create({
//   Cards:{
//     margin:20,
//     borderRadius: 1,
//     paddingLeft:10,
//     marginBottom:10,
//     borderRadius: 1,
//     borderWidth: 1,
//     borderColor: 'red',
//     borderTopColor:'white'
//   },
//   Details:{
//     color:"gray",
//   },
//   DetailsBorder:{
//     borderRadius: 1,
//     borderStyle:"solid",
//   },
//   Name:{
//     color:"blue",
//     fontSize:20
//   }
// })

// export default Home;