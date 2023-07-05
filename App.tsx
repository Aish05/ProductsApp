/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  View,
} from 'react-native';
import Splash from './src/screens/splash';
import Signup from './src/screens/auth/splash/signup';
import SignIn from './src/screens/auth/splash/signin';
import { NavigationContainer } from '@react-navigation/native';
import colors from './src/utils/colors';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createStackNavigator();

function App(): JSX.Element {

  const theme = {
    dark: false,
    colors: {
      primary: colors.white,
      background: colors.white,
      card: 'rgb(255, 255, 255)',
      text: colors.black,
      border: colors.lightGrey,
      notification: colors.darkGrey,
    },
  }

  return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="SingUp" component={Signup} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


export default App;
