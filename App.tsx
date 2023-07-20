/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Dispatch, SetStateAction, createContext, useState } from 'react';
import Splash from './src/screens/splash/splash';
import Signup from './src/screens/auth/signup/signUp';
import SignIn from './src/screens/auth/signin/signIn';
import { NavigationContainer } from '@react-navigation/native';
import colors from './src/utils/colors';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/home/home';
import { Image } from 'react-native';
import Favourites from './src/screens/favourites/favourites';
import Profile from './src/screens/profile/userprofile';
import ProductDetails from './src/screens/product_details/ProductDetails';
import Settings from './src/screens/settings/settings';
import CreateListing from './src/screens/create_listing/CreateListing';
import myListing from './src/screens/myListing/MyListings';
import MyListings from './src/screens/myListing/MyListings';
import { User, UserContext } from './UserContext';

const isSignedIn = false
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()


const ProfileStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name="CreateListing" component={CreateListing} options={{ headerShown: false }} />
      <Stack.Screen name="MyListing" component={MyListings} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/tabs/home_active.png')
            : require('./src/assets/tabs/home.png');
        } else if (route.name === 'ProfileStack') {
          icon = focused
            ? require('./src/assets/tabs/profile_active.png')
            : require('./src/assets/tabs/profile.png');
        }
        else if (route.name === 'Favourites') {
          icon = focused
            ? require('./src/assets/tabs/bookmark_active.png')
            : require('./src/assets/tabs/bookmark.png');
        }

        // You can return any component that you like here!
        return <Image style={{ width: 24, height: 24 }} source={icon} />;
      },
      headerShown: false,
      tabBarInactiveTintColor: colors.black,
      tabBarActiveTintColor: colors.blue,
      tabBarStyle: {borderColor: colors.lightGrey}
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
}


function App(): JSX.Element {

  const [user, setUser] = useState<User | null>(null);


  const theme = {
    dark: false,
    colors: {
      primary: colors.black,
      background: colors.white,
      card: 'rgb(255, 255, 255)',
      text: colors.black,
      border: colors.lightGrey,
      notification: colors.darkGrey,
    },
  }

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedIn ? (
              <>
              <Stack.Screen name='Tabs' component={Tabs} options={{headerShown: false}}/>
              <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
              </>
          ) : (
            <>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
          <Stack.Screen name="SingUp" component={Signup} options={{headerShown: false}} />
          <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
          </>
        )}
        </Stack.Navigator>
      </NavigationContainer>
      </UserContext.Provider>
    </SafeAreaProvider>
  );
}


export default App;
