import React, { Component } from "react";
import {StyleSheet} from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Body, H1 } from "native-base";
import {Linking} from 'react-native';
export default class CardItemBordered extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text style={{fontWeight:"bold",color:"rgb(216,85,81)"}}>Burhani Blood Bank</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                <Text style={{fontWeight:"bold"}}>Address:</Text> Saifee Rd, Block F North Nazimabad Town, Karachi, Karachi City, Sindh
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text style={{color:"rgb(216,85,81)"}}>Contact No:</Text>
              <Text onPress={()=>{Linking.openURL('tel:02136644490');}}> (021) 36644490</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text style={{fontWeight:"bold",color:"rgb(216,85,81)"}}>Husaini Blood Bank</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                <Text style={{fontWeight:"bold"}}>Address:</Text> Green Mosque, Mahajir Camp, Baldia Town, Karachi, Karachi City, Sindh
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text style={{color:"rgb(216,85,81)"}}>Contact No:</Text>
              <Text onPress={()=>{Linking.openURL('tel:03333998321');}}> 0333 3998321</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text style={{fontWeight:"bold",color:"rgb(216,85,81)"}}>Fatmid Foundation</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                <Text style={{fontWeight:"bold"}}>Address:</Text> Garden East Karachi, Karachi City, Sindh
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text style={{color:"rgb(216,85,81)"}}>Contact No:</Text>
              <Text onPress={()=>{Linking.openURL('tel:02132225284');}}> (021) 32225284</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text style={{fontWeight:"bold",color:"rgb(216,85,81)"}}>NIBD Blood Bank</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                <Text style={{fontWeight:"bold"}}>Address:</Text> National Stadium Colony, Karachi, Karachi City, Sindh
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text style={{color:"rgb(216,85,81)"}}>Contact No:</Text>
              <Text> Not Avaliable</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text style={{fontWeight:"bold",color:"rgb(216,85,81)"}}>PWA Blood Bank</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                <Text style={{fontWeight:"bold"}}>Address:</Text> New Labour Colony Nanakwara, Karachi, Karachi City, Sindh
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text style={{color:"rgb(216,85,81)"}}>Contact No:</Text>
              <Text onPress={()=>{Linking.openURL('tel:02132735214');}}> (021) 32735214</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text style={{fontWeight:"bold",color:"rgb(216,85,81)"}}>Dow Blood Bank</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                <Text style={{fontWeight:"bold"}}>Address:</Text> Gulzar-e-Hijri Gulshan-e-Iqbal, Karachi, Karachi City, Sindh
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text style={{color:"rgb(216,85,81)"}}>Contact No:</Text>
              <Text> Not Avaliable</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}