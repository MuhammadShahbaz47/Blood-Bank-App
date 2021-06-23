import React ,{useState,useEffect} from 'react'
import { StyleSheet, View,Linking,ActivityIndicator} from 'react-native'
import database from '@react-native-firebase/database'
import { ScrollView } from 'react-native-gesture-handler'
import {Content, Card, CardItem, Text, Body,Left,Button,Thumbnail } from 'native-base';

export default function App() {

  const [getData, setgetData]= useState([])

  useEffect(()=>{
    database().ref('user').on('value', (data)=>{
      setgetData(Object.values(data.val())
     ) })
    //  console.log(getData)
  })

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

// console.log(getData)
  return(
    <ScrollView>
    <View>
    <ActivityIndicator style={{justifyContent:"center"}} size="large" color="red" />
     {getData && getData.map((data)=>{
       return(
        //  <View>
        //  <Text>{data.email}</Text>
        //  <Text>{data.password}</Text>
        //  </View>

         <Content style={styles.cardStyle}>
           <Card >
            <CardItem>
              <Left>
              <Thumbnail source={require('../images/face.png')} />
                <Body>
                  <Text style={{paddingLeft:1}}>{data.Name}</Text>
                  <Text><Text style={{color:"rgb(80,80,80)"}}>looking for {data.bloodGroup} in </Text><Text style={{fontWeight:"bold",color:"rgb(80,80,80)"}}>{data.HLocation}</Text></Text>
                  <Text note style={{color:"gray"}}>{date}/{month}/{year}</Text>
                </Body>
              </Left>
            </CardItem>
             
             <CardItem>
               <Body>
                 <Text>{data.Message}</Text>
               </Body>
             </CardItem>

              <Button full danger>
              {/* <Icon name="logo-github" /> */}
                <Text onPress={()=>{Linking.openURL(`tel:${data.CNumber}`);}}>Donate</Text>
              </Button>
          </Card>
         </Content>
       )
     })}
    </View>
    </ScrollView>
  )
  }


const styles = StyleSheet.create({
  cardStyle:{
    marginLeft:10,
    marginRight:10
  }
});