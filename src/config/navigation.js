import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from "../screens/LoginPage";
import Home from '../screens/Home';

const Stack = createStackNavigator();

// const myOptions={
//   title:"Welcome to Shaheen Blood Services",
//   headerTintColor:"white",
//   headerStyle:{
//   backgroundColor:"red"
//   }
// }
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
        name="Login" 
        component={LoginPage}
        options={{headerShown: false}}
        // options={myOptions} 
        />
        <Stack.Screen name="Home" component={Home}  options={{ title: 'Shaheen Blood Services', 
        headerStyle: {
              backgroundColor: 'rgb(216,85,81)',
           },
        headerTitleStyle:{
          color:"white"
        }
           }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;