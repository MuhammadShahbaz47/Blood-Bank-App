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