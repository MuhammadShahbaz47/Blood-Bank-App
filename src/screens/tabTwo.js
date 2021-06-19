import React ,{useState,useEffect,Component} from 'react'
import { StyleSheet, View} from 'react-native'
import database from '@react-native-firebase/database'
import { ScrollView } from 'react-native-gesture-handler'
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';


export default function App() {
  const [getData, setgetData]= useState([])

  useEffect(()=>{
    database().ref('user').on('value', (data)=>{
      setgetData(Object.values(data.val())
     ) })
     console.log(getData)
  })
console.log(getData)
  return(
    <ScrollView>
    <View>
     {getData && getData.map((data)=>{
       return(
         <View>
         <Text>{data.email}</Text>
         <Text>{data.password}</Text>
         </View>
       )
     })}
    </View>
    </ScrollView>
  )
  }


const styles = StyleSheet.create({

});