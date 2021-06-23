/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigation from './src/config/navigation'
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from "react";

const App = () => {
  useEffect(() => SplashScreen.hide());
  return (
      <AppNavigation/>
  );
};

export default App;
