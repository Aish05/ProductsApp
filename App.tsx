/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import Splash from './src/screens/splash';




function App(): JSX.Element {

  return (
    <SafeAreaView>
      <View>
        <Splash/>
      </View>

    </SafeAreaView>
  );
}


export default App;
